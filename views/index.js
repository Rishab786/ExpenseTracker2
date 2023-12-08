const inputName= document.getElementById("name");
const inputEmail=document.getElementById("email");
const inputPassword=document.getElementById("password");
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const userName = inputName.value;
    const userEmail = inputEmail.value;
    const userPassword = inputPassword.value;
    var id = Math.random();
    if (userEmail === "") {
      alert("please enter correct Name");
    } else if (userEmail === "") {
      alert("please enter valid Email Address");
    }
    else if (userPassword==="") {
        alert("please enter valid Password");
      }
    //  else {
    //   savePost(link, description, id);
    //   clear();
    // }
  });