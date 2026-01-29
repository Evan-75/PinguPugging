
// Service Worker explicit registration + indicator
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', { scope: './' })
    .then(reg => {
      document.documentElement.dataset.sw = 'active';
      console.log('SW active with scope', reg.scope);
    })
    .catch(err => {
      document.documentElement.dataset.sw = 'error';
      console.error('SW failed', err);
    });
} else {
  document.documentElement.dataset.sw = 'unsupported';
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initUI === 'function') {
    initUI();
  }
});

window.addEventListener('load', () => {
  if (typeof initAssets === 'function') {
    initAssets();
  }
});

function advanceQuiz() {
  if (!isRevealed) revealAnswer();
  else nextQuestion();
}



let currentElement = null;
let orderMode = 'random';
let orderedIndex = 0;
let lastElementNr = null;
let isRevealed = false;

/* ---------- FACT BOX MODE ---------- */
let factBoxMode = null;

/* ---------- FILTER STATE ---------- */
const lastChanged = {};
let activeFilter = null;

/* ---------- FILTER HISTORY ---------- */
const filterHistory = [];

function pushFilter(group, key) {
  filterHistory.push({ group, key });
}

function removeFilter(group, key) {
  for (let i = filterHistory.length - 1; i >= 0; i--) {
    if (filterHistory[i].group === group && filterHistory[i].key === key) {
      filterHistory.splice(i, 1);
      break;
    }
  }
}

function clearFilterHistory() {
  filterHistory.length = 0;
}

function getActiveFilterFromHistory() {
  return filterHistory.length ? filterHistory[filterHistory.length - 1] : null;
}

/* ---------- HELPERS ---------- */
function pickRandom(arr) {
  return Array.isArray(arr) && arr.length
    ? arr[Math.floor(Math.random() * arr.length)]
    : null;
}

function pickRandomMultiple(arr, max) {
  if (!Array.isArray(arr)) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, max);
}

function renderFactBox(html) {
  const box = document.getElementById('filter-info');
  if (box) box.innerHTML = html || '';
}

function clearFactBox() {
  renderFactBox('');
}

/* ---------- FACT BOX RENDER (SINGLE SOURCE) ---------- */
function renderFactBoxContent({ mode, element, filterInfo }) {
  let html = '';

  if (mode === 'element' && element) {
    const facts = pickRandomMultiple(element.fakta, 2);
    const trivia = pickRandom(element.trivia);

    html += `
      <div style="text-align:center">
        <div style="font-size:2em;font-weight:bold">${element.symbol}</div>
        <div>${element.name_en} / ${element.name_la}</div>
      </div>
      <br>
      <ul>
        ${facts.map(f => `<li>${f}</li>`).join('')}
      </ul>
      ${trivia ? `<em>${trivia}</em>` : ''}
    `;
  }

  if (mode === 'filter' && filterInfo) {
    const fact = pickRandom(filterInfo.facts);
    const trivia = pickRandom(filterInfo.trivia);

    html += `
      ${fact || ''}
      ${trivia ? `<br><br><em>${trivia}</em>` : ''}
    `;
  }

  renderFactBox(html);
}

/* ---------- HARD RESET OF SYMBOL CELLS ---------- */
function resetAllSymbolCells() {
  document.querySelectorAll('.cell .symbol').forEach(span => {
    const cell = span.closest('.cell');
    if (!cell) return;
    cell.textContent = cell.dataset.nr;
    cell.classList.remove('active');
  });
}

/* ---------- FILTERS ---------- */
function getGroupValues(group){
  const boxes = [...document.querySelectorAll(`input[data-group="${group}"]`)];
  const allBox = boxes.find(b => b.value === 'ALL');
  const nonAll = boxes.filter(b => b.value !== 'ALL');

  const checked = nonAll.filter(b => b.checked).map(b => b.value);

  if (checked.length === 0) {
    if (allBox) allBox.checked = true;
    return new Set(['ALL']);
  }

  if (allBox) allBox.checked = false;
  return new Set(checked);
}

function getFilterState() {
  return {
    category: getGroupValues('category'),
    block: getGroupValues('block'),
    period: getGroupValues('period')
  };
}

function getFilteredElements(){
  const f = getFilterState();

  return elements.filter(e =>
    (f.category.has('ALL') || f.category.has(e.serie)) &&
    (f.block.has('ALL') || f.block.has(e.block)) &&
    (f.period.has('ALL') || f.period.has(String(e.periode)))
  );
}

/* ---------- TABLE ---------- */
function buildTable(){
  const grid = document.getElementById('ptable-grid');
  const lan = document.getElementById('lanthanides');
  const act = document.getElementById('actinides');

  grid.innerHTML = '';
  lan.innerHTML = '';
  act.innerHTML = '';

  grid.appendChild(document.createElement('div'));
  for (let g = 1; g <= 18; g++) {
    const d = document.createElement('div');
    d.className = 'group-label';
    d.textContent = g;
    grid.appendChild(d);
  }

  for (let p = 1; p <= 7; p++) {
    const pl = document.createElement('div');
    pl.className = 'period-label';
    pl.textContent = p;
    grid.appendChild(pl);

    for (let g = 1; g <= 18; g++) {
      const e = elements.find(x => x.gruppe === g && x.periode === p && x.block !== 'f');
      if (e) {
        const d = document.createElement('div');
        d.className = 'cell ' + e.serie;
        d.id = 'cell-' + e.nr;
        d.dataset.nr = e.nr;
        d.dataset.symbol = e.symbol;
        d.textContent = e.nr;
        grid.appendChild(d);
      } else {
        grid.appendChild(document.createElement('div'));
      }
    }
  }

  elements.filter(e => e.block === 'f' && e.periode === 6).forEach(e => {
    const d = document.createElement('div');
    d.className = 'cell ' + e.serie;
    d.id = 'cell-' + e.nr;
    d.dataset.nr = e.nr;
    d.dataset.symbol = e.symbol;
    d.textContent = e.nr;
    lan.appendChild(d);
  });

  elements.filter(e => e.block === 'f' && e.periode === 7).forEach(e => {
    const d = document.createElement('div');
    d.className = 'cell ' + e.serie;
    d.id = 'cell-' + e.nr;
    d.dataset.nr = e.nr;
    d.dataset.symbol = e.symbol;
    d.textContent = e.nr;
    act.appendChild(d);
  });
}

/* ---------- QUIZ ---------- */
function nextQuestion(){

  // Clear fact box when starting new quiz
  const factList = document.getElementById('fact-list');
  if (factList) factList.innerHTML = '';
  const filterInfo = document.getElementById('filter-info');
  if (filterInfo) filterInfo.innerHTML = '';

  resetAllSymbolCells();
  document.querySelectorAll('.cell').forEach(c => c.classList.remove('active'));

  const pool = getFilteredElements();
  if (pool.length === 0) {
    document.getElementById('quiz-number').textContent = 'Ingen grunnstoff';
    document.getElementById('quiz-answer').textContent = '';
    currentElement = null;
    return;
  }

  let candidate = null;
  if (orderMode === 'ascending') {
    const sorted = pool.slice().sort((a,b) => a.nr - b.nr);
    candidate = sorted[orderedIndex % sorted.length];
    orderedIndex++;
  } else {
    if (pool.length === 1) {
      candidate = pool[0];
    } else {
      do {
        candidate = pool[Math.floor(Math.random() * pool.length)];
      } while (candidate.nr === lastElementNr);
    }
  }
  currentElement = candidate;
  lastElementNr = currentElement.nr;
  isRevealed = false;
  factBoxMode = 'element';

  document.getElementById('quiz-number').textContent = currentElement.nr;
  document.getElementById('quiz-answer').textContent = '';

  const cell = document.getElementById('cell-' + currentElement.nr);
  if (cell) cell.classList.add('active');
}

function revealAnswer(){
  if (!currentElement) return;

  resetAllSymbolCells();
  isRevealed = true;
  document.getElementById('quiz-answer').textContent = currentElement.navn;

  if (factBoxMode === 'element') {
    renderFactBoxContent({
      mode: 'element',
      element: currentElement
    });
  }

  const cell = document.getElementById('cell-' + currentElement.nr);
  if (cell) {
    cell.innerHTML = '<span class="symbol">' + currentElement.symbol + '</span>';
    cell.classList.add('active');
  }
}

/* ---------- EVENTS ---------- */
document.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (!isRevealed) revealAnswer();
    else nextQuestion();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#filters input').forEach(cb => {
    cb.addEventListener('change', e => {
      const group = e.target.dataset.group;
      const key = e.target.value;
      const checked = e.target.checked;

      resetAllSymbolCells();

      const boxes = [...document.querySelectorAll(`input[data-group="${group}"]`)];
      const allBox = boxes.find(b => b.value === 'ALL');
      if (key !== 'ALL' && checked && allBox) {
        allBox.checked = false;
      }

      if (key === 'ALL' && checked) {
        boxes.forEach(b => b.checked = (b === allBox));
        clearFilterHistory();
        factBoxMode = null;
        clearFactBox();
        return;
      }

      if (checked && key !== 'ALL') {
        pushFilter(group, key);
      } else if (!checked && key !== 'ALL') {
        removeFilter(group, key);
      }

      const active = getActiveFilterFromHistory();
      if (active) {
        factBoxMode = 'filter';
        const map = { category: 'categories', block: 'blocks', period: 'periods' };
        const info = filterInfo[map[active.group]][active.key];

        renderFactBoxContent({
          mode: 'filter',
          filterInfo: info
        });
      } else {
        factBoxMode = null;
        clearFactBox();
      }
    });
  });

  buildTable();
  nextQuestion();
});



// Mobile Quiz Trigger: dispatch existing Space keydown (no new logic)
(function () {
  const trigger = document.getElementById('mobile-quiz-trigger');
  if (!trigger) return;

  const fireSpace = () => {
    const evt = new KeyboardEvent('keydown', {
      key: ' ',
      code: 'Space',
      keyCode: 32,
      which: 32,
      bubbles: true
    });
    document.dispatchEvent(evt);
  };

  trigger.addEventListener('pointerdown', fireSpace, { passive: true });
  trigger.addEventListener('touchstart', fireSpace, { passive: true });
})();


document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app') || document.body;

  app.addEventListener('pointerup', e => {
    // Ignore filter interactions
    if (e.target.closest('#filters')) return;
    advanceQuiz();
  });
});

/* Mobile overlay toggle */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('overlay-close');
  if (!overlay || !closeBtn) return;
  closeBtn.addEventListener('click', () => overlay.setAttribute('aria-hidden','true'));
});

// Order mode selection
document.querySelectorAll('input[name="orderMode"]').forEach(r => {
  r.addEventListener('change', () => {
    orderMode = r.value;
    orderedIndex = 0;
  });
});
