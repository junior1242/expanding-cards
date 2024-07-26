// function click() {
//     const para = document.getElementsByTagName(p);
//     para.
// }


// click();



// function largefont() {
//     const el = (document.querySelector(".Explore_The_World"));
//         el.addEventListener('click', () => {
//             el.style.width = '50vw';
//             el.innerHTML = "Explore The World";
//         })
// }
// largefont();
// function largeFonts() {

//     const el = document.querySelector(".Mountains");
//     el.addEventListener('click', () => {
//         el.style.width = '60vw';
//         el.style.transition = '0.7s ease-in-out';
//     })
// }
// largeFonts();

// function myId() {
//   addEventListener('click', () => {
//     console.log('you clicked');
//  })
// }
    


const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}