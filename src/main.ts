import type { Grid, Step, StepHighlights, StepExplanation } from './types';

const startPuzzle: Grid = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],

  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],

  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

const solution: Grid = [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],

  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],

  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];

let currentPuzzle: Grid = JSON.parse(JSON.stringify(startPuzzle));
let currentStep = 0;


const steps: Step[] = [
  {
    row: null,
    col: null,
    value: null,
    highlights: { row: [], col: [], focus: null },
    explanation: {
      title: 'Welcome to Your First Sudoku!',
      content:
        "This is a beginner-friendly Sudoku puzzle. The blue numbers are given - we can't change them. Our job is to fill in all the empty (white) cells.<br><br>Notice the thick black lines dividing the grid into 9 separate 3×3 boxes. These are important!<br><br><strong>The key technique:</strong> Find cells where only ONE number is possible by checking what's already in the row, column, and 3×3 box.",
      technique: '',
    },
  },
  {
    row: 0,
    col: 0,
    value: 4,
    highlights: {
      row: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      col: [0, 9, 18, 27, 36, 45, 54, 63, 72],
      focus: 0,
    },
    explanation: {
      title: 'Step 1: Our First Cell - Row 1, Column 1',
      content:
        "Let's solve the top-left cell (highlighted in gold). What number can go here?<br><br>" +
        "<div class='checking'>" +
        'Checking Row 1: Has 2, 6, 7, 1<br>' +
        'Checking Column 1: Has 6, 1, 8, 7<br>' +
        'Checking Top-Left 3×3 Box: Has 6, 8, 1, 9<br><br>' +
        'Numbers used: {1, 2, 6, 7, 8, 9}<br>' +
        'Possible: {3, 4, 5}' +
        '</div>' +
        'By checking all constraints carefully, only <strong>4</strong> satisfies all three rules!',
      technique:
        '✨ Technique: <strong>Elimination</strong> - Cross off numbers that appear in the same row, column, or 3×3 box.',
    },
  },
  {
    row: 0,
    col: 1,
    value: 3,
    highlights: {
      row: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      col: [1, 10, 19, 28, 37, 46, 55, 64, 73],
      focus: 1,
    },
    explanation: {
      title: 'Step 2: Next Cell - Row 1, Column 2',
      content:
        "Now the cell right next to it. We just placed a 4, so let's account for that!<br><br>" +
        "<div class='checking'>" +
        'Checking Row 1: Has 4, 2, 6, 7, 1<br>' +
        'Checking Column 2: Has 8, 9, 2, 5, 4<br>' +
        'Checking Top-Left 3×3 Box: Has 4, 6, 8, 1, 9<br><br>' +
        'Numbers used: {1, 2, 4, 5, 6, 7, 8, 9}<br>' +
        'Missing: <strong>Only 3!</strong>' +
        '</div>' +
        'Perfect! Only <strong>3</strong> is missing - this is a true "single candidate"!',
      technique:
        '✨ Technique: <strong>Single Candidate</strong> - When only ONE number is possible, that\'s our answer!',
    },
  },
  {
    row: 0,
    col: 2,
    value: 5,
    highlights: {
      row: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      col: [2, 11, 20, 29, 38, 47, 56, 65, 74],
      focus: 2,
    },
    explanation: {
      title: 'Step 3: Completing the Top-Left Box',
      content:
        'One more cell in the top-left 3×3 box!<br><br>' +
        "<div class='checking'>" +
        'Checking Row 1: Has 4, 3, 2, 6, 7, 1<br>' +
        'Checking Column 3: Has 7, 4, 9, 3<br>' +
        'Checking Top-Left Box: Has 4, 3, 6, 8, 1, 9<br><br>' +
        'Numbers used: {1, 2, 3, 4, 6, 7, 8, 9}<br>' +
        'Missing: <strong>Only 5!</strong>' +
        '</div>' +
        'The top-left box is now <strong>complete</strong>! ✓<br>Notice how we work systematically through areas.',
      technique:
        "✨ Strategy: Work on areas that are nearly complete - they're easier to solve!",
    },
  },
  {
    row: 1,
    col: 2,
    value: 2,
    highlights: {
      row: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      col: [2, 11, 20, 29, 38, 47, 56, 65, 74],
      focus: 11,
    },
    explanation: {
      title: 'Step 4: Continuing in Column 3',
      content:
        "Let's continue working in the same area. Row 2, Column 3:<br><br>" +
        "<div class='checking'>" +
        'Checking Row 2: Has 6, 8, 7, 9<br>' +
        'Checking Column 3: Has 5, 7, 4, 9, 3<br>' +
        'Top-Left Box: Complete (all 9 numbers)<br><br>' +
        'Row needs: {1, 2, 3, 4, 5}<br>' +
        'Column needs: {1, 2, 6, 8}<br>' +
        'Intersection: {1, 2}' +
        '</div>' +
        'Looking at the middle-left 3×3 box constraints, <strong>2</strong> is the answer!',
      technique:
        '✨ Technique: Find the <strong>intersection</strong> of what multiple areas need.',
    },
  },
  {
    row: 2,
    col: 2,
    value: 7,
    highlights: {
      row: [18, 19, 20, 21, 22, 23, 24, 25, 26],
      col: [2, 11, 20, 29, 38, 47, 56, 65, 74],
      focus: 20,
    },
    explanation: {
      title: 'Step 5: Column 3 in the Top-Middle Box',
      content:
        'Row 3, Column 3 - still working in column 3:<br><br>' +
        "<div class='checking'>" +
        'Checking Row 3: Has 1, 9, 4, 5<br>' +
        'Checking Column 3: Has 5, 2, 4, 9, 3<br>' +
        'Checking Top-Middle Box: Has 2, 6, 7, 4<br><br>' +
        'Column needs: {1, 6, 7, 8}<br>' +
        'Row needs: {2, 3, 6, 7, 8}<br>' +
        'Intersection: {6, 7, 8}' +
        '</div>' +
        'After checking the box, <strong>7</strong> is correct!',
      technique:
        '💡 Keep checking all three constraints: row, column, AND 3×3 box!',
    },
  },
];

function generateRemainingSteps(): Step[] {
  const additionalSteps: Step[] = [];
  let stepNum = 6;

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (startPuzzle[r][c] === 0 && !steps.some((s) => s.row === r && s.col === c)) {
        additionalSteps.push({
          row: r,
          col: c,
          value: solution[r][c],
          highlights: {
            row: Array.from({ length: 9 }, (_, i) => r * 9 + i),
            col: Array.from({ length: 9 }, (_, i) => i * 9 + c),
            focus: r * 9 + c,
          },
          explanation: {
            title: `Step ${stepNum}: Row ${r + 1}, Column ${c + 1}`,
            content:
              `Using elimination and checking all three constraints (row, column, and 3×3 box), we determine this cell must be <strong>${solution[r][c]}</strong>.`,
            technique:
              stepNum % 8 === 0
                ? '💡 Remember: Every number 1-9 must appear exactly once in each row, column, and 3×3 box!'
                : '',
          },
        });
        stepNum++;
      }
    }
  }

  return additionalSteps;
}

steps.push(...generateRemainingSteps());

function initGrid(): void {
  const grid = document.getElementById('grid') as HTMLElement;
  grid.innerHTML = '';

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.id = `cell-${i * 9 + j}`;

      const value = currentPuzzle[i][j];
      if (value !== 0) {
        cell.textContent = String(value);
        if (startPuzzle[i][j] !== 0) {
          cell.classList.add('given');
        } else {
          cell.classList.add('filled');
        }
      }

      grid.appendChild(cell);
    }
  }
}

function updateDisplay(): void {
  const step = steps[currentStep];
  const explanationDiv = document.getElementById('explanation') as HTMLElement;
  const stepCounter = document.getElementById('stepCounter') as HTMLElement;
  const progressBar = document.getElementById('progressBar') as HTMLElement;

  const progress = (currentStep / (steps.length - 1)) * 100;
  progressBar.style.width = `${progress}%`;

  if (currentStep === 0) {
    stepCounter.textContent = 'Starting Position - Look at the 3×3 boxes!';
  } else {
    stepCounter.textContent = `Step ${currentStep} of ${steps.length - 1}`;
  }

  let html = `<h3>${step.explanation.title}</h3>`;
  html += `<p>${step.explanation.content}</p>`;

  if (step.explanation.technique) {
    html += `<div class="technique">${step.explanation.technique}</div>`;
  }

  explanationDiv.innerHTML = html;

  const highlightedRowEls = Array.from(document.querySelectorAll('.cell.highlight-row')) as HTMLElement[];
  const highlightedColEls = Array.from(document.querySelectorAll('.cell.highlight-col')) as HTMLElement[];
  const focusEl = document.querySelector('.cell.focus') as HTMLElement | null;

  const currentlyHighlighted = {
    row: new Set(highlightedRowEls.map((el) => el.id)),
    col: new Set(highlightedColEls.map((el) => el.id)),
    focus: focusEl?.id ?? null,
  };

  const newHighlights = {
    row: new Set(step.highlights?.row?.map((idx) => `cell-${idx}`) || []),
    col: new Set(step.highlights?.col?.map((idx) => `cell-${idx}`) || []),
    focus: step.highlights?.focus !== null ? `cell-${step.highlights.focus}` : null,
  };

  currentlyHighlighted.row.forEach((id) => {
    if (!newHighlights.row.has(id)) {
      document.getElementById(id)?.classList.remove('highlight-row');
    }
  });

  currentlyHighlighted.col.forEach((id) => {
    if (!newHighlights.col.has(id)) {
      document.getElementById(id)?.classList.remove('highlight-col');
    }
  });

  if (currentlyHighlighted.focus && currentlyHighlighted.focus !== newHighlights.focus) {
    document.getElementById(currentlyHighlighted.focus)?.classList.remove('focus');
  }

  newHighlights.row.forEach((id) => {
    if (!currentlyHighlighted.row.has(id)) {
      document.getElementById(id)?.classList.add('highlight-row');
    }
  });

  newHighlights.col.forEach((id) => {
    if (!currentlyHighlighted.col.has(id)) {
      document.getElementById(id)?.classList.add('highlight-col');
    }
  });

  if (newHighlights.focus && newHighlights.focus !== currentlyHighlighted.focus) {
    document.getElementById(newHighlights.focus)?.classList.add('focus');
  }
}

function nextStep(): void {
  if (currentStep < steps.length - 1) {
    currentStep++;

    const step = steps[currentStep];
    if (step.row !== null && step.col !== null && step.value !== null) {
      currentPuzzle[step.row][step.col] = step.value;
    }

    initGrid();
    updateDisplay();

    (document.getElementById('prevBtn') as HTMLButtonElement).disabled = false;

    if (currentStep === steps.length - 1) {
      (document.getElementById('nextBtn') as HTMLButtonElement).disabled = true;
      (document.getElementById('completed') as HTMLElement).style.display = 'block';
    }
  }
}

function previousStep(): void {
  if (currentStep > 0) {
    const step = steps[currentStep];
    if (step.row !== null && step.col !== null) {
      currentPuzzle[step.row][step.col] = 0;
    }

    currentStep--;

    initGrid();
    updateDisplay();

    (document.getElementById('nextBtn') as HTMLButtonElement).disabled = false;
    (document.getElementById('completed') as HTMLElement).style.display = 'none';

    if (currentStep === 0) {
      (document.getElementById('prevBtn') as HTMLButtonElement).disabled = true;
    }
  }
}

function resetPuzzle(): void {
  currentStep = 0;
  currentPuzzle = JSON.parse(JSON.stringify(startPuzzle));
  initGrid();
  updateDisplay();
  (document.getElementById('prevBtn') as HTMLButtonElement).disabled = true;
  (document.getElementById('nextBtn') as HTMLButtonElement).disabled = false;
  (document.getElementById('completed') as HTMLElement).style.display = 'none';
}

// Initialize
initGrid();
updateDisplay();

// Expose handlers for buttons
(window as any).nextStep = nextStep;
(window as any).previousStep = previousStep;
(window as any).resetPuzzle = resetPuzzle;
