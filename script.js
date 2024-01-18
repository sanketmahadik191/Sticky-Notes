// Get references to the global variables needed
const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

const noteColour = document.getElementById("col");
// const fontColour = document.getElementById("fontCol");
noteColour.value = "#ffffff"
    // fontColour.value = "#000000"

// Add note event
addNoteButton.addEventListener("click", () => addNote(noteColour.value));

// Function to create a new note element
function createNoteElement(id, content, noteColour) {
    // Create a new note container
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.style.backgroundColor = `${noteColour}`;
    // element.style.color = `${fontColour}`;
    element.value = content;
    element.placeholder = "Write Your Note Here....";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });
    // double-click to delete note 
    element.addEventListener("dblclick", () => {
        deleteNote(id, element);
    });

    return element;
}

// Function to add a new note to the container
function addNote(noteColour) {
    // genrate unique id with date.now
    const noteId = Date.now();
    // Create a new note element and insert it before the "Add Note" button
    const noteElement = createNoteElement(noteId, "", noteColour);
    notesContainer.insertBefore(noteElement, addNoteButton);
}

// Function to delete a note 
function deleteNote(id, element) {
    notesContainer.removeChild(element);
}
