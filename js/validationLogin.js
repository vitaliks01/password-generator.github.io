function validateForm() {
  let Pass1 = document.forms["myForm"]["Password"].value;
  let Email = document.forms["myForm"]["Email"].value;
  let atposition = Email.indexOf("@");
  let dotposition = Email.lastIndexOf(".");


  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= Email.length) {
    alert("Invalid Email");
    return false;
  }

  else if (Pass1.length<=6) {
    alert("Password is too small");
    return false;
  }

  else {

    return true;
  }
}

function myFunction() {


  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
