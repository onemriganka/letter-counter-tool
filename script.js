function countLetters() {
    var text = document.getElementById("text-input").value;
    // Remove spaces from the input text
    var textWithoutSpaces = text.replace(/\s/g, "");
    var count = textWithoutSpaces.length;
    document.getElementById("count").textContent = count;
}
