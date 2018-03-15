
var mainServiceLink=document.body.querySelectorAll(".main-service-column-block-opacity-content__link");

for (var i = 0 ; i < mainServiceLink.length; i++) {
				mainServiceLink[i].onclick=function () {
				var link=this.parentElement.parentElement.parentElement.querySelector(".main-service-column-block-popup");
				link.classList.add("show");
				
			}			
	
}

var iconClose=document.body.querySelectorAll(".main-service-column-block-popup-content__icon");

for (var j = 0 ; j < iconClose.length; j++) {
				iconClose[j].onclick=function () {
				var popup=this.parentElement.parentElement.parentElement.querySelector(".main-service-column-block-popup");
				popup.classList.remove("show");
			}			
	
}