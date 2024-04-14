function getMarks() {
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

function calculateResult() {
    const count = document.getElementById('subjectCount').value;
    let totalMarks = 0;

    for (let i = 1; i <= count; i++) {
        const mark = parseFloat(document.getElementById(`mark${i}`).value);
        totalMarks += mark;
    }

    const average = totalMarks / count;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Average Mark: ${average.toFixed(2)}`;
}
