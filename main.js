const navsliding = document.querySelector(".sliding-navbar");
const navBtn = document.querySelector(".navicon");
const navSelect = document.querySelectorAll(".nav-text");
isOpen = false;
navBtn.addEventListener("click", function() {
  if (isOpen == false) {
    isOpen = true;
    navsliding.classList.add("open");
  }
  else {
    isOpen = false;
    navsliding.classList.remove("open");
  }
});

const showMsg = () => {
  Swal.fire({
    imageUrl:'https://i.gifer.com/5N2g.gif',
    width: 600,
    padding: '3em',
    color: '#4F4165',
    background: 'black',
    confirmButtonText: '👀',
    backdrop: `
        rgba(0,0,0,0.8)
      `
  })
}
const showMsg2 = () => {
  Swal.fire({
    imageUrl:'https://i.gifer.com/3Ua7.gif',
    width: 600,
    padding: '3em',
    color: '#4F4165',
    background: 'black',
    confirmButtonText: '👀',
    backdrop: `
        rgba(0,0,0,0.8)
      `
  })
}
const showMsg3 = () => {
  Swal.fire({
    imageUrl:'https://i.pinimg.com/originals/a6/ce/bf/a6cebfa2db13098c4bf7a636ee696a48.gif',
    width: 600,
    padding: '3em',
    color: '#4F4165',
    background: 'black',
    confirmButtonText: '👀',
    backdrop: `
        rgba(0,0,0,0.8)
      `
  })
}
const showMsg4 = () => {
  Swal.fire({
    imageUrl:'https://c.tenor.com/LnUFxubwuegAAAAC/ghostface-killah.gif',
    width: 600,
    padding: '3em',
    color: '#4F4165',
    background: 'black',
    confirmButtonText: '👀',
    backdrop: `
        rgba(0,0,0,0.8)
      `
  })
}
const fear = () => {
  Swal.fire({
    imageUrl: 'https://c.tenor.com/y6LbgjsjsHYAAAAC/scary-ghost.gif',
    imageAlt: 'Custom image',
    background:'black',
    confirmButtonText:'👀',
    backdrop:'rgba(0,0,0,0.8)'
  })
}
const themify = () => {
  var theme = document.body;
  theme.classList.toggle("theme");
}