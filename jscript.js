let navIsOpen = false;

window.onload = () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}



function openContact() {

    document.getElementById("sidebarC").classList.toggle("sidebarOpen");
    document.getElementById("btnCont").classList.toggle("openbtnInv");
}


function openNav() {
    document.getElementById("btnnav").classList.toggle("change");
    document.getElementById("navbarS").classList.toggle("navbar");
    navIsOpen = !navIsOpen
}



window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 850) {
        document.getElementById("btnnav").style.transition = "all 0.4s";
        document.getElementById("btnnav").style.opacity = "1";

    } else {
        if (navIsOpen) return
        document.getElementById("btnnav").style.opacity = "0";
    }

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 200) {
        document.getElementById("btnCont").style.transition = "all 0.4s";
        document.getElementById("btnCont").style.opacity = "1";
    }
    else {
        document.getElementById("btnCont").style.opacity = "0";
    }
}

