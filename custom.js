 // JS Tabs
let tabss = document.querySelector(".tabss");
let tabHeader = tabss.querySelector(".tab-header");
let tabBody = tabss.querySelector(".tab-body");

let tabHeaderNodes = tabss.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabss.querySelectorAll(".tab-body > div");

for(let i=0;i<tabHeaderNodes.length;i++){
  tabHeaderNodes[i].addEventListener("click",function(){
    tabHeader.querySelector(".activeee").classList.remove("activeee");
    tabHeaderNodes[i].classList.add("activeee");
    tabBody.querySelector(".activeee").classList.remove("activeee");
    tabBodyNodes[i].classList.add("activeee");
    tabIndicator.style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
  });
}

// JS Menu Button
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

// JS Humberger
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.add("open");
});

close.addEventListener("click", () => {
  navList.classList.remove("open");
});

// Colors
const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
  control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#FF670D");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const currentColor = color.dataset.id;
    document
      .querySelector(":root")
      .style.setProperty("--customColor", currentColor);
  });
});

window.addEventListener("scroll", () => {
  control.classList.remove("open");
});

 // JS Copy
 function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alerttt").style.display = "block";
    setTimeout(function(){
        document.getElementById("alerttt").style.display = "none";
    }, 1000);
}

 // JS Chat Whatsapp
 $(document).on("click", "#send-it", function () {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
        var b = $("#get-number").text(),
            c = document.getElementById("chat-input").value,
            d = "https://api.whatsapp.com/send",
            e = b,
            f = "&text=" + c;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";
        var g = d + "?phone=" + e + f;
        window.open(g, "_blank");
    }
}),
    $(document).on("click", ".informasi", function () {
        (document.getElementById("get-number").innerHTML = $(this).children(".my-number").text()),
            $(".start-chat,.get-new").addClass("show").removeClass("hide"),
            $(".home-chat,.head-home").addClass("hide").removeClass("show"),
            (document.getElementById("get-nama").innerHTML = $(this).children(".info-chat").children(".chat-nama").text()),
            (document.getElementById("get-label").innerHTML = $(this).children(".info-chat").children(".chat-label").text());
    }),
    $(document).on("click", ".close-chat", function () {
        $("#whatsapp-chat").addClass("hide").removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function () {
        $("#whatsapp-chat").addClass("show").removeClass("hide");
    });
	
// Nav Link	
 $(".nav__link").on("click", function () {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
   $(this).parents(".nav__list").find("a").removeClass("active-link");
    $(this).addClass("active-link");
    $("#achsinhome, #achsinaktivitas, #achsinaccount").hide();
    var b = $(this.hash);
    if (b.length) {
      var a = $(this).attr("href");
      $(a).fadeIn();
      return false;
    }
  }
});
$(".nav__list").each(function () {
  $(this).find("a:first").addClass("active-link");
  $(this).find("a:first").trigger("click");
});      
