function copyr() {
    var today = new Date();
    var y = today.getFullYear();
    document.getElementById('copy').innerHTML = 
    "&copy; " + y + " Víctor M. Mendoza E.";
}


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");

function zom(obj){
  modal.style.display = "block";
  modalImg.src = obj.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}