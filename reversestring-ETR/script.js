const textInput = document.getElementById("textInput");
const reverseButton = document.getElementById("reverseButton");
const result = document.getElementById("result");

function reverseString(text) {
    return text.split("").reverse().join("");
}

reverseButton.addEventListener("click", function () {
    const inputText = textInput.value;
    const reversedText = reverseString(inputText);

    result.textContent = reversedText;
});

textInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        reverseButton.click();
    }
});