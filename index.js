/* =================Scroll Reveal=================== */

/* =================Typed Text=================== */
// let typed= new Typed('.multiple-texts', {
//     strings: ['Frontend Developer', 'Web Developer', 'Web Designer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });


function validation() {
    let input_field = document.querySelectorAll(".input_field");
    for (let i = 0; i < input_field.length; i++) {
      if (input_field[i].value === "" || input_field[i].value === null) {
        input_field[i].nextElementSibling.innerHTML =
        input_field[i].previousElementSibling.innerHTML + " is required";
      } else {
        input_field[i].nextElementSibling.innerHTML = "";
        input_field[i].value == ""
        window.location.href = 'login.html'
      }
    }
}
  
function createUser() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
    let userObj = {
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      password: password.value,
    };
  
    let savedData = localStorage.getItem("clientData");
    let dataArr = savedData ? JSON.parse(savedData) : [];
    dataArr.push(userObj);
    localStorage.setItem("clientData", JSON.stringify(dataArr));
}

function login() {
  let login_Email = document.getElementById("login_Email");
  let login_Password = document.getElementById("login_Password");
  let emailErr = document.getElementById("emailErr");
  let passwordErr = document.getElementById("passwordErr");

  if (login_Email.value === "") {
    emailErr.innerHTML = "Email is required";
  } else {
    emailErr.innerHTML = "";
  }

  if (login_Password.value === "") {
    passwordErr.innerHTML = "Password is required";
  } else {
    passwordErr.innerHTML = "";
    // setTimeout(() => {
    //   window.location.href = 'home.html'
    // }, 13000);
  }

  let savedData = localStorage.getItem("clientData");
  if (savedData) {
    const userData = JSON.parse(savedData);
    const getUser = userData.find((user) => user.email === login_Email.value);
    if (getUser) {
      if (getUser.password === login_Password.value) {
        login_Password.value = getUser.password;
        showModal("Welcome On Board " + getUser.firstname + '!😇');
        login_Password.value = "";
        login_Email.value = "";
        setTimeout(() => {
          window.location.href = 'home.html'
        }, 13000);
      } else {
        alert("Password Invalid");
        login_Password.value = "";
        login_Email.value = "";
      }
    } else {
      showModal("Invalid Account.");
      let modalInfo = document.getElementById('modal-info');
      modalInfo.innerHTML = 'Thanks for choosing <b>Bornian pharmaceuticals.</b> You get to do a self diagnosis and get prescriptions, if your situation is not serious and you do not want to book an appointment immediately. But unfortunately, this account was not found. Try inputing the correct details.'
    }
  } else {
    alert("Error Getting Page");
  }
}

function showModal(message) {
  // Get the modal element
  let modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  let closeBtn = document.getElementsByClassName("close")[0];

  // Get the modal content element
  let modalContent = document.querySelector(".modal-content");

  // Set the message in the modal
  document.getElementById("modal-title").innerHTML = message;

  // Display the modal
  modal.style.display = "block";

  // Close the modal when the user clicks on <span> (x)
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
}
  
let regBtn = document.getElementById("createUser_Btn");
regBtn.addEventListener("click", function (e) {
    e.preventDefault();
    validation();
    createUser();
});
  
  let loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", handleLogin);

function handleLogin(event) {
    event.preventDefault();
    // alert("hello");
    login();
}
  
  // SELF DIAGNOSIS FORM
  
function validateSelfDiagnosisForm() {
  // Get references to the checkbox and textarea elements
  const checkboxes = document.querySelectorAll(".myCheckbox");
  const textarea = document.getElementById("symptoms-input");
  
  // Get a reference to the element where you want to display the message
  const messageElement = document.getElementById("message");
  
  // Get a reference to the button element
  const symptomsButton = document.getElementById("symptoms-btn");
    let isChecked = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });
  
    if (!isChecked || textarea.value.trim() === "") {
      messageElement.textContent = "Please fill in the required details.";
    }else {
      messageElement.textContent = "";
    }
    if (textarea.value.trim() != "") {
      messageElement.textContent = "We do not have any solution to your illness and as a result, you would be directed to book an appointment with a doctor shortly.";
      setTimeout(() => {
        window.location.href='Doctor.html'
      },3000)
    }

    let checkbox1 = document.getElementById('input1');
    let checkbox2 = document.getElementById('input2');
    let checkbox3 = document.getElementById('input3');
    let checkbox4 = document.getElementById('input4');
    let checkbox5 = document.getElementById('input5');
    let checkbox6 = document.getElementById('input6');
    let checkbox7 = document.getElementById('input7');
    let checkbox8 = document.getElementById('input8');
    let checkbox9 = document.getElementById('input9');
    let checkbox10 = document.getElementById('input10');
    let checkbox11 = document.getElementById('input11');
    let checkbox12 = document.getElementById('input12');
    let checkbox13 = document.getElementById('input13');
    let checkbox14 = document.getElementById('input14');
    let checkbox15 = document.getElementById('input15');
    let checkbox16 = document.getElementById('input16');
    let checkbox17 = document.getElementById('input17');
    let checkbox18 = document.getElementById('input18');
    let checkbox19 = document.getElementById('input19');
    let checkbox20 = document.getElementById('input20');
    let checkbox21 = document.getElementById('input21');
    let checkbox22 = document.getElementById('input22');
    let checkbox23 = document.getElementById('input23');
    let checkbox24 = document.getElementById('input24');

  if(checkbox1.checked || checkbox16.checked || checkbox3.checked || checkbox7.checked || checkbox2.checked || checkbox6.checked){
    showModal('Your diagnosis is Malaria');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get any one of the following drugs: <b>Lumatem</b>,<b>Amatem Forte Tabalet</b>, <b>Artesunate</b>.'
    messageElement.textContent = "";
  }
  if(checkbox8.checked || checkbox19.checked || checkbox11.checked || checkbox9.checked || checkbox10.checked){
    showModal('Your diagnosis is Gastrointestinal disease');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get the following drugs: <b>Tetracycline Tablet 250mg</b>,<b>Flaggyl Tablet 400mg</b>, <b>Avomie Tablet</b>, <b>Syrup Gestid</b>.'
    messageElement.textContent = "";
  }
  if(checkbox6.checked || checkbox22.checked || checkbox11.checked || checkbox6.checked || checkbox20.checked || checkbox9.checked || checkbox23.checked){
    showModal('Your diagnosis is Ulcerative Colitis (Inflammatory Bowel Diseases)');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get the following drugs: <b>Paracetamol Tablet</b>,<b>Erythromycin Tablet</b>, <b>Piriton Tablet</b>, <b>Lozenges</b>.'
    messageElement.textContent = "";
  }
  if(checkbox19.checked || checkbox10.checked || checkbox6.checked || checkbox8.checked || checkbox2.checked){
    showModal('Your diagnosis is Typhoid');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get the following drugs: <b>Paracetamol Tablet</b>,<b>Avomie Tablet</b>, <b>Ciprotab Tablet by 14</b>, <b>Metronidazole tablet 400mg</b>.'
    messageElement.textContent = "";
  }
  if(checkbox3.checked || checkbox6.checked || checkbox14.checked || checkbox15.checked || checkbox7.checked || checkbox24.checked){
    showModal('Your diagnosis is Upper Respiratory Track Infection (URTI).');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get the following drugs: <b>Paracetamol Tablet</b>,<b>Avomie Tablet</b>, <b>Ciprotab Tablet by 14</b>, <b>Metronidazole tablet 400mg</b>.'
    messageElement.textContent = "";
  }
  if(checkbox5.checked || checkbox20.checked){
    showModal('Your diagnosis is Skin Disease.');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get the following drugs: <b>Calamine Lotion</b>,<b>Syrup Chloropheniramine</b>.'
    messageElement.textContent = "";
  }
  if(checkbox4.checked || checkbox23.checked || checkbox6.checked){
    showModal('Your diagnosed with High Blood Pressure.');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get the following drugs: <b>Paracetamol Tablet</b>, <b>Amlodipine Tablet 5mg</b>, <b>Linsinopril Tablet 5mg</b>, <b>Diazepam Tablet</b>.'
    messageElement.textContent = "";
  }
  if(checkbox18.checked || checkbox12.checked || checkbox20.checked || checkbox6.checked || checkbox21.checked){
    showModal('Your diagnosis is Asthma.');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get the following drugs: <b>Sabutamol Tablet</b>,<b>Ventolin Inhaler</b>, <b>Loratidine Tablet</b>.'
    messageElement.textContent = "";
  }
  if(checkbox17.checked || checkbox13.checked){
    showModal('Your diagnosis is Conjunctivitis.');
    let modalInfo = document.getElementById('modal-info');
    modalInfo.innerHTML = 'You can go to the nearby pharmacy or clinic and get the following drugs: <b>Paracetamol Tablet</b>,<b>Chloraphenical Eyedrop.</b>.'
    messageElement.textContent = "";
  }
}