//CHANGING PIC HEADER
function changeHeaderPicture() {
    if (document.getElementById("header").style.backgroundColor.valueOf() == "yellow") { 
        document.getElementById("header").style.backgroundColor = "pink";
        document.getElementById("header").style.backgroundImage = "url('images/landscape-me-1.jpg')";
        document.getElementById("header").style.color = "white";

    } else if (document.getElementById("header").style.backgroundColor.valueOf() == "pink") {
        document.getElementById("header").style.backgroundColor = "blue";
        document.getElementById("header").style.backgroundImage = "url('images/landscape-2.jpg')";
        document.getElementById("header").style.color = "lightblue";
    } else {
        
        document.getElementById("header").style.backgroundColor = "yellow";
        document.getElementById("header").style.backgroundImage = "url('images/landscape-3.jpg')";
        document.getElementById("header").style.color = "black";
    }
}

//ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active_acor");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
}


//MODAL_IMG JAVASCRIPT (ZOOM OUT MATERIAL IMAGE (from RIGHT Main Page))
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('img_focus');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//END MODAL_IMG JAVASCRIPT (ZOOM OUT MATERIAL IMAGE (from RIGHT Main Page))