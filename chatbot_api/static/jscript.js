document.addEventListener("DOMContentLoaded", function () {
    loadSelection(); // Load selection when the page is loaded
});

// Save the selected option to localStorage
function saveSelection() {
    var selectedOption = document.getElementById("assistant").value;
    localStorage.setItem("lastSelectedOption", selectedOption);
}

// Load the last selected option from localStorage and update the select element
function loadSelection() {
    var lastSelectedOption = localStorage.getItem("lastSelectedOption");
    if (lastSelectedOption) {
        var assistant = document.getElementById("assistant");
        if (assistant) {
            assistant.value = lastSelectedOption;
        }
    }
}

// Using AJAX to send the variable to the Flask server
var xhr = new XMLHttpRequest();
var lastSelectedOption = localStorage.getItem("lastSelectedOption");
xhr.open("POST", "/extract_variable", true);
xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");  // Set content type to text/plain
xhr.send(JSON.stringify({lastSelectedOption}));


// Streaming the output
const eventSource = new EventSource("/stream");
        
        eventSource.onmessage = function(event) {
            const newText = event.data;
            document.getElementById('existing-message').innerHTML += '<br>' + newText;
};
