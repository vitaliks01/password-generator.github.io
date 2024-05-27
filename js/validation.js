function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let Contact = document.forms["myForm"]["Cont"].value;
  let Pass1 = document.forms["myForm"]["pwd"].value;
  let Pass2 = document.forms["myForm"]["pwd2"].value;
  let Email = document.forms["myForm"]["email"].value;
  let atposition = Email.indexOf("@");
  let dotposition = Email.lastIndexOf(".");
  if (x == "" || x == null) {
    alert("Name must be filed out")
    return false;
  }
  if (/\d/.test(x) == true) {
    alert("Invalid name")
    return false;
  }
  if ((isNaN(x)) == false) {
    alert("Invalid name");
    return false;
  }
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= Email.length) {
    alert("Invalid Email");
    return false;
  }
  if (Contact.length != 10 || isNaN(Contact)) {
    alert("invalid Contact");
    return false;
  }
  // if (Pass1.length <= 6) {
  //   alert("Password is too small");
  //   return false;
  // }
  if ((/[a-z]/.test(Pass1) && /[0-9]/.test(Pass1) && /[A-Z]/.test(Pass1) && /[!@#$%^&*-\/]/.test(Pass1)) == false || (Pass1.length >= 6) == false) {
    alert("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
    return false;
  }

  if (Pass1 != Pass2) {
    alert("Password must be Same");
    return false;
  }
  else {
    return true;
  }
}


function myFunction() {
  var x = document.getElementById("myInput");
  var y = document.getElementById("myInput2");
  if (x.type === "password" || y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}