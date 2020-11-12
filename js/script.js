let toggle = document.querySelector(".toggle input");
let menu = document.querySelector(".menu");

toggle.addEventListener("click", function() {
    menu.classList.toggle("slide");
    if(document.querySelector(".menu.slide")) {
        document.querySelector(".menu").style.top = "69px";
        if(window.scrollY == 0) {
            document.querySelector(".image img").style.marginTop = "150px";
            document.querySelector(".logo").style.backgroundColor = "transparent";
            document.querySelector(".logo").style.boxShadow = "none";
        } else {
            document.querySelector(".image img").style.marginTop = "80px";
            document.querySelector(".logo").style.boxShadow = "none";
            document.querySelector(".logo").style.backgroundColor = "white";
        }
    } else {
        document.querySelector(".menu").style.top = "0";
        document.querySelector(".image img").style.marginTop = "80px";
        if(window.scrollY == 0) {
            document.querySelector(".logo").style.backgroundColor = "transparent";
            document.querySelector(".logo").style.boxShadow = "none";
        } else {
            document.querySelector(".logo").style.backgroundColor = "#79CFFF";
            document.querySelector(".logo").style.boxShadow = "1px 5px 10px 0px rgba(0,0,0,.1)";
        }
    }
});

function myFunction(x) {
    if (x.matches) {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".menu").style.top = "69px";
            if(window.scrollY == 0) {
                document.querySelector(".logo").style.backgroundColor = "transparent";
                document.querySelector(".logo").style.boxShadow = "none";
                document.querySelector(".logo").style.top = "0";
                document.querySelector(".toggle").style.top = "0";
                document.querySelector(".menu").style.backgroundColor = "transparent";
                document.querySelector(".menu").style.boxShadow = "none";
            } else {
                if(document.querySelector(".menu.slide")) {
                    document.querySelector(".image img").style.marginTop = "150px";
                    document.querySelector(".logo").style.backgroundColor = "white";
                    document.querySelector(".logo").style.boxShadow = "none";
                    document.querySelector(".logo").style.top = "0";
                    document.querySelector(".toggle").style.top = "0";
                    document.querySelector(".menu").style.backgroundColor = "white";
                    document.querySelector(".menu").style.boxShadow = "1px 10px 10px 0px rgba(0,0,0,.1)";
                } else {
                    document.querySelector(".image img").style.marginTop = "80px";
                    document.querySelector(".logo").style.backgroundColor = "#79CFFF";
                    document.querySelector(".logo").style.boxShadow = "1px 5px 10px 0px rgba(0,0,0,.1)";
                    document.querySelector(".logo").style.top = "0";
                    document.querySelector(".toggle").style.top = "0";
                    document.querySelector(".menu").style.backgroundColor = "white";
                    document.querySelector(".menu").style.boxShadow = "1px 10px 10px 0px rgba(0,0,0,.1)";
                }
            }
        } else {
            document.querySelector(".menu").style.top = "-67px";
            document.querySelector(".logo").style.top = "-70px";
            document.querySelector(".toggle").style.top = "-70px";
        }
            prevScrollpos = currentScrollPos;
        }
    } else {
        document.querySelector(".logo").style.backgroundColor = "transparent";
        document.querySelector(".logo").style.boxShadow = "none";
        document.querySelector(".menu").style.backgroundColor = "transparent";
        document.querySelector(".menu").style.boxShadow = "none";
        document.querySelector(".menu").style.top = "0";
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            if(window.scrollY == 0) {
                document.querySelector(".logo").style.top = "0";
                document.querySelector(".toggle").style.top = "0";
                document.querySelector(".menu").style.top = "0";
            } else {
                document.querySelector(".menu").style.top = "0";
                document.querySelector(".logo").style.top = "0";
                document.querySelector(".toggle").style.top = "0";
                document.querySelector(".menu").style.top = "0";
            }
        } else {
            document.querySelector(".logo").style.top = "0";
            document.querySelector(".toggle").style.top = "0";
        }
        prevScrollpos = currentScrollPos;
        }
    }
}

let x = window.matchMedia("(max-width: 576px)");
myFunction(x);
x.addListener(myFunction);