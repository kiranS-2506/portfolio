const hireMeButton = document.getElementById("hireMeButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Show popup when "Hire Me" is clicked
hireMeButton.addEventListener("click", function() {
  popup.style.display = "flex";
});

// Close popup when close button is clicked
closePopup.addEventListener("click", function() {
  popup.style.display = "none";
});

// Close popup if clicked outside of the content area
window.addEventListener("click", function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});


const hamburger=document.querySelector(".hamburger")
const menuBar=document.querySelector(".menu-bar")

hamburger.addEventListener("click",() =>{
  hamburger.classList.toggle("active")
  menuBar.classList.toggle("active")
})
document.querySelectorAll(".menu-list").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active")
    menuBar.classList.remove("active")

}))