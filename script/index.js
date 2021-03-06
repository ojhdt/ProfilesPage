// import * as musicData from '../source/music.json' assert { type: "json" };
// import allData from '../source/data.json' assert { type: "json" };
// const {imageList, musicList} = {imageList:[],musicList:[]};
const body = document.querySelector('body')
const togglePlayBtns = document.getElementsByClassName('toggle-play')
const togglePauseBtns = document.getElementsByClassName('toggle-pause')
const songInfo = document.getElementById('song-info')
const songInfoAlbum = document.getElementById('song-info-album')
const songInfoName = document.getElementById('song-info-name')
const songInfoArtist = document.getElementById('song-info-artist')
let ap, timeoutID, imageList, musicList, isPopping = false, lastIndex = 0

window.onload = async function () {
  const response = await fetch("../source/data.json")
  const json = await response.json()
  imageList = json.imageList
  musicList = json.musicList

  BackgroundCheck.init({
    targets: '.mainText',
    images: '#backgroundImg'
  });

  let id = setInterval(() => {
    switchImg()
  }, 12000)
  ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    loop: 'none',
    audio: musicList
  });

  ap.on('play', () => {
    console.log('player played');
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
    console.log('player paused');
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
    console.log('player playing');
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
  ap.on('ended', () => {
    console.log('player ended');
    forwardMusic()
});
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

window.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowLeft') {
    backMusic()
  }
  if (e.key == 'ArrowRight') {
    forwardMusic()
  }
  if (e.key == ' ') {
    toggleMusic()
  }
})

// ????????????????????????
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {

    if (event.alpha == null) {    // PC?????????
      setMouseListener()
      return;
    }

    /* ??????beta???gamma??????????????????????????? */
    calcOffset(event.beta, event.gamma);

    /* ?????????????????? */
    // document.getElementById('alpha').innerHTML = 'x = ' + (event.alpha).toFixed(2); // ??????????????????????????????360/0
    // document.getElementById('beta').innerHTML = 'y = ' + event.beta.toFixed(2); // ??????????????????
    // document.getElementById('gamma').innerHTML = 'z = ' + (event.gamma).toFixed(2); // ??????????????????    
    // document.getElementById('deg').innerHTML = 'deg = ' + -( deg + 45 ).toFixed(2); // ??????x?????????
    // ???????????????????????????
    // spans = document.getElementsByTagName('span');
    // for (item of spans)
    //   item.setAttribute('class', 'show');

    // ????????????????????????
    // refreshScreen();
  }, false);
} else {
  setMouseListener()
}

function setMouseListener() {
  body.addEventListener('mousemove', (e) => {
    let percentWidth = e.clientX / window.outerWidth - 0.5
    let percentHeight = e.clientY / window.outerHeight - 0.5
    body.style.setProperty('--percentWidth', percentWidth)
    body.style.setProperty('--percentHeight', percentHeight)
    // console.log(percentWidth, percentHeight)
  })
}

function calcOffset(beta, gamma) {
  let offsetX = Math.sin((Math.abs(beta) < 90 ? gamma : -gamma) * Math.PI / 180);  // - 90 < beta < 90 ??????????????????
  let offsetY = Math.sin(beta * Math.PI / 180);

  // ??????????????????????????????????????????????????????????????????????????????
  // ?????????-45??????????????????????????????x????????????
  // css???rotate()????????????????????????????????????????????????
  // ?????????text-shadow?????????offsetY??????y???????????????
  // let deg = -Math.atan( -offsetY / offsetX ) * 180 / Math.PI + ( offsetX < 0 ? -180 : 0 ) - 45;
  // console.log(`${offsetX}.${offsetY},${deg}`)
  let percentWidth = offsetX
  let percentHeight = offsetY
  body.style.setProperty('--percentWidth', percentWidth)
  body.style.setProperty('--percentHeight', percentHeight)
}


async function switchImg() {
  if (imageList.length < 2) return;
  let index
  do {
    index = Math.floor((Math.random() * imageList.length));
    console.log(`Next random index is ${index}`)
  } while (index == lastIndex)
  lastIndex = index
  var src = imageList[index]
  // Get a reference to the image in whatever way suits.
  const img = document.getElementById("backgroundImg")
  img.crossOrigin = "Anonymous";
  // img.style.opacity = 0
  // img.onload = function(){
  //   img.style.opacity = 100
  // }
  // img.src = src

  // var tempImg = new Image()
  // tempImg.onload = function () {
  //   img.style.opacity = 0
  //   setTimeout(() => {
  //     img.src = tempImg.src
  //     img.style.opacity = 100
  //   }, 500)
  // }
  // tempImg.src = src

  img.style.opacity = 0
  await new Promise((resolve) => {setTimeout(() => {
    resolve()
  }, 500);})
  img.src = src
  await new Promise((resolve) => { img.onload = resolve; });
  img.style.opacity = 100
  BackgroundCheck.refresh()
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

function closeCard() {
  if (isPopping) {
    clearTimeout(timeoutID)
    songInfo.style.right = '-100%'
    setTimeout(() => {
      isPopping = false
    }, 500)
  }
}