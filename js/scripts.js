/*!
* Start Bootstrap - Scrolling Nav v5.0.4 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var panel  = document.getElementById("main-panel")
var loadpanel = document.getElementById("load-panel")
// setTimeout(fade(loadpanel),10000)
setTimeout(unfade(panel), 2000)

function fade(element) {
    var op = 1; 
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;
    var timer = setInterval(function() {
        if (op>=1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}


function updateText(text, flav){

    let delay = 200;
    
        let element = document.getElementById(flav);
    
          element.innerHTML = text
            .split("")
            .map(letter => {
              console.log(letter);
              return `<span>` + letter + `</span>`;
            })
            .join("");
    
          Array.from(element.children).forEach((span, index) => {
            setTimeout(() => {
              span.classList.add("wavy");
            }, index * 60 + delay);
          });
    
    }
    
updateText("Gameplay Programmer", "flavor");
updateText("yours truly.", "yourstruly");

function close_window(){
    window.close();
}

