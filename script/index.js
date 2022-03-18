const imgList = ["source/1.jpg", "source/2.jpg"]
const body = document.querySelector('body')
const togglePlayBtns = document.getElementsByClassName('toggle-play')
const togglePauseBtns = document.getElementsByClassName('toggle-pause')
const songInfo = document.getElementById('song-info')
const songInfoAlbum = document.getElementById('song-info-album')
const songInfoName = document.getElementById('song-info-name')
const songInfoArtist = document.getElementById('song-info-artist')
let ap
let isPopping = false
let timeoutID

window.onload = function () {
  let id = setInterval(() => {
    switchImg()
  }, 15000)
  ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    lrcType: 3,
    audio: [{
        name: '8 Bit Adventure',
        artist: 'Adhesive Wombat',
        url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Adhesive%20Wombat%20-%208%20Bit%20Adventure.mp3',
        cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Adhesive%20Wombat%20-%208%20Bit%20Adventure.png'
      },
      {
        name: 'Something Good',
        artist: 'Alt-J',
        url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Alt-J%20-%20Something%20Good.mp3',
        cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Alt-J%20-%20Something%20Good.jpg'
      },
    ]
  });

  ap.on('play', () => {
    Array.prototype.forEach.call(togglePauseBtns, (element) => {
      element.style.visibility = "visible"
    })
    Array.prototype.forEach.call(togglePlayBtns, (element) => {
      element.style.visibility = "hidden"
    })
    // togglePauseBtns.forEach(element => element.style.display = 'show')
    // togglePlayBtns.forEach(element => element.style.display = '')
  })
  ap.on('pause', () => {
    Array.prototype.forEach.call(togglePauseBtns, (element) => {
      element.style.visibility = "hidden"
    })
    Array.prototype.forEach.call(togglePlayBtns, (element) => {
      element.style.visibility = "visible"
    })
    // togglePauseBtns.forEach(element => element.style.display = '')
    // togglePlayBtns.forEach(element => element.style.display = 'show')
  })
  ap.on('playing', () => {
    let index = ap.list.index
    let name = ap.options.audio[index].name
    let artist = ap.options.audio[index].artist
    let cover = ap.options.audio[index].cover
    popCard({
      name,
      artist,
      cover
    })
  })
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


body.addEventListener('mousemove', (e) => {
  let percentWidth = e.clientX / window.outerWidth - 0.5
  let percentHeight = e.clientY / window.outerHeight - 0.5
  body.style.setProperty('--percentWidth', percentWidth)
  body.style.setProperty('--percentHeight', percentHeight)
  // console.log(percentWidth, percentHeight)
})

const img = document.getElementById("backgroundImg")
var switchImg = function () {
  var index = Math.floor((Math.random() * imgList.length));
  img.style.opacity = 0
  setTimeout(() => {
    img.src = imgList[index]
    img.style.opacity = 100
  }, 500)
}

function navigateTo(e) {
  // console.log(e.getAttribute("data-target"))
  window.open(e.getAttribute("data-target"), "_blank")
}

function toggleMusic() {
  ap.toggle()
}

function backMusic() {
  ap.skipBack()
}

function forwardMusic() {
  ap.skipForward()
}

async function popCard(message) {
  if (isPopping) {
    clearTimeout(timeoutID)
    songInfo.style.right = '-100%'
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 500)
    })
  }
  isPopping = true
  songInfo.style.right = '20px'
  songInfoAlbum.src = message.cover
  songInfoName.innerHTML = message.name
  songInfoArtist.innerHTML = message.artist
  timeoutID = setTimeout(() => {
    songInfo.style.right = '-100%'
    setTimeout(() => {
      isPopping = false
    }, 500)
  }, 5000)
}

function closeCard(){
  if(isPopping){
    clearTimeout(timeoutID)
    songInfo.style.right = '-100%'
    setTimeout(()=>{
      isPopping = false
    },500)
  }
}