function hideText() {
    const text = document.getElementById('text');
    const button = document.getElementById('button');
    if (text.hidden) {
        text.hidden = false;
        button.innerText = "Hide the text above";
    } else {
        text.hidden = true;
        button.innerText = "Show the text above";
    }
}