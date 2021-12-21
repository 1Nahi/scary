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
    title: '<img src="https://img.icons8.com/dusk/64/000000/ghost--v1.png"/>',
    width: 600,
    padding: '3em',
    color: '#4F4165',
    background: '#716add',
    confirmButtonText: '👀',
    confirmButtonColor: '#4F4165',
    backdrop: `
        rgba(0,0,0,0.8)
        url("https://i.gifer.com/5N2g.gif")
        top
        no-repeat
      `
  })
}
const showMsg2 = () => {
  Swal.fire({
    title: '<img src="https://img.icons8.com/dusk/64/000000/ghost--v1.png"/>',
    width: 600,
    padding: '3em',
    color: '#4F4165',
    background: '#716add',
    confirmButtonText: '👀',
    confirmButtonColor: '#4F4165',
    backdrop: `
        rgba(0,0,0,0.8)
        url("https://i.gifer.com/3Ua7.gif")
        top
        no-repeat
      `
  })
}
const showMsg3 = () => {
  Swal.fire({
    title: '<img src="https://img.icons8.com/dusk/64/000000/ghost--v1.png"/>',
    width: 600,
    padding: '3em',
    color: '#4F4165',
    background: '#716add',
    confirmButtonText: '👀',
    confirmButtonColor: '#4F4165',
    backdrop: `
        rgba(0,0,0,0.8)
        url("https://i.pinimg.com/originals/a6/ce/bf/a6cebfa2db13098c4bf7a636ee696a48.gif")
        top
        no-repeat
      `
  })
}
const showMsg4 = () => {
  Swal.fire({
    title: '<img src="https://img.icons8.com/dusk/64/000000/ghost--v1.png"/>',
    width: 600,
    padding: '3em',
    color: '#4F4165',
    background: '#716add',
    confirmButtonText: '👀',
    confirmButtonColor: '#4F4165',
    backdrop: `
        rgba(0,0,0,0.8)
        url("https://c.tenor.com/LnUFxubwuegAAAAC/ghostface-killah.gif")
        top
        no-repeat
      `
  })
}
const fear = () => {
  Swal.fire({
    imageUrl: 'https://c.tenor.com/y6LbgjsjsHYAAAAC/scary-ghost.gif',
    imageAlt: 'Custom image',
    background:'black',
    confirmButtonText:'👀'
  })
}