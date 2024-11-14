// script.js
function showBoxes() {
    var studentId = document.getElementById('studentId').value;
    if (studentId) {
        document.getElementById('boxes').style.display = 'block';
    } else {
        alert('Please enter a student ID.');
    }
}

function saveData() {
    var studentId = document.getElementById('studentId').value;
    var trCompleted = document.getElementById('trCompleted').checked;
    var hrCompleted = document.getElementById('hrCompleted').checked;
    var remarks = document.getElementById('remarks').value;

    // Here you can add code to save the data, e.g., send it to a server or store it locally
    console.log({
        studentId: studentId,
        trCompleted: trCompleted,
        hrCompleted: hrCompleted,
        remarks: remarks
    });

    alert('Data saved successfully!');
}