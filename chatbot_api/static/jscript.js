document.addEventListener("DOMContentLoaded", function () {
    loadSelection(); // Load selection when the page is loaded
});

// Save the selected option to localStorage-----------------------------------------------------
function saveSelection() {
    var selectedOption = document.getElementById("assistant").value;
    localStorage.setItem("lastSelectedOption", selectedOption);
}

// Load the last selected option from localStorage and update the select element----------------
function loadSelection() {
    var lastSelectedOption = localStorage.getItem("lastSelectedOption");
    if (lastSelectedOption) {
        var assistant = document.getElementById("assistant");
        if (assistant) {
            assistant.value = lastSelectedOption;
        }
    }
}

// Using AJAX to send the variable to the Flask server------------------------------------------
var xhr = new XMLHttpRequest();
var lastSelectedOption = localStorage.getItem("lastSelectedOption");
xhr.open("POST", "/extract_variable", true);
xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
xhr.send(JSON.stringify({lastSelectedOption}));


// Extracting query------------------------------------------------------------------------------
const button = document.getElementById("submit");
const input_element = document.getElementById("query-text");
function extractText(){
	string = input_element.value;
	return string;
}

// Using button to send the query to the flask application----------------------------------------
button.addEventListener('click', function() {
	var query = extractText();
	console.log(query, "1234567890987654321");
	var que = new XMLHttpRequest();
	que.open("POST", "/extract_query", true);
	que.setRequestHeader("Content-Type", "application/json");
	que.send(JSON.stringify({query}));
});

// Using button to send the post request and hit the post function in flask app-------------------
document.getElementById('submit').addEventListener('click', function() {
	fetch(`/handle_assistant`, {
		method: 'POST',
		headers: {
		    'Content-Type': 'application/json'
		},
		body: JSON.stringify({ assistant: lastSelectedOption })
	    })
	    .then(response => response)
	    .then(data => {
		console.log('Response from server:', data);
		var textData = document.getElementById('text-data').getAttribute('data-text');
		console.log(textData);
		document.getElementById("text-data").innerHTML = textData;
	    })
	    .catch(error => {
		console.error('Error:', error);
	    });
            
});



