var tablinks = document.getElementsByClassName("tab-links"); 
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
     for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
     }
     event.currentTarget.classList.add("active-link");
     document.getElementById(tabname).classList.add("active-tab");
}

function sendEmail() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let email = "liisadavydov@gmail.com"
    let message = document.getElementById("message").value;
    window.open('mailto:'+email+'?subject='+subject+' - '+name+'&body='+message);
}

var menu_bar = document.getElementById("menuBar");
var folder_button = document.getElementById("folder");

function openMenu(){
    menu_bar.style.right = "0";
    folder_button.style.opacity = "0";
}
function closeMenu(){
    menu_bar.style.right = "-200px";
    folder_button.style.opacity = "1";
}
