function myFunction(id) {
  var x = document.getElementById(id);
  
  if (x.style.display === "block") {
    x.style.display = "none";
    console.log('none myfunction')
  } else {
    x.style.display = "block";
  }
}

