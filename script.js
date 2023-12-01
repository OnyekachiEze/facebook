const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');


selectImage.addEventListener('click', function () {
    inputFile.click();
})

inputFile.addEventListener('change', function () {
    const image = this.files[0]
    console.log(image);
    const reader = new FileReader();
    reader.onload = () => {
        const imgURL = reader.result;
        const img = document.createElement('img');
        img.src = imgURL;
        imgArea.appendChild(img);
        imgArea.appendChild('active');
    }

    reader.readAsDataURL(image);
})





const selectImage1 = document.querySelector('.select-image1');
const inputFile1 = document.querySelector('#file1');
const imgArea1 = document.querySelector('.img-area1');


selectImage1.addEventListener('click', function () {
    inputFile1.click();
})

inputFile1.addEventListener('change', function () {
    const image = this.files[0]
    console.log(image);
    const reader = new FileReader();
    reader.onload = () => {
        const imgURL = reader.result;
        const img = document.createElement('img');
        img.src = imgURL;
        imgArea1.appendChild(img);
        imgArea1.appendChild('active');
    }

    reader.readAsDataURL(image);
})





// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// like btn
document.addEventListener('DOMContentLoaded', function () {
    var likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', function () {
        window.lb = likeButton;
        likeButton.classList.toggle('selected');
    });
}, false);



//   loader 
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})


// about tab 
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



  
//   Alert box
function myFunction() {
    alert("waiting..............");
    alert("uploading post");
    alert("processing");
    alert("Posted");
    
  }