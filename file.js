const images = document.querySelectorAll("#slides img");
let i = 0;
function slide_show(){
    images[i].classList.remove("active");
    i = (i+1) % images.length ;
    images[i].classList.add("active") ;
}
setInterval(slide_show , 3000);


function askName() {
    const username = prompt("Please enter your name:");
    if (username) {
      document.cookie = "username=${username};max-age=86400";
      alert(`Name "${username}" saved in cookie!`);
    } else {
      alert("No name entered.");
    }
  }