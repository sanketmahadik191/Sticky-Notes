console.log(56);

// let textColour = document.querySelector("text-colour");
// let input = textColour[1].children[0];
// input.value = "#00ffa1";

let button2 = document.querySelector(".add-note");
let right_container = document.querySelector(".right-container-notes");
let textarea = document.querySelector("textarea");

button2.addEventListener('click', function() {
    console.log(10);
    if (textColour[0].value == "") {
        alert("Enter Some Text");
        return;
    }
    addNotes(textColour[0].value, input.value);
    textColour[0].value = "";
});

function addNotes(note, colour) {
    div1 = document.createElement("div");
    div1.innerHTML = `<p>${note}</p>`;
    right_container.appendChild(div1);
}