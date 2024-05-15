"use strict";

window.onload=function(){

    const urlParams = new URLSearchParams(location.search);
	// location.search returns the query string part of the URL
    let cid = -1;
    if (urlParams.has("cid") === true)
    {
    cid = urlParams.get("cid")
    // call a method that fetches this course
    getCourse(cid);
    }

}

function getCourse(courseId){
    fetch('http://localhost:8081/api/courses/'+courseId)
   .then(response => response.json())
   .then(course => {
      // this returns a single course!
      const container = 
         document.getElementById('courseContainerDiv');

      // display one course property in a <p>
      const deptP = document.createElement('p');
      deptP.textContent = `Department: ${course.dept}`;
      container.appendChild(deptP);
  
      // repeat for each field you want to display
      const cNameP = document.createElement('p');
      cNameP.textContent = `CourseName: ${course.courseName}`;
      container.appendChild(cNameP);

      const instructorP = document.createElement('p');
      instructorP.textContent = `Instructor: ${course.instructor}`;
      container.appendChild(instructorP);

      const sDateP = document.createElement('p');
      sDateP.textContent = `StartDate: ${course.startDate}`;
      container.appendChild(sDateP);

    })
    .catch(error => {
        const erMsgP = document.createElement('p');
        erMsgP.textContent = `No such course!! Please try with different course ID`;
      container.appendChild(erMsgP);
      });

}

function deleteCourse(){

    const urlParams = new URLSearchParams(location.search);
	// location.search returns the query string part of the URL
    let cid = -1;
    if (urlParams.has("cid") === true)
    {
    cid = urlParams.get("cid")
    // call a method that fetches this course
    deleteSingleCourse(cid);
    }

}

function deleteSingleCourse(courseId){

    fetch("http://localhost:8081/api/courses/"+courseId, { 
        method: "DELETE",
    })
    // .then(response => response.json())
    .then(json => {
        let message = 
          document.getElementById("confirmationMessage");
          message.innerHTML = "Course deleted";
        let btn = document.getElementById("deleteBtn");
        btn.disabled=true;
        

    })
    .catch(err => {
        let message = 
          document.getElementById("confirmationMessage");
          message.innerHTML = "Unexpected error.";

    })

}