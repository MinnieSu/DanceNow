// When the user clicks on the button, toggle between hiding and showing the dropdown content.
var dropdowns = document.querySelectorAll(".dropdown-content");

function myFunction(element) {
  var thisDropdown = element.nextSibling.nextSibling;
  // When the user clicks one of the button, the dropdown content of the other buttons will be hidden.
  if (!thisDropdown.classList.contains("show")) {
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
  thisDropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
