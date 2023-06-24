const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

dropdownTogglers.forEach((dropdownToggler, index) => {
  const dropdownMenu = dropdownMenus[index];
  dropdownToggler.addEventListener("click", function(){
    if (!dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.add("show");
        requestAnimationFrame(function(){
          dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
        });
    } else {
      dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
        requestAnimationFrame(function(){
          dropdownMenu.style.removeProperty("height");
        });
    }
  });
  dropdownMenu.addEventListener("transitionend", function(event){
    if (event.target === dropdownMenu) {
      if (dropdownMenu.offsetHeight === 0) {
        dropdownMenu.classList.remove("show");
      } else {
        dropdownMenu.style.height = "auto"
      } 
    }
});
});
