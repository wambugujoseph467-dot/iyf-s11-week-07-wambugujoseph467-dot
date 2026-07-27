// Get elements
const noteInput = document.getElementById('noteInput');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const notesList = document.getElementById('notesList');

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Display notes
displayNotes();

// Save button
saveBtn.addEventListener('click', function () {
    const note = noteInput.value.trim();

    if (note === '') {
        alert('Please enter a note.');
        return;
    }

    notes.push(note);

    localStorage.setItem('notes', JSON.stringify(notes));

    noteInput.value = '';

    displayNotes();
});

// Clear button
clearBtn.addEventListener('click', function () {
    localStorage.removeItem('notes');

    notes = [];

    displayNotes();
});

// Display function
function displayNotes() {
    notesList.innerHTML = '';

    notes.forEach(function (note) {
        const li = document.createElement('li');

        li.textContent = note;

        notesList.appendChild(li);
    });
}
