function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");
	if(!myMenu.classList.contains("menu--visible")) {
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove('menu--visible');
	}
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");
var oppMenu = document.querySelector(".menu-icon");
var closeMenu = document.querySelector(".menu-close");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
closeMenu.addEventListener("click", toggleClassMenu, false);
