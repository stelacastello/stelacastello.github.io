function generateInputFields() {
    const count = document.getElementById('subjectCount').value;
    const marksInput = document.getElementById('marksInput');

    let inputFields = '';

    for (let i = 1; i <= count; i++) {
        inputFields += `<label for="mark${i}">Subject ${i}:</label>
                        <input type="number" id="mark${i}" placeholder="Enter mark"><br>`;
    }

    marksInput.innerHTML = inputFields;
    marksInput.style.display = 'block';
}

function calculateResults() {
    const count = document.getElementById('subjectCount').value;
    let totalMarks = 0;
    const marks = [];

    for (let i = 1; i <= count; i++) {
        const mark = parseFloat(document.getElementById(`mark${i}`).value);
        totalMarks += mark;
        marks.push(mark);
    }

    const average = totalMarks / count;
    const grade = calculateGrade(average);

    displayResults(marks, average, grade);
}

function calculateGrade(average) {
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}

function displayResults(marks, average, grade) {
    let resultText = `<h2>Results</h2>
                     <p>Total Marks: ${marks.join(', ')}</p>
                     <p>Average Mark: ${average.toFixed(2)}</p>
                     <p>Grade: ${grade}</p>`;

    document.getElementById('results').innerHTML = resultText;
}
