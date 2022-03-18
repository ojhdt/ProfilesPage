const imgList = ["source/1.jpg","source/2.jpg"]

window.onload = function(){
  let id = setInterval(()=>{
    switchImg()
  },15000)
}


document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

const body = document.querySelector('body')
body.addEventListener('mousemove', (e) => {
  let percentWidth = e.clientX / window.outerWidth - 0.5
  let percentHeight = e.clientY / window.outerHeight - 0.5
  body.style.setProperty('--percentWidth', percentWidth)
  body.style.setProperty('--percentHeight', percentHeight)
  // console.log(percentWidth, percentHeight)
})

const img = document.getElementById("backgroundImg")
var switchImg = function(){
  var index = Math.floor((Math.random()*imgList.length));
  img.style.opacity = 0
  setTimeout(()=>{
    img.src = imgList[index]
    img.style.opacity = 100
  }, 500)
}

function navigateTo(e) {
  // console.log(e.getAttribute("data-target"))
  window.open(e.getAttribute("data-target"), "_blank")
}