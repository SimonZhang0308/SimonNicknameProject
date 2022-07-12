
let determineBtn = document.getElementById("random");
let determineAll = document.getElementById("all")
let outputSpan = document.getElementById("nickname");
let firstnameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");

const nicks = ["Crusher", "the Scientist", "Twinkle-toes", "the Coder", "the Jester", "the Sloth", "Quick-Silver"];
determineBtn.addEventListener("click", getnickname);
determineAll.addEventListener("click", showAll);

function getnickname() {
    let firstName = firstnameInput.value;
    let lastName = lastNameInput.value;
    let max = nicks.length - 1;
    let randNum = Math.floor(Math.random() * max);
    outputSpan.innerHTML = firstName + " " + nicks[randNum] + " " + lastName;
}

function showAll() {
    var allNames = "";
    let firstName = firstnameInput.value;
    let lastName = lastNameInput.value;
    let lenNicks = nicks.length
    for (i = 0; i < nicks.length; i++) {
        allNames += firstName + " " + nicks[i] + " " + lastName + " <br> ";
    }
    outputSpan.innerHTML = allNames;
}
