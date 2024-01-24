// Extracting the trait from the form---------------------------------------------------------------
function getTrait() {
    var selectElement = document.querySelector('#assistant');
    var output = selectElement.value;
    return output;
}

//Using AJAX to send the variable to the Flask server and extracting query--------------------------
const button = document.getElementById("submit");
const input_element = document.getElementById("query-text");


function extractText(){
	string = input_element.value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/extract_variable", true);
	xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	xhr.send(JSON.stringify({lastSelectedOption: getTrait()}));
	return string;
}

// Using button to send the query to the flask application-------------------------------------------
input_element.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Programmatically click the submit button
        event.preventDefault();
        button.click();
    }
});
button.addEventListener('click', function() {
	event.preventDefault();
	var query = extractText();
	console.log(query);
	var que = new XMLHttpRequest();
	que.open("POST", "/extract_query", true);
	que.setRequestHeader("Content-Type", "application/json");
	que.send(JSON.stringify({query}));
});


// Using button to send the post request and hit the post function in flask app and update html page--
document.getElementById('submit').addEventListener('click', function() {
	fetch(`/handle_assistant`, {
		method: 'POST',
		headers: {
		    'Content-Type': 'application/json'
		}
	    })
	    .then(response => response.text())
	    .then(data => {
		let textData = data;
		var number = textData.split(" ");
		var number = parseInt(number[number.length -1]);
		var new_res = textData.slice(number+1, textData.length);
		new_res = new_res.split(" ");
		new_res = new_res.slice(0, new_res.length-1);
		document.getElementById("text-data").innerHTML = textData.slice(0,number+1);
		
		updateTextData(new_res);	
		
	    })
	    .catch(error => {
		console.error('Error:', error);
	    });
            
});

//Adding a sleep timer--------------------------------------------------------------------------------
async function updateTextData(new_res) {
    for (let i = 0; i < new_res.length; i++) {
        var html = document.getElementById("text-data").innerHTML;
        html = html + new_res[i] + " ";
        document.getElementById("text-data").innerHTML = html;

        await new Promise(resolve => setTimeout(resolve, 200));
    }
};


