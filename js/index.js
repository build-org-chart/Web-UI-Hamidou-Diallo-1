// const menu = document.querySelector(".main-container");
// menu.addEventListener("scroll",function(event){
//     event.target.style.backgroundColor = "#553D67";
// })

window.addEventListener("scroll", function(ev){
     document.querySelector(".low-content-2").style.backgroundColor = "#379683";

});


// stick nav bar
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("nav");
console.log(navbar);


// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// class Menu{
//     constructor(element){
//         this.element = element;
//         this.bars = this.element.queryselector(".bar1 .bar3");
//         console.log(this.bars);
//         this.newMenu = this.element.queryselector(".nav-end");
//         console.log(newMenu);
//         this.bars.addEventListener("click", () => this.toggle());
//     }
    
//     toggle(){
//         console.log("hello");
//         this.newMenu.classList.add(".toggle-off");
//     }
// }

const navSlide = () =>{
    const bars = document.querySelector(".drop-down-bar");
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2")
    const bar3 = document.querySelector(".bar3");
    const navEnd = document.querySelector(".nav-end");

    bars.addEventListener("click", ev =>{
        console.log("Hello");
        bar1.classList.toggle("change-1");
        bar2.classList.toggle("toggle-off");
        bar3.classList.toggle("change-2");
        navEnd.classList.toggle("toggle-off");
        navEnd.classList.toggle("toggle-on");
    });
};

navSlide();



// const menus = document.querySelector(".drop-down-bar");
// console.log(menus);

// menus.forEach(function(items){
//     return new Menu(items);
// });

// drop-down menu

// constructor function
// class Dropper{
//     constructor(element){
//         this.element = element;
//         this.bars = this.element.querySelector(".bar1");
//         // console.log("hello");
//         this.links = this.element.querySelector(".link");
//         // console.log("bye");
//         this.bars.addEventListener("click", () => this.toggle());
//     }

//     toggle(){
//         this.bars.classList.toggle(".toggle-on");
//         console.log('Hello Tom');
//     }
// }

// query selector
// const newNav = document.querySelectorAll(".bar1 .bar2 .bar3");
// console.log(newNav);
// newNav.classList.add("mobile-menu");




// const newNav1 = Array.from(newNav);
// console.log(newNav1);
// newNav1.forEach(item => {
//     item.addEventListener("click", ev => {
//        ev.classList.toggle("change-1");
//     });
// });
// newNav.addEventListener("click", ev => {
//     console.log("hello");
//     // document.querySelectorAll(".bar1").add("change-1");
// });
// console.log(newNav);



// newNav.forEach(function(items){
//     return new Dropper(items);
// });







// TODO: Begin tabs and additional events for the landing page.Begin

