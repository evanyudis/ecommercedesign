function openProduct(productName) {
    var i;
    var x = document.getElementsByClassName("color");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    document.getElementById(productName).style.display = "block"; 
  }

$('select').niceSelect();
