// Create JSON object to include in the request body

function addNewUser(){
    let bodyData = {
        id : " ",
        dept : document.getElementById("dept").value,
        courseNum : document.getElementById("courseNum").value,
        courseName : document.getElementById("courseName").value,
        instructor : document.getElementById("instructor").value,
        startDate : document.getElementById("startDate").value,
        numDays : document.getElementById("numDays").value
    }
    
    // Send the request
    
    fetch("http://localhost:8081/api/courses", { 
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type": 
                  "application/json; charset=UTF-8"}
    
    })
    .then(response => response.json())
    .then(json => {
        let message = "Course" + json.id + "added successfully";
        console.log("record added")
        let confirmationMessage = document.getElementById(confirmationMessage);
        confirmationMessage.innerHTML = message;
    
    
    })
    .catch(err => {
        // If the POST returns an error, display a message
        let message = 
           document.getElementById(confirmationMessage);
           message.innerHTML = "Unexpected error";
    });
}
