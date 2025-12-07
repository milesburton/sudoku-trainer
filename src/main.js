const startPuzzle = [
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
const solution = [
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
let currentPuzzle = JSON.parse(JSON.stringify(startPuzzle));
let currentStep = 0;
const steps = [
    {
        row: null,
        col: null,
        value: null,
        highlights: { row: [], col: [], focus: null },
        explanation: {
            title: 'Welcome to Your First Sudoku!',
            content: "This is a beginner-friendly Sudoku puzzle. The blue numbers are given - we can't change them. Our job is to fill in all the empty (white) cells.<br><br>Notice the thick black lines dividing the grid into 9 separate 3×3 boxes. These are important!<br><br><strong>The key technique:</strong> Find cells where only ONE number is possible by checking what's already in the row, column, and 3×3 box.",
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
            content: "Let's solve the top-left cell (highlighted in gold). What number can go here?<br><br>" +
                "<div class='checking'>" +
                'Checking Row 1: Has 2, 6, 7, 1<br>' +
                'Checking Column 1: Has 6, 1, 8, 7<br>' +
                'Checking Top-Left 3×3 Box: Has 6, 8, 1, 9<br><br>' +
                'Numbers used: {1, 2, 6, 7, 8, 9}<br>' +
                'Possible: {3, 4, 5}' +
                '</div>' +
                'By checking all constraints carefully, only <strong>4</strong> satisfies all three rules!',
            technique: '✨ Technique: <strong>Elimination</strong> - Cross off numbers that appear in the same row, column, or 3×3 box.',
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
            content: "Now the cell right next to it. We just placed a 4, so let's account for that!<br><br>" +
                "<div class='checking'>" +
                'Checking Row 1: Has 4, 2, 6, 7, 1<br>' +
                'Checking Column 2: Has 8, 9, 2, 5, 4<br>' +
                'Checking Top-Left 3×3 Box: Has 4, 6, 8, 1, 9<br><br>' +
                'Numbers used: {1, 2, 4, 5, 6, 7, 8, 9}<br>' +
                'Missing: <strong>Only 3!</strong>' +
                '</div>' +
                'Perfect! Only <strong>3</strong> is missing - this is a true "single candidate"!',
            technique: '✨ Technique: <strong>Single Candidate</strong> - When only ONE number is possible, that\'s our answer!',
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
            content: 'One more cell in the top-left 3×3 box!<br><br>' +
                "<div class='checking'>" +
                'Checking Row 1: Has 4, 3, 2, 6, 7, 1<br>' +
                'Checking Column 3: Has 7, 4, 9, 3<br>' +
                'Checking Top-Left Box: Has 4, 3, 6, 8, 1, 9<br><br>' +
                'Numbers used: {1, 2, 3, 4, 6, 7, 8, 9}<br>' +
                'Missing: <strong>Only 5!</strong>' +
                '</div>' +
                'The top-left box is now <strong>complete</strong>! ✓<br>Notice how we work systematically through areas.',
            technique: "✨ Strategy: Work on areas that are nearly complete - they're easier to solve!",
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
            content: "Let's continue working in the same area. Row 2, Column 3:<br><br>" +
                "<div class='checking'>" +
                'Checking Row 2: Has 6, 8, 7, 9<br>' +
                'Checking Column 3: Has 5, 7, 4, 9, 3<br>' +
                'Top-Left Box: Complete (all 9 numbers)<br><br>' +
                'Row needs: {1, 2, 3, 4, 5}<br>' +
                'Column needs: {1, 2, 6, 8}<br>' +
                'Intersection: {1, 2}' +
                '</div>' +
                'Looking at the middle-left 3×3 box constraints, <strong>2</strong> is the answer!',
            technique: '✨ Technique: Find the <strong>intersection</strong> of what multiple areas need.',
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
            content: 'Row 3, Column 3 - still working in column 3:<br><br>' +
                "<div class='checking'>" +
                'Checking Row 3: Has 1, 9, 4, 5<br>' +
                'Checking Column 3: Has 5, 2, 4, 9, 3<br>' +
                'Checking Top-Middle Box: Has 2, 6, 7, 4<br><br>' +
                'Column needs: {1, 6, 7, 8}<br>' +
                'Row needs: {2, 3, 6, 7, 8}<br>' +
                'Intersection: {6, 7, 8}' +
                '</div>' +
                'After checking the box, <strong>7</strong> is correct!',
            technique: '💡 Keep checking all three constraints: row, column, AND 3×3 box!',
        },
    },
];
function generateRemainingSteps() {
    const additionalSteps = [];
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
                        content: `Using elimination and checking all three constraints (row, column, and 3×3 box), we determine this cell must be <strong>${solution[r][c]}</strong>.`,
                        technique: stepNum % 8 === 0
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
function initGrid() {
    const grid = document.getElementById('grid');
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
                }
                else {
                    cell.classList.add('filled');
                }
            }
            grid.appendChild(cell);
        }
    }
}
function updateDisplay() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const step = steps[currentStep];
    const explanationDiv = document.getElementById('explanation');
    const stepCounter = document.getElementById('stepCounter');
    const progressBar = document.getElementById('progressBar');
    const progress = (currentStep / (steps.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;
    if (currentStep === 0) {
        stepCounter.textContent = 'Starting Position - Look at the 3×3 boxes!';
    }
    else {
        stepCounter.textContent = `Step ${currentStep} of ${steps.length - 1}`;
    }
    let html = `<h3>${step.explanation.title}</h3>`;
    html += `<p>${step.explanation.content}</p>`;
    if (step.explanation.technique) {
        html += `<div class="technique">${step.explanation.technique}</div>`;
    }
    explanationDiv.innerHTML = html;
    const highlightedRowEls = Array.from(document.querySelectorAll('.cell.highlight-row'));
    const highlightedColEls = Array.from(document.querySelectorAll('.cell.highlight-col'));
    const focusEl = document.querySelector('.cell.focus');
    const currentlyHighlighted = {
        row: new Set(highlightedRowEls.map((el) => el.id)),
        col: new Set(highlightedColEls.map((el) => el.id)),
        focus: (_a = focusEl === null || focusEl === void 0 ? void 0 : focusEl.id) !== null && _a !== void 0 ? _a : null,
    };
    const newHighlights = {
        row: new Set(((_c = (_b = step.highlights) === null || _b === void 0 ? void 0 : _b.row) === null || _c === void 0 ? void 0 : _c.map((idx) => `cell-${idx}`)) || []),
        col: new Set(((_e = (_d = step.highlights) === null || _d === void 0 ? void 0 : _d.col) === null || _e === void 0 ? void 0 : _e.map((idx) => `cell-${idx}`)) || []),
        focus: ((_f = step.highlights) === null || _f === void 0 ? void 0 : _f.focus) !== null ? `cell-${step.highlights.focus}` : null,
    };
    currentlyHighlighted.row.forEach((id) => {
        var _a;
        if (!newHighlights.row.has(id)) {
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.remove('highlight-row');
        }
    });
    currentlyHighlighted.col.forEach((id) => {
        var _a;
        if (!newHighlights.col.has(id)) {
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.remove('highlight-col');
        }
    });
    if (currentlyHighlighted.focus && currentlyHighlighted.focus !== newHighlights.focus) {
        (_g = document.getElementById(currentlyHighlighted.focus)) === null || _g === void 0 ? void 0 : _g.classList.remove('focus');
    }
    newHighlights.row.forEach((id) => {
        var _a;
        if (!currentlyHighlighted.row.has(id)) {
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.add('highlight-row');
        }
    });
    newHighlights.col.forEach((id) => {
        var _a;
        if (!currentlyHighlighted.col.has(id)) {
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.add('highlight-col');
        }
    });
    if (newHighlights.focus && newHighlights.focus !== currentlyHighlighted.focus) {
        (_h = document.getElementById(newHighlights.focus)) === null || _h === void 0 ? void 0 : _h.classList.add('focus');
    }
}
function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        const step = steps[currentStep];
        if (step.row !== null && step.col !== null && step.value !== null) {
            currentPuzzle[step.row][step.col] = step.value;
        }
        initGrid();
        updateDisplay();
        document.getElementById('prevBtn').disabled = false;
        if (currentStep === steps.length - 1) {
            document.getElementById('nextBtn').disabled = true;
            document.getElementById('completed').style.display = 'block';
        }
    }
}
function previousStep() {
    if (currentStep > 0) {
        const step = steps[currentStep];
        if (step.row !== null && step.col !== null) {
            currentPuzzle[step.row][step.col] = 0;
        }
        currentStep--;
        initGrid();
        updateDisplay();
        document.getElementById('nextBtn').disabled = false;
        document.getElementById('completed').style.display = 'none';
        if (currentStep === 0) {
            document.getElementById('prevBtn').disabled = true;
        }
    }
}
function resetPuzzle() {
    currentStep = 0;
    currentPuzzle = JSON.parse(JSON.stringify(startPuzzle));
    initGrid();
    updateDisplay();
    document.getElementById('prevBtn').disabled = true;
    document.getElementById('nextBtn').disabled = false;
    document.getElementById('completed').style.display = 'none';
}
// Initialize
initGrid();
updateDisplay();
// Expose handlers for buttons
window.nextStep = nextStep;
window.previousStep = previousStep;
window.resetPuzzle = resetPuzzle;
export {};
