let name = document.getElementById("name");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
let gender = document.getElementById("gender");
let date = document.getElementById("date");
let time = document.getElementById("time");
let textarea = document.getElementById("textarea");

function validation3() {
    
  
    let nameErr = document.querySelector(".nameErr");
    let phoneErr = document.querySelector(".phoneErr");
    let emailErr = document.querySelector(".emailErr");
    let genderErr = document.querySelector(".genderErr");
    let dateErr = document.querySelector(".dateErr");
    let timeErr = document.querySelector(".timeErr");
    let textErr = document.querySelector(".textErr");
  
    // Reset error messages
    nameErr.innerHTML = "";
    phoneErr.innerHTML = "";
    emailErr.innerHTML = "";
    genderErr.innerHTML = "";
    dateErr.innerHTML = "";
    timeErr.innerHTML = "";
    textErr.innerHTML = "";
  
    let isValid = true;
  
    if (name.value.trim() === "") {
      nameErr.innerHTML = "Kindly enter your full Name";
      nameErr.classList.add("err");
      isValid = false;
    }
    if (phoneNumber.value.trim() === "") {
      phoneErr.innerHTML = "Kindly enter your Phone Number";
      phoneErr.classList.add("err");
      isValid = false;
    }
    if (email.value.trim() === "") {
      emailErr.innerHTML = "Kindly enter your Email";
      emailErr.classList.add("err");
      isValid = false;
    }
    if (gender.value.trim() === "") {
        genderErr.innerHTML = "Kindly select your gender";
        genderErr.classList.add("err");
        isValid = false;
    }
    if (date.value.trim() === "") {
      dateErr.innerHTML = "Date for consultation is required";
      dateErr.classList.add("err");
      isValid = false;
    }
    if (time.value.trim() === "") {
      timeErr.innerHTML = "Time for consultation is required";
      timeErr.classList.add("err");
      isValid = false;
    }
    if (textarea.value.trim() === "") {
      textErr.innerHTML = "Kindly enter your message";
      textErr.classList.add("err");
      isValid = false;
    }
  
    return isValid;
  }
  // validation3();
  
  let appointment_form = document.querySelector(".appointment_form");
  let appointment_Btn = document.getElementById("appointment_Btn");
  
  appointment_Btn.onclick = (e) => {
    e.preventDefault();
    if (validation3()) {
        setTimeout(() => {
            showModal("Form Submitted.");
        }, 500)
        bookAppointment();
    } else {
        return;
    }
};


function showModal(message) {
    // Get the modal element
    let modal = document.getElementById("myModal");
  
    // Get the <span> element that closes the modal
    let closeBtn = document.getElementsByClassName("close")[0];
  
    // Get the modal content element
    let modalContent = document.querySelector(".modal-content");
  
    // Set the message in the modal
    modalContent.querySelector("h2").textContent = message;
  
    // Display the modal
    modal.style.display = "block";
  
    // Close the modal when the user clicks on <span> (x)
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
}


function bookAppointment(){
    if (validation3){
      let timeArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      let  appointmentArr = []
      let appointmentDetails = {
        fullname : name.value,
        phoneNumber : phoneNumber.value,
        email : email.value,
        gender : gender.value,
        date : date.value,
        time : time.value,
        textarea : textarea.value
      }
      appointmentArr += appointmentDetails;
      console.log(appointmentArr);
      console .log(appointmentDetails);

      let timer = parseInt(time.value);
      console.log(timer);
      
      let modalContent = document.getElementById("modalContent")
      let bookingtime = false;

      if (timer < 8 || timer > 18){
        alert('Sorry not consulting hours. Please Select another time')
      }
      else if(timeArr.includes(timer)) {
        console.log('You have booked a session');
        bookingtime = true;

        let invoiceName = `<h3>Name: ${name.value}</h3>`
        let invoiceDate = `<h3>Date: ${date.value}</h3>`
        let invoiceTime = `<h3>Time: ${time.value}</h3>`
        modalContent.innerHTML += invoiceName;
        modalContent.innerHTML += invoiceDate;
        modalContent.innerHTML += invoiceTime;
      }
    }
}