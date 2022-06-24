const imgList = [
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/1.jpg",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/2.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/3.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/4.jpg",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/5.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/7.jpg",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/8.jpg",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/9.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/10.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/12.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/13.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/14.jpg",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/16.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/20.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/21.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/22.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/23.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/26.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/28.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/29.png",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/30.jpg",
  "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/random/31.jpg",
]
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
  }, 12000)
  ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
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
    {
      name: 'Altoagain',
      artist: 'Alto`s Adventure',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Alto%27s%20Adventure%20-%20Altoagain.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Alto%27s%20Adventure%20-%20Altoagain.jpg'
    },
    {
      name: 'INSIDE IDENTITY',
      artist: 'Black Raison d`être',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Black%20Raison%20d%27%C3%AAtre%20-%20INSIDE%20IDENTITY.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Black%20Raison%20d%27%C3%AAtre%20-%20INSIDE%20IDENTITY.jpg'
    },
    {
      name: 'irony',
      artist: 'ClariS',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ClariS%20-%20irony.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ClariS%20-%20irony.jpg'
    },
    {
      name: 'reunion',
      artist: 'ClariS',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ClariS%20-%20reunion.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ClariS%20-%20reunion.jpg'
    },
    {
      name: 'ヒトリゴト',
      artist: 'ClariS',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ClariS%20-%20%E3%83%92%E3%83%88%E3%83%AA%E3%82%B4%E3%83%88.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ClariS%20-%20%E3%83%92%E3%83%88%E3%83%AA%E3%82%B4%E3%83%88.jpg'
    },
    {
      name: 'if...',
      artist: 'DAISHI DANCE',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DAISHI%20DANCE%20-%20if....mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DAISHI%20DANCE%20-%20if....png'
    },
    {
      name: 'That`s The Way It Is',
      artist: 'Daniel Lanois',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Daniel%20Lanois%20-%20That%27s%20The%20Way%20It%20Is.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Daniel%20Lanois%20-%20That%27s%20The%20Way%20It%20Is.png'
    },
    {
      name: 'Delicious',
      artist: 'Daniel Powter',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Daniel%20Powter%20-%20Delicious.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Daniel%20Powter%20-%20Delicious.jpg'
    },
    {
      name: 'Convergence',
      artist: 'DDRKirby(ISQ)',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DDRKirby%28ISQ%29%20-%20Convergence.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DDRKirby%28ISQ%29%20-%20Convergence.jpg'
    },
    {
      name: 'Good Night',
      artist: 'Delos',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Delos%20-%20Good%C2%A0Night.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Delos%20-%20Good%C2%A0Night.png'
    },
    {
      name: 'Flower Dance',
      artist: 'DJ OKAWARI',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%20OKAWARI%20-%20Flower%20Dance.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%20OKAWARI%20-%20Flower%20Dance.png'
    },
    {
      name: 'Lightning Moment feat.fox capture plan',
      artist: 'DJ Okawari',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%20Okawari%20-%20Lightning%20Moment%20feat.fox%20capture%20plan.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%20Okawari%20-%20Lightning%20Moment%20feat.fox%20capture%20plan.jpg'
    },
    {
      name: 'Luv Letter',
      artist: 'DJ Okawari',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%20OKAWARI%20-%20Luv%20Letter.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%20OKAWARI%20-%20Luv%20Letter.png'
    },
    {
      name: '飘韵piaoyun',
      artist: 'DJ Okawari',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%20Okawari%20-%20%E9%A3%98%E9%9F%B5piaoyun.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%20Okawari%20-%20%E9%A3%98%E9%9F%B5piaoyun.jpg'
    },
    {
      name: 'エプロンボーイ',
      artist: 'DJみそしるとMCごはん',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%E3%81%BF%E3%81%9D%E3%81%97%E3%82%8B%E3%81%A8MC%E3%81%94%E3%81%AF%E3%82%93%20-%20%E3%82%A8%E3%83%97%E3%83%AD%E3%83%B3%E3%83%9C%E3%83%BC%E3%82%A4.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/DJ%E3%81%BF%E3%81%9D%E3%81%97%E3%82%8B%E3%81%A8MC%E3%81%94%E3%81%AF%E3%82%93%20-%20%E3%82%A8%E3%83%97%E3%83%AD%E3%83%B3%E3%83%9C%E3%83%BC%E3%82%A4.png'
    },
    {
      name: 'Hotel California',
      artist: 'Eagles',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Eagles%20-%20Hotel%20California.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Eagles%20-%20Hotel%20California.jpg'
    },
    {
      name: 'BlancAile',
      artist: 'Elements Garden',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Elements%20Garden%20-%20BlancAile.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Elements%20Garden%20-%20BlancAile.png'
    },
    {
      name: 'Dear My Friend -まだ見ぬ未来へ-',
      artist: 'ELISA',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ELISA%20-%20Dear%20My%20Friend%20-%E3%81%BE%E3%81%A0%E8%A6%8B%E3%81%AC%E6%9C%AA%E6%9D%A5%E3%81%B8-.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ELISA%20-%20Dear%20My%20Friend%20-%E3%81%BE%E3%81%A0%E8%A6%8B%E3%81%AC%E6%9C%AA%E6%9D%A5%E3%81%B8-.jpg'
    },
    {
      name: 'Real Force',
      artist: 'ELISA',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ELISA%20-%20Real%20Force.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ELISA%20-%20Real%20Force.png'
    },
    {
      name: 'Life',
      artist: 'EnzoCavallone',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/EnzoCavallone%20-%20Life.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/EnzoCavallone%20-%20Life.jpg'
    },
    {
      name: '比翼の羽根',
      artist: 'eufonius',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/eufonius%20-%20%E6%AF%94%E7%BF%BC%E3%81%AE%E7%BE%BD%E6%A0%B9.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/eufonius%20-%20%E6%AF%94%E7%BF%BC%E3%81%AE%E7%BE%BD%E6%A0%B9.png'
    },
    {
      name: 'Bloomin` LIghts',
      artist: 'a_hisa',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/a_hisa%20-%20Bloomin%27%20LIghts.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/a_hisa%20-%20Bloomin%27%20LIghts.jpg'
    },
    {
      name: 'The Set Up',
      artist: 'Favored Nations',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Favored%20Nations%20-%20The%20Set%20Up.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Favored%20Nations%20-%20The%20Set%20Up.png'
    },
    {
      name: '双葉',
      artist: 'fox capture plan',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fox%20capture%20plan%20-%20%E5%8F%8C%E8%91%89.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fox%20capture%20plan%20-%20%E5%8F%8C%E8%91%89.jpg'
    },
    {
      name: 'future gazer',
      artist: 'fripSide',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fripSide%20-%20future%20gazer.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fripSide%20-%20future%20gazer.png'
    },
    {
      name: 'LEVEL5 -judgelight-',
      artist: 'fripSide',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fripSide%20-%20LEVEL5%20-judgelight-.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fripSide%20-%20LEVEL5%20-judgelight-.png'
    },
    {
      name: 'only my railgun',
      artist: 'fripSide',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fripSide%20-%20only%20my%20railgun.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fripSide%20-%20only%20my%20railgun.jpg'
    },
    {
      name: 'sister`s noise',
      artist: 'fripSide',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fripSide%20-%20sister%27s%20noise.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/fripSide%20-%20sister%27s%20noise.png'
    },
    {
      name: '青い栞',
      artist: 'Galileo Galilei',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Galileo%20Galilei%20-%20%E9%9D%92%E3%81%84%E6%A0%9E.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Galileo%20Galilei%20-%20%E9%9D%92%E3%81%84%E6%A0%9E.jpg'
    },
    {
      name: 'Cloud 9',
      artist: 'GEMINI',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/GEMINI%20-%20Cloud%209.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/GEMINI%20-%20Cloud%209.jpg'
    },
    {
      name: 'Breathe.',
      artist: 'Jacoo',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Jacoo%20-%20Breathe..mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Jacoo%20-%20Breathe..jpg'
    },
    {
      name: 'Crossing Winds (Original)',
      artist: 'Jacoo',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Jacoo%20-%20Crossing%20Winds%20%28Original%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Jacoo%20-%20Crossing%20Winds%20%28Original%29.jpg'
    },
    {
      name: 'City of Dreams (Original Mix)',
      artist: 'jav3x',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/jav3x%20-%20City%20of%20Dreams%20%28Original%20Mix%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/jav3x%20-%20City%20of%20Dreams%20%28Original%20Mix%29.jpg'
    },
    {
      name: 'Still Alive',
      artist: 'Jonathan Coulton/GLaDOS',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Jonathan%20Coulton%20GLaDOS%20-%20Still%20Alive.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Jonathan%20Coulton%20GLaDOS%20-%20Still%20Alive.png'
    },
    {
      name: 'For River - Piano (Sarah & Tommy`s Version)',
      artist: 'Kan R. Gao',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kan%20R.%20Gao%20-%20For%20River%20-%20Piano%20%28Sarah%20%26%20Tommy%27s%20Version%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kan%20R.%20Gao%20-%20For%20River%20-%20Piano%20%28Sarah%20%26%20Tommy%27s%20Version%29.png'
    },
    {
      name: 'Having Lived (Finding Paradise Vers.)',
      artist: 'Kan R. Gao',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kan%20R.%20Gao%20-%20Having%20Lived%20%28Finding%20Paradise%20Vers.%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kan%20R.%20Gao%20-%20Having%20Lived%20%28Finding%20Paradise%20Vers.%29.jpg'
    },
    {
      name: 'Where Are You (Duet Vers.)',
      artist: 'Kan R. Gao',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kan%20R.%20Gao%20-%20Where%20Are%20You%20%28Duet%20Vers.%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kan%20R.%20Gao%20-%20Where%20Are%20You%20%28Duet%20Vers.%29.jpg'
    },
    {
      name: 'Going Home',
      artist: 'Kenny G',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kenny%20G%20-%20Going%20Home.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kenny%20G%20-%20Going%20Home.png'
    },
    {
      name: 'Aware',
      artist: 'Kontinuum',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kontinuum%20-%20Aware.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kontinuum%20-%20Aware.png'
    },
    {
      name: 'A Spring Without You (Instrumental Mix)',
      artist: 'Kozoro',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kozoro%20-%20A%20Spring%20Without%20You%20%28Instrumental%20Mix%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kozoro%20-%20A%20Spring%20Without%20You%20%28Instrumental%20Mix%29.jpg'
    },
    {
      name: 'THE MILLION-YEAR PICNIC',
      artist: 'lasah',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/lasah%20-%20THE%20MILLION-YEAR%20PICNIC.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/lasah%20-%20THE%20MILLION-YEAR%20PICNIC.png'
    },
    {
      name: 'Supernova',
      artist: 'Laszlo',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Laszlo%20-%20Supernova.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Laszlo%20-%20Supernova.jpg'
    },
    {
      name: 'Bravely You',
      artist: 'Lia',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Lia%20-%20Bravely%20You.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Lia%20-%20Bravely%20You.jpg'
    },
    {
      name: 'TORCH',
      artist: 'Lia',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Lia%20-%20TORCH.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Lia%20-%20TORCH.png'
    },
    {
      name: '鳥の詩',
      artist: 'Lia',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Lia%20-%20%E9%B3%A5%E3%81%AE%E8%A9%A9.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Lia%20-%20%E9%B3%A5%E3%81%AE%E8%A9%A9.jpg'
    },
    {
      name: '時を刻む唄',
      artist: 'Lia',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Lia%20-%20%E6%99%82%E3%82%92%E5%88%BB%E3%82%80%E5%94%84.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Lia%20-%20%E6%99%82%E3%82%92%E5%88%BB%E3%82%80%E5%94%84.png'
    },
    {
      name: 'Rage Your Dream',
      artist: 'm.o.v.e',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/m.o.v.e%20-%20Rage%20Your%20Dream.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/m.o.v.e%20-%20Rage%20Your%20Dream.jpg'
    },
    {
      name: 'Soviet Connection — The Theme from Grand Theft Auto IV',
      artist: 'Michael Hunter',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Michael%20Hunter%20-%20Soviet%20Connection%20%E2%80%94%20The%20Theme%20from%20Grand%20Theft%20Auto%20IV.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Michael%20Hunter%20-%20Soviet%20Connection%20%E2%80%94%20The%20Theme%20from%20Grand%20Theft%20Auto%20IV.jpg'
    },
    {
      name: 'STYX HELIX',
      artist: 'MYTH & ROID',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/MYTH%20%26%20ROID%20-%20STYX%20HELIX.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/MYTH%20%26%20ROID%20-%20STYX%20HELIX.jpg'
    },
    {
      name: 'Komorebi',
      artist: 'm-taku',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/m-taku%20-%20Komorebi.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/m-taku%20-%20Komorebi.jpg'
    },
    {
      name: 'DEAR~',
      artist: 'NANASE',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/NANASE%20-%20DEAR~.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/NANASE%20-%20DEAR~.jpg'
    },
    {
      name: 'Glass Heart',
      artist: 'Nu.ID',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Nu.ID%20-%20Glass%20Heart.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Nu.ID%20-%20Glass%20Heart.png'
    },
    {
      name: 'Cristalisia',
      artist: 'onoken',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/onoken%20-%20Cristalisia.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/onoken%20-%20Cristalisia.png'
    },
    {
      name: 'DAYBREAK FRONTLINE',
      artist: 'Orangestar',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Orangestar%20-%20DAYBREAK%20FRONTLINE.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Orangestar%20-%20DAYBREAK%20FRONTLINE.jpg'
    },
    {
      name: '八十八鍵の宇宙',
      artist: 'Orangestar',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Orangestar%20-%20%E5%85%AB%E5%8D%81%E5%85%AB%E9%8D%B5%E3%81%AE%E5%AE%87%E5%AE%99.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Orangestar%20-%20%E5%85%AB%E5%8D%81%E5%85%AB%E9%8D%B5%E3%81%AE%E5%AE%87%E5%AE%99.jpg'
    },
    {
      name: 'Sunflower',
      artist: 'Orangestar feat.夏背',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Orangestar%20feat.%E5%A4%8F%E8%83%8C%20-%20Sunflower.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Orangestar%20feat.%E5%A4%8F%E8%83%8C%20-%20Sunflower.png'
    },
    {
      name: 'Alice in 冷凍庫',
      artist: 'Orangestar/IA',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Orangestar%20IA%20-%20Alice%20in%20%E5%86%B7%E5%87%8D%E5%BA%AB.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Orangestar%20IA%20-%20Alice%20in%20%E5%86%B7%E5%87%8D%E5%BA%AB.jpg'
    },
    {
      name: 'Mallow Flower',
      artist: 'Otokaze',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Otokaze%20-%20Mallow%20Flower.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Otokaze%20-%20Mallow%20Flower.png'
    },
    {
      name: 'Cosmic Magnolia (Solar Sister)',
      artist: 'Paradox Interactive',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Paradox%20Interactive%20-%20Cosmic%20Magnolia%20%28Solar%20Sister%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Paradox%20Interactive%20-%20Cosmic%20Magnolia%20%28Solar%20Sister%29.jpg'
    },
    {
      name: 'Incontro (Cantaloopia)',
      artist: 'Paradox Interactive',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Paradox%20Interactive%20-%20Incontro%20%28Cantaloopia%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Paradox%20Interactive%20-%20Incontro%20%28Cantaloopia%29.jpg'
    },
    {
      name: 'Entertainer, The',
      artist: 'Paralyzed Veterans of America',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Paralyzed%20Veterans%20of%20America%20-%20Entertainer%2C%20The.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Paralyzed%20Veterans%20of%20America%20-%20Entertainer%2C%20The.jpg'
    },
    {
      name: 'are you lost',
      artist: 'park bird',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/park%20bird%20-%20are%20you%20lost.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/park%20bird%20-%20are%20you%20lost.jpg'
    },
    {
      name: 'April showers',
      artist: 'ProleteR',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ProleteR%20-%20April%20showers.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ProleteR%20-%20April%20showers.jpg'
    },
    {
      name: 'はじめての、東京',
      artist: 'RADWIMPS',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20-%20%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E3%80%81%E6%9D%B1%E4%BA%AC.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20-%20%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E3%80%81%E6%9D%B1%E4%BA%AC.jpg'
    },
    {
      name: '気象神社',
      artist: 'RADWIMPS',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20-%20%E6%B0%97%E8%B1%A1%E7%A5%9E%E7%A4%BE.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20-%20%E6%B0%97%E8%B1%A1%E7%A5%9E%E7%A4%BE.jpg'
    },
    {
      name: 'グランドエスケープ feat.三浦透子',
      artist: 'RADWIMPS/三浦透子',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20%E4%B8%89%E6%B5%A6%E9%80%8F%E5%AD%90%20-%20%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%A8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%20feat.%E4%B8%89%E6%B5%A6%E9%80%8F%E5%AD%90.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20%E4%B8%89%E6%B5%A6%E9%80%8F%E5%AD%90%20-%20%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%A8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%20feat.%E4%B8%89%E6%B5%A6%E9%80%8F%E5%AD%90.jpg'
    },
    {
      name: 'lull ～そして僕らは～',
      artist: 'Ray',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Ray%20-%20lull%20%EF%BD%9E%E3%81%9D%E3%81%97%E3%81%A6%E5%83%95%E3%82%89%E3%81%AF%EF%BD%9E.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Ray%20-%20lull%20%EF%BD%9E%E3%81%9D%E3%81%97%E3%81%A6%E5%83%95%E3%82%89%E3%81%AF%EF%BD%9E.jpg'
    },
    {
      name: 'Reflection of Happiness (Original Mix)',
      artist: 'Rhodz/colate/初音ミク',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Rhodz%20colate%20%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF%20-%20Reflection%20of%20Happiness%20%28Original%20Mix%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Rhodz%20colate%20%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF%20-%20Reflection%20of%20Happiness%20%28Original%20Mix%29.jpg'
    },
    {
      name: 'Parole',
      artist: 'sajou no hana',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/sajou%20no%20hana%20-%20Parole.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/sajou%20no%20hana%20-%20Parole.png'
    },
    {
      name: 'secret base ～君がくれたもの～ (10 years after Ver.)',
      artist: '本間芽衣子（茅野愛衣）/安城鳴子（戸松遥）/鶴見知利子(早見沙織)',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E8%8C%85%E9%87%8E%E6%84%9B%E8%A1%A3%20%E6%88%B8%E6%9D%BE%E9%81%A5%20%E6%97%A9%E8%A6%8B%E6%B2%99%E7%B9%94%20-%20secret%20base%20~%E5%90%9B%E3%81%8C%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%82%E3%81%AE~%20%2810%20years%20after%20Ver.%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/secret%20base%20%EF%BD%9E%E5%90%9B%E3%81%8C%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%82%E3%81%AE%EF%BD%9E.jpg'
    },
    {
      name: 'Tomorrow With You',
      artist: 'Senpai/Kondor',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Senpai%20Kondor%20-%20Tomorrow%20With%20You.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Senpai%20Kondor%20-%20Tomorrow%20With%20You.jpg'
    },
    {
      name: 'タイニーリトル・アジアンタム',
      artist: 'ShibayanRecords',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ShibayanRecords%20-%20%E3%82%BF%E3%82%A4%E3%83%8B%E3%83%BC%E3%83%AA%E3%83%88%E3%83%AB%E3%83%BB%E3%82%A2%E3%82%B8%E3%82%A2%E3%83%B3%E3%82%BF%E3%83%A0.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/ShibayanRecords%20-%20%E3%82%BF%E3%82%A4%E3%83%8B%E3%83%BC%E3%83%AA%E3%83%88%E3%83%AB%E3%83%BB%E3%82%A2%E3%82%B8%E3%82%A2%E3%83%B3%E3%82%BF%E3%83%A0.jpg'
    },
    {
      name: 'Death With Dignity',
      artist: 'Sufjan Stevens',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Sufjan%20Stevens%20-%20Death%20With%20Dignity.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Sufjan%20Stevens%20-%20Death%20With%20Dignity.jpg'
    },
    {
      name: 'Menu Theme',
      artist: 'Syd Matters',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Syd%20Matters%20-%20Menu%20Theme.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Syd%20Matters%20-%20Menu%20Theme.jpg'
    },
    {
      name: 'Akiba',
      artist: 'Synthion',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Synthion%20-%20Akiba.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Synthion%20-%20Akiba.jpg'
    },
    {
      name: 'The Other Side',
      artist: 'SZA/Justin Timberlake',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/SZA%20Justin%20Timberlake%20-%20The%20Other%20Side.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/SZA%20Justin%20Timberlake%20-%20The%20Other%20Side.jpg'
    },
    {
      name: 'ツナグキズナ',
      artist: 'Team.ねこかん[猫]',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Team.%E3%81%AD%E3%81%93%E3%81%8B%E3%82%93%EF%BC%BB%E7%8C%AB%EF%BC%BD%20-%20%E3%83%84%E3%83%8A%E3%82%B0%E3%82%AD%E3%82%BA%E3%83%8A.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Team.%E3%81%AD%E3%81%93%E3%81%8B%E3%82%93%EF%BC%BB%E7%8C%AB%EF%BC%BD%20-%20%E3%83%84%E3%83%8A%E3%82%B0%E3%82%AD%E3%82%BA%E3%83%8A.png'
    },
    {
      name: '君のせい',
      artist: 'the peggies',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/the%20peggies%20-%20%E5%90%9B%E3%81%AE%E3%81%9B%E3%81%84.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/the%20peggies%20-%20%E5%90%9B%E3%81%AE%E3%81%9B%E3%81%84.png'
    },
    {
      name: 'Dancing Naked',
      artist: 'TheFatRat',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TheFatRat%20-%20Dancing%20Naked.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TheFatRat%20-%20Dancing%20Naked.jpg'
    },
    {
      name: 'Never Be Alone',
      artist: 'TheFatRat',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TheFatRat%20-%20Never%20Be%20Alone.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TheFatRat%20-%20Never%20Be%20Alone.jpg'
    },
    {
      name: 'The Other Side',
      artist: 'SZA/Justin Timberlake',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/SZA%20Justin%20Timberlake%20-%20The%20Other%20Side.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/SZA%20Justin%20Timberlake%20-%20The%20Other%20Side.jpg'
    },
    {
      name: 'Windfall',
      artist: 'TheFatRat',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TheFatRat%20-%20Windfall.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TheFatRat%20-%20Windfall.jpg'
    },
    {
      name: 'An Endless Desert',
      artist: 'Todd Baker',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Todd%20Baker%20-%20An%20Endless%20Desert.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Todd%20Baker%20-%20An%20Endless%20Desert.png'
    },
    {
      name: 'DREAM SOLISTER (TV Size)',
      artist: 'TRUE',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TRUE%20-%20DREAM%20SOLISTER%20%28TV%20Size%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TRUE%20-%20DREAM%20SOLISTER%20%28TV%20Size%29.jpg'
    },
    {
      name: 'DREAM SOLISTER',
      artist: 'TRUE',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TRUE%20-%20DREAM%20SOLISTER.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TRUE%20-%20DREAM%20SOLISTER.jpg'
    },
    {
      name: 'Sincerely',
      artist: 'TRUE',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TRUE%20-%20Sincerely.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TRUE%20-%20Sincerely.jpg'
    },
    {
      name: '夜螢光～Auld Lang Syne -bossa style- (off vocal)',
      artist: 'TUMENECO',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TUMENECO%20-%20%E5%A4%9C%E8%9E%A2%E5%85%89%EF%BD%9EAuld%20Lang%20Syne%20-bossa%20style-%20%28off%20vocal%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/TUMENECO%20-%20%E5%A4%9C%E8%9E%A2%E5%85%89%EF%BD%9EAuld%20Lang%20Syne%20-bossa%20style-%20%28off%20vocal%29.jpg'
    },
    {
      name: 'May I (Unshaken)',
      artist: 'Various Artists',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Various%20Artists%20-%20May%20I%20%28Unshaken%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Various%20Artists%20-%20May%20I%20%28Unshaken%29.jpg'
    },
    {
      name: 'Rather Be',
      artist: 'Vitamin String Quartet',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Vitamin%20String%20Quartet%20-%20Rather%20Be.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Vitamin%20String%20Quartet%20-%20Rather%20Be.jpg'
    },
    {
      name: 'Bleu (Original Mix) - remix',
      artist: 'Worakls',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Worakls%20-%20Bleu%20%28Original%20Mix%29%20-%20remix.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Worakls%20-%20Bleu%20%28Original%20Mix%29%20-%20remix.png'
    },
    {
      name: 'acro',
      artist: 'yutaka hirasaka',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/yutaka%20hirasaka%20-%20acro.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/yutaka%20hirasaka%20-%20acro.jpg'
    },
    {
      name: 'breathing',
      artist: 'yutaka hirasaka',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/yutaka%20hirasaka%20-%20breathing.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/yutaka%20hirasaka%20-%20breathing.png'
    },
    {
      name: 'Rydeen',
      artist: 'イエロー・マジック・オーケストラ',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%A4%E3%82%A8%E3%83%AD%E3%83%BC%E3%83%BB%E3%83%9E%E3%82%B8%E3%83%83%E3%82%AF%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%B1%E3%82%B9%E3%83%88%E3%83%A9%20-%20Rydeen.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%A4%E3%82%A8%E3%83%AD%E3%83%BC%E3%83%BB%E3%83%9E%E3%82%B8%E3%83%83%E3%82%AF%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%B1%E3%82%B9%E3%83%88%E3%83%A9%20-%20Rydeen.jpg'
    },
    {
      name: 'お勉強しといてよ',
      artist: 'ずっと真夜中でいいのに。',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%81%9A%E3%81%A3%E3%81%A8%E7%9C%9F%E5%A4%9C%E4%B8%AD%E3%81%A7%E3%81%84%E3%81%84%E3%81%AE%E3%81%AB%E3%80%82%20-%20%E3%81%8A%E5%8B%89%E5%BC%B7%E3%81%97%E3%81%A8%E3%81%84%E3%81%A6%E3%82%88.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%81%9A%E3%81%A3%E3%81%A8%E7%9C%9F%E5%A4%9C%E4%B8%AD%E3%81%A7%E3%81%84%E3%81%84%E3%81%AE%E3%81%AB%E3%80%82%20-%20%E3%81%8A%E5%8B%89%E5%BC%B7%E3%81%97%E3%81%A8%E3%81%84%E3%81%A6%E3%82%88.jpg'
    },
    {
      name: '深海少女',
      artist: 'のぶなが',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%81%AE%E3%81%B6%E3%81%AA%E3%81%8C%20-%20%E6%B7%B1%E6%B5%B7%E5%B0%91%E5%A5%B3.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%81%AE%E3%81%B6%E3%81%AA%E3%81%8C%20-%20%E6%B7%B1%E6%B5%B7%E5%B0%91%E5%A5%B3.jpg'
    },
    {
      name: 'ヒャダインのカカカタ☆カタオモイ-C',
      artist: 'ヒャダイン',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%83%92%E3%83%A3%E3%83%80%E3%82%A4%E3%83%B3%20-%20%E3%83%92%E3%83%A3%E3%83%80%E3%82%A4%E3%83%B3%E3%81%AE%E3%82%AB%E3%82%AB%E3%82%AB%E3%82%BF%E2%98%86%E3%82%AB%E3%82%BF%E3%82%AA%E3%83%A2%E3%82%A4-C.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%83%92%E3%83%A3%E3%83%80%E3%82%A4%E3%83%B3%20-%20%E3%83%92%E3%83%A3%E3%83%80%E3%82%A4%E3%83%B3%E3%81%AE%E3%82%AB%E3%82%AB%E3%82%AB%E3%82%BF%E2%98%86%E3%82%AB%E3%82%BF%E3%82%AA%E3%83%A2%E3%82%A4-C.png'
    },
    {
      name: 'アクアテラリウム',
      artist: 'やなぎなぎ',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%20-%20%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%86%E3%83%A9%E3%83%AA%E3%82%A6%E3%83%A0.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%20-%20%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%86%E3%83%A9%E3%83%AA%E3%82%A6%E3%83%A0.jpg'
    },
    {
      name: 'ユキトキ',
      artist: 'やなぎなぎ',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%20-%20%E3%83%A6%E3%82%AD%E3%83%88%E3%82%AD.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%20-%20%E3%83%A6%E3%82%AD%E3%83%88%E3%82%AD.jpg'
    },
    {
      name: '三つ葉の結びめ',
      artist: 'やなぎなぎ',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%20-%20%E4%B8%89%E3%81%A4%E8%91%89%E3%81%AE%E7%B5%90%E3%81%B3%E3%82%81.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%20-%20%E4%B8%89%E3%81%A4%E8%91%89%E3%81%AE%E7%B5%90%E3%81%B3%E3%82%81.jpg'
    },
    {
      name: 'ハッピー・ハッピー・フレンズ',
      artist: 'わたてん☆5',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%8F%E3%81%9F%E3%81%A6%E3%82%93%E2%98%865%20-%20%E3%83%8F%E3%83%83%E3%83%94%E3%83%BC%E3%83%BB%E3%83%8F%E3%83%83%E3%83%94%E3%83%BC%E3%83%BB%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%8F%E3%81%9F%E3%81%A6%E3%82%93%E2%98%865%20-%20%E3%83%8F%E3%83%83%E3%83%94%E3%83%BC%E3%83%BB%E3%83%8F%E3%83%83%E3%83%94%E3%83%BC%E3%83%BB%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA.png'
    },
    {
      name: '気ままな天使たち',
      artist: 'わたてん☆5',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%8F%E3%81%9F%E3%81%A6%E3%82%93%E2%98%865%20-%20%E6%B0%97%E3%81%BE%E3%81%BE%E3%81%AA%E5%A4%A9%E4%BD%BF%E3%81%9F%E3%81%A1.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%82%8F%E3%81%9F%E3%81%A6%E3%82%93%E2%98%865%20-%20%E6%B0%97%E3%81%BE%E3%81%BE%E3%81%AA%E5%A4%A9%E4%BD%BF%E3%81%9F%E3%81%A1.png'
    },
    {
      name: 'Cynic',
      artist: '闇音レンリ/ポリスピカデリー',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%97%87%E9%9F%B3%E3%83%AC%E3%83%B3%E3%83%AA%20%E3%83%9D%E3%83%AA%E3%82%B9%E3%83%94%E3%82%AB%E3%83%87%E3%83%AA%E3%83%BC%20-%20Cynic.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%97%87%E9%9F%B3%E3%83%AC%E3%83%B3%E3%83%AA%20%E3%83%9D%E3%83%AA%E3%82%B9%E3%83%94%E3%82%AB%E3%83%87%E3%83%AA%E3%83%BC%20-%20Cynic.png'
    },
    {
      name: 'nameless story',
      artist: '岸田教団＆THE明星ロケッツ',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B2%B8%E7%94%B0%E6%95%99%E5%9B%A3%EF%BC%86THE%E6%98%8E%E6%98%9F%E3%83%AD%E3%82%B1%E3%83%83%E3%83%84%20-%20nameless%20story.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B2%B8%E7%94%B0%E6%95%99%E5%9B%A3%EF%BC%86THE%E6%98%8E%E6%98%9F%E3%83%AD%E3%82%B1%E3%83%83%E3%83%84%20-%20nameless%20story.png'
    },
    {
      name: 'ロンドン',
      artist: '北川保昌',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%8C%97%E5%B7%9D%E4%BF%9D%E6%98%8C%20-%20%E3%83%AD%E3%83%B3%E3%83%89%E3%83%B3.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%8C%97%E5%B7%9D%E4%BF%9D%E6%98%8C%20-%20%E3%83%AD%E3%83%B3%E3%83%89%E3%83%B3.jpg'
    },
    {
      name: '調査',
      artist: '北川保昌',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%8C%97%E5%B7%9D%E4%BF%9D%E6%98%8C%20-%20%E8%AA%BF%E6%9F%BB.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%8C%97%E5%B7%9D%E4%BF%9D%E6%98%8C%20-%20%E8%AA%BF%E6%9F%BB.jpg'
    },
    {
      name: 'Chapter1-MainBGM',
      artist: '濱本麻央',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%BF%B1%E6%9C%AC%E9%BA%BB%E5%A4%AE%20-%20Chapter1-MainBGM.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%BF%B1%E6%9C%AC%E9%BA%BB%E5%A4%AE%20-%20Chapter1-MainBGM.jpg'
    },
    {
      name: 'Fonte',
      artist: '出羽良彰',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20Fonte.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20Fonte.jpg'
    },
    {
      name: 'Navio',
      artist: '出羽良彰',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20Navio.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20Navio.jpg'
    },
    {
      name: 'すりぬける心',
      artist: '出羽良彰',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20%E3%81%99%E3%82%8A%E3%81%AC%E3%81%91%E3%82%8B%E5%BF%83.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20%E3%81%99%E3%82%8A%E3%81%AC%E3%81%91%E3%82%8B%E5%BF%83.png'
    },
    {
      name: '母の手',
      artist: '出羽良彰',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20%E6%AF%8D%E3%81%AE%E6%89%8B.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20%E6%AF%8D%E3%81%AE%E6%89%8B.jpg'
    },
    {
      name: '母になる日々',
      artist: '川井憲次',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B7%9D%E4%BA%95%E6%86%B2%E6%AC%A1%20-%20%E6%AF%8D%E3%81%AB%E3%81%AA%E3%82%8B%E6%97%A5%E3%80%85.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B7%9D%E4%BA%95%E6%86%B2%E6%AC%A1%20-%20%E6%AF%8D%E3%81%AB%E3%81%AA%E3%82%8B%E6%97%A5%E3%80%85.png'
    },
    {
      name: 'みぬきのテーマ ～魔術の子',
      artist: '堀山俊彦',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%A0%80%E5%B1%B1%E4%BF%8A%E5%BD%A6%20-%20%E3%81%BF%E3%81%AC%E3%81%8D%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E%20%EF%BD%9E%E9%AD%94%E8%A1%93%E3%81%AE%E5%AD%90.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%A0%80%E5%B1%B1%E4%BF%8A%E5%BD%A6%20-%20%E3%81%BF%E3%81%AC%E3%81%8D%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E%20%EF%BD%9E%E9%AD%94%E8%A1%93%E3%81%AE%E5%AD%90.jpg'
    },
    {
      name: '灼け落ちない翼',
      artist: '多田葵',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%A4%9A%E7%94%B0%E8%91%B5%20-%20%E7%81%BC%E3%81%91%E8%90%BD%E3%81%A1%E3%81%AA%E3%81%84%E7%BF%BC.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%A4%9A%E7%94%B0%E8%91%B5%20-%20%E7%81%BC%E3%81%91%E8%90%BD%E3%81%A1%E3%81%AA%E3%81%84%E7%BF%BC.jpg'
    },
    {
      name: 'ハレルヤ☆エッサイム',
      artist: '富田美憂/大西沙織/大空直美/花澤香菜',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%AF%8C%E7%94%B0%E7%BE%8E%E6%86%82%20%E5%A4%A7%E8%A5%BF%E6%B2%99%E7%B9%94%20%E5%A4%A7%E7%A9%BA%E7%9B%B4%E7%BE%8E%20%E8%8A%B1%E6%BE%A4%E9%A6%99%E8%8F%9C%20-%20%E3%83%8F%E3%83%AC%E3%83%AB%E3%83%A4%E2%98%86%E3%82%A8%E3%83%83%E3%82%B5%E3%82%A4%E3%83%A0.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%AF%8C%E7%94%B0%E7%BE%8E%E6%86%82%20%E5%A4%A7%E8%A5%BF%E6%B2%99%E7%B9%94%20%E5%A4%A7%E7%A9%BA%E7%9B%B4%E7%BE%8E%20%E8%8A%B1%E6%BE%A4%E9%A6%99%E8%8F%9C%20-%20%E3%83%8F%E3%83%AC%E3%83%AB%E3%83%A4%E2%98%86%E3%82%A8%E3%83%83%E3%82%B5%E3%82%A4%E3%83%A0.png'
    },
    {
      name: 'ヴィヴァーチェ! (Vivace！)',
      artist: '黑泽朋世/朝井彩加/豊田萌絵/安済知佳',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%BB%91%E6%B3%BD%E6%9C%8B%E4%B8%96%20-%20%E3%83%88%E3%82%A5%E3%83%83%E3%83%86%E3%82%A3%21%20%28%E5%90%88%E5%A5%8F%EF%BC%81%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%BB%91%E6%B3%BD%E6%9C%8B%E4%B8%96%20-%20%E3%83%B4%E3%82%A3%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%81%E3%82%A7%21%20%28Vivace%EF%BC%81%29.jpg'
    },
    {
      name: 'トゥッティ! (合奏！)',
      artist: '黑泽朋世/朝井彩加/豊田萌絵/安済知佳',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%BB%91%E6%B3%BD%E6%9C%8B%E4%B8%96%20-%20%E3%83%88%E3%82%A5%E3%83%83%E3%83%86%E3%82%A3%21%20%28%E5%90%88%E5%A5%8F%EF%BC%81%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%BB%91%E6%B3%BD%E6%9C%8B%E4%B8%96%20-%20%E3%83%88%E3%82%A5%E3%83%83%E3%83%86%E3%82%A3%21%20%28%E5%90%88%E5%A5%8F%EF%BC%81%29.jpg'
    },
    {
      name: '革命前夜',
      artist: '井口裕香',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%BA%95%E5%8F%A3%E8%A3%95%E9%A6%99%20-%20%E9%9D%A9%E5%91%BD%E5%89%8D%E5%A4%9C.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%BA%95%E5%8F%A3%E8%A3%95%E9%A6%99%20-%20%E9%9D%A9%E5%91%BD%E5%89%8D%E5%A4%9C.png'
    },
    {
      name: '王泥喜 法介 ～新章開廷!',
      artist: '堀山俊彦',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%A0%80%E5%B1%B1%E4%BF%8A%E5%BD%A6%20-%20%E7%8E%8B%E6%B3%A5%E5%96%9C%20%E6%B3%95%E4%BB%8B%20%EF%BD%9E%E6%96%B0%E7%AB%A0%E9%96%8B%E5%BB%B7%21.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%A0%80%E5%B1%B1%E4%BF%8A%E5%BD%A6%20-%20%E7%8E%8B%E6%B3%A5%E5%96%9C%20%E6%B3%95%E4%BB%8B%20%EF%BD%9E%E6%96%B0%E7%AB%A0%E9%96%8B%E5%BB%B7%21.jpg'
    },
    // {
    //   name: '不可思議のカルテ',
    //   artist: '瀬戸麻沙美/東山奈央/種崎敦美/内田真礼/久保ユリカ/水瀬いのり',
    //   url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%80%AC%E6%88%B8%E9%BA%BB%E6%B2%99%E7%BE%8E%20%E6%9D%B1%E5%B1%B1%E5%A5%88%E5%A4%AE%20%E7%A8%AE%E5%B4%8E%E6%95%A6%E7%BE%8E%20%E5%86%85%E7%94%B0%E7%9C%9F%E7%A4%BC%20%E4%B9%85%E4%BF%9D%E3%83%A6%E3%83%AA%E3%82%AB%20%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AD%B0%E3%81%AE%E3%82%AB%E3%83%AB%E3%83%86.mp3',
    //   cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%80%AC%E6%88%B8%E9%BA%BB%E6%B2%99%E7%BE%8E%20%E6%9D%B1%E5%B1%B1%E5%A5%88%E5%A4%AE%20%E7%A8%AE%E5%B4%8E%E6%95%A6%E7%BE%8E%20%E5%86%85%E7%94%B0%E7%9C%9F%E7%A4%BC%20%E4%B9%85%E4%BF%9D%E3%83%A6%E3%83%AA%E3%82%AB%20%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AD%B0%E3%81%AE%E3%82%AB%E3%83%AB%E3%83%86.png'
    // },
    {
      name: '独行',
      artist: '马骁飞',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%A9%AC%E9%AA%81%E9%A3%9E%20-%20%E7%8B%AC%E8%A1%8C.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%A9%AC%E9%AA%81%E9%A3%9E%20-%20%E7%8B%AC%E8%A1%8C.jpg'
    },
    {
      name: '始',
      artist: '马骁飞',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%A9%AC%E9%AA%81%E9%A3%9E%20-%20%E5%A7%8B.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E9%A9%AC%E9%AA%81%E9%A3%9E%20-%20%E5%A7%8B.png'
    },
    {
      name: 'slt',
      artist: '牛尾憲輔',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%89%9B%E5%B0%BE%E6%86%B2%E8%BC%94%20-%20slt.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%89%9B%E5%B0%BE%E6%86%B2%E8%BC%94%20-%20slt.jpg'
    },
    {
      name: 'God knows...',
      artist: '平野綾',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B9%B3%E9%87%8E%E7%B6%BE%20-%20God%20knows....mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B9%B3%E9%87%8E%E7%B6%BE%20-%20God%20knows....png'
    },
    {
      name: 'WHITE ALBUM',
      artist: '平野綾',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B9%B3%E9%87%8E%E7%B6%BE%20-%20WHITE%20ALBUM.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B9%B3%E9%87%8E%E7%B6%BE%20-%20WHITE%20ALBUM.jpg'
    },
    {
      name: '冒険でしょでしょ?',
      artist: '平野綾',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B9%B3%E9%87%8E%E7%B6%BE%20-%20%E5%86%92%E9%99%BA%E3%81%A7%E3%81%97%E3%82%87%E3%81%A7%E3%81%97%E3%82%87%EF%BC%9F.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B9%B3%E9%87%8E%E7%B6%BE%20-%20%E5%86%92%E9%99%BA%E3%81%A7%E3%81%97%E3%82%87%E3%81%A7%E3%81%97%E3%82%87%EF%BC%9F.png'
    },
    {
      name: 'ハレ晴レユカイ',
      artist: '平野綾/茅原実里/後藤邑子',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B9%B3%E9%87%8E%E7%B6%BE%20%E8%8C%85%E5%8E%9F%E5%AE%9F%E9%87%8C%20%E5%BE%8C%E8%97%A4%E9%82%91%E5%AD%90%20-%20%E3%83%8F%E3%83%AC%E6%99%B4%E3%83%AC%E3%83%A6%E3%82%AB%E3%82%A4.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B9%B3%E9%87%8E%E7%B6%BE%20%E8%8C%85%E5%8E%9F%E5%AE%9F%E9%87%8C%20%E5%BE%8C%E8%97%A4%E9%82%91%E5%AD%90%20-%20%E3%83%8F%E3%83%AC%E6%99%B4%E3%83%AC%E3%83%A6%E3%82%AB%E3%82%A4.jpg'
    },
    {
      name: 'Speed of Light',
      artist: '塞壬唱片-MSR/DJ Okawari/二宮愛',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR%20DJ%20Okawari%20%E4%BA%8C%E5%AE%AE%E6%84%9B%20-%20Speed%20of%20Light.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR%20DJ%20Okawari%20%E4%BA%8C%E5%AE%AE%E6%84%9B%20-%20Speed%20of%20Light.png'
    },
    {
      name: 'ヨスガノソラ メインテーマ -遠い空へ-',
      artist: '三輪学',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%B8%89%E8%BC%AA%E5%AD%A6%20-%20%E3%83%A8%E3%82%B9%E3%82%AC%E3%83%8E%E3%82%BD%E3%83%A9%20%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%86%E3%83%BC%E3%83%9E%20-%E9%81%A0%E3%81%84%E7%A9%BA%E3%81%B8-.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%B8%89%E8%BC%AA%E5%AD%A6%20-%20%E3%83%A8%E3%82%B9%E3%82%AC%E3%83%8E%E3%82%BD%E3%83%A9%20%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%86%E3%83%BC%E3%83%9E%20-%E9%81%A0%E3%81%84%E7%A9%BA%E3%81%B8-.png'
    },
    {
      name: 'コラージュ',
      artist: '三月のパンタシア',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%B8%89%E6%9C%88%E3%81%AE%E3%83%91%E3%83%B3%E3%82%BF%E3%82%B7%E3%82%A2%20-%20%E3%82%B3%E3%83%A9%E3%83%BC%E3%82%B8%E3%83%A5.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%B8%89%E6%9C%88%E3%81%AE%E3%83%91%E3%83%B3%E3%82%BF%E3%82%B7%E3%82%A2%20-%20%E3%82%B3%E3%83%A9%E3%83%BC%E3%82%B8%E3%83%A5.png'
    },
    {
      name: 'エンジェル珈琲',
      artist: '三澤康広',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%B8%89%E6%BE%A4%E5%BA%B7%E5%BA%83%20-%20%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%AB%E7%8F%88%E7%90%B2.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%B8%89%E6%BE%A4%E5%BA%B7%E5%BA%83%20-%20%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%AB%E7%8F%88%E7%90%B2.png'
    },
    {
      name: 'One more time, One more chance',
      artist: '山崎まさよし',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B1%B1%E5%B4%8E%E3%81%BE%E3%81%95%E3%82%88%E3%81%97%20-%20One%20more%20time%2C%20One%20more%20chance.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%B1%B1%E5%B4%8E%E3%81%BE%E3%81%95%E3%82%88%E3%81%97%20-%20One%20more%20time%2C%20One%20more%20chance.png'
    },
    {
      name: 'GHOST TRICK',
      artist: '杉森雅和',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%89%E6%A3%AE%E9%9B%85%E5%92%8C%20-%20GHOST%20TRICK.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%89%E6%A3%AE%E9%9B%85%E5%92%8C%20-%20GHOST%20TRICK.png'
    },
    {
      name: 'ザ･ミステリアス',
      artist: '神前暁',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%A5%9E%E5%89%8D%E6%9A%81%20-%20%E3%82%B6%EF%BD%A5%E3%83%9F%E3%82%B9%E3%83%86%E3%83%AA%E3%82%A2%E3%82%B9.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%A5%9E%E5%89%8D%E6%9A%81%20-%20%E3%82%B6%EF%BD%A5%E3%83%9F%E3%82%B9%E3%83%86%E3%83%AA%E3%82%A2%E3%82%B9.jpg'
    },
    {
      name: '好調好調',
      artist: '神前暁',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%A5%9E%E5%89%8D%E6%9A%81%20-%20%E5%A5%BD%E8%AA%BF%E5%A5%BD%E8%AA%BF.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%A5%9E%E5%89%8D%E6%9A%81%20-%20%E5%A5%BD%E8%AA%BF%E5%A5%BD%E8%AA%BF.png'
    },
    {
      name: 'いつもの風景から始まる物語',
      artist: '神前暁/高田龍一',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%A5%9E%E5%89%8D%E6%9A%81%20%E9%AB%98%E7%94%B0%E9%BE%8D%E4%B8%80%20-%20%E3%81%84%E3%81%A4%E3%82%82%E3%81%AE%E9%A2%A8%E6%99%AF%E3%81%8B%E3%82%89%E5%A7%8B%E3%81%BE%E3%82%8B%E7%89%A9%E8%AA%9E.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%A5%9E%E5%89%8D%E6%9A%81%20%E9%AB%98%E7%94%B0%E9%BE%8D%E4%B8%80%20-%20%E3%81%84%E3%81%A4%E3%82%82%E3%81%AE%E9%A2%A8%E6%99%AF%E3%81%8B%E3%82%89%E5%A7%8B%E3%81%BE%E3%82%8B%E7%89%A9%E8%AA%9E.png'
    },
    {
      name: 'RYDEEN (平和)',
      artist: '松田彬人',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20RYDEEN%20%28%E5%B9%B3%E5%92%8C%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20RYDEEN%20%28%E5%B9%B3%E5%92%8C%29.jpg'
    },
    {
      name: 'そして、次の曲が始まる',
      artist: '松田彬人',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E3%81%9D%E3%81%97%E3%81%A6%E3%80%81%E6%AC%A1%E3%81%AE%E6%9B%B2%E3%81%8C%E5%A7%8B%E3%81%BE%E3%82%8B.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E3%81%9D%E3%81%97%E3%81%A6%E3%80%81%E6%AC%A1%E3%81%AE%E6%9B%B2%E3%81%8C%E5%A7%8B%E3%81%BE%E3%82%8B.jpg'
    },
    {
      name: 'はじまりの旋律 (初始的旋律)',
      artist: '松田彬人',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E3%81%AF%E3%81%98%E3%81%BE%E3%82%8A%E3%81%AE%E6%97%8B%E5%BE%8B%20%28%E5%88%9D%E5%A7%8B%E7%9A%84%E6%97%8B%E5%BE%8B%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E3%81%AF%E3%81%98%E3%81%BE%E3%82%8A%E3%81%AE%E6%97%8B%E5%BE%8B%20%28%E5%88%9D%E5%A7%8B%E7%9A%84%E6%97%8B%E5%BE%8B%29.jpg'
    },
    {
      name: 'プロヴァンスの風 (普罗旺斯的风)',
      artist: '松田彬人',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E3%83%97%E3%83%AD%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B9%E3%81%AE%E9%A2%A8%20%28%E6%99%AE%E7%BD%97%E6%97%BA%E6%96%AF%E7%9A%84%E9%A3%8E%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E3%83%97%E3%83%AD%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B9%E3%81%AE%E9%A2%A8%20%28%E6%99%AE%E7%BD%97%E6%97%BA%E6%96%AF%E7%9A%84%E9%A3%8E%29.jpg'
    },
    {
      name: '三日月の舞 (新月之舞) (麗奈 トランペットソロ Ver.)',
      artist: '松田彬人',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E4%B8%89%E6%97%A5%E6%9C%88%E3%81%AE%E8%88%9E%20%28%E6%96%B0%E6%9C%88%E4%B9%8B%E8%88%9E%29%20%28%E9%BA%97%E5%A5%88%20%E3%83%88%E3%83%A9%E3%83%B3%E3%83%9A%E3%83%83%E3%83%88%E3%82%BD%E3%83%AD%20Ver.%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E4%B8%89%E6%97%A5%E6%9C%88%E3%81%AE%E8%88%9E%20%28%E6%96%B0%E6%9C%88%E4%B9%8B%E8%88%9E%29%20%28%E9%BA%97%E5%A5%88%20%E3%83%88%E3%83%A9%E3%83%B3%E3%83%9A%E3%83%83%E3%83%88%E3%82%BD%E3%83%AD%20Ver.%29.jpg'
    },
    {
      name: '意識の萌芽 (意识的萌芽)',
      artist: '松田彬人',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E6%84%8F%E8%AD%98%E3%81%AE%E8%90%8C%E8%8A%BD%20%28%E6%84%8F%E8%AF%86%E7%9A%84%E8%90%8C%E8%8A%BD%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9D%BE%E7%94%B0%E5%BD%AC%E4%BA%BA%20-%20%E6%84%8F%E8%AD%98%E3%81%AE%E8%90%8C%E8%8A%BD%20%28%E6%84%8F%E8%AF%86%E7%9A%84%E8%90%8C%E8%8A%BD%29.jpg'
    },
    {
      name: 'that Day',
      artist: '削除',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%89%8A%E9%99%A4%20-%20that%20Day.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%89%8A%E9%99%A4%20-%20that%20Day.png'
    },
    {
      name: '潮鳴り',
      artist: '折戸伸治',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%8A%98%E6%88%B8%E4%BC%B8%E6%B2%BB%20-%20%E6%BD%AE%E9%B3%B4%E3%82%8A.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%8A%98%E6%88%B8%E4%BC%B8%E6%B2%BB%20-%20%E6%BD%AE%E9%B3%B4%E3%82%8A.png'
    },
    {
      name: 'Obstruction `77',
      artist: '佐藤直紀',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%BD%90%E8%97%A4%E7%9B%B4%E7%B4%80%20-%20Obstruction%20%2777.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%BD%90%E8%97%A4%E7%9B%B4%E7%B4%80%20-%20Obstruction%20%2777.png'
    },
    {
      name: 'Zzz',
      artist: '佐咲紗花',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%BD%90%E5%92%B2%E7%B4%97%E8%8A%B1%20-%20Zzz.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E4%BD%90%E5%92%B2%E7%B4%97%E8%8A%B1%20-%20Zzz.png'
    },
    {
      name: 'Kronos',
      artist: 'Diverse System',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Diverse%20System%20-%20Kronos.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Diverse%20System%20-%20Kronos.png'
    },
    {
      name: 'Cristalisia',
      artist: 'onoken',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/onoken%20-%20Cristalisia.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/onoken%20-%20Cristalisia.png'
    },
    {
      name: 'Ther',
      artist: 'Kraffa',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kraffa%20-%20Ther.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Kraffa%20-%20Ther.png'
    },
    {
      name: 'Turn Around',
      artist: 'Rundfunk',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Rundfunk%20-%20Turn%20Around.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Rundfunk%20-%20Turn%20Around.jpg'
    },
    {
      name: 'いつも (INSTRUMENTAL) - instrumental',
      artist: 'Spontania',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Spontania%20-%20%E3%81%84%E3%81%A4%E3%82%82%20%28INSTRUMENTAL%29%20-%20instrumental.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Spontania%20-%20%E3%81%84%E3%81%A4%E3%82%82%20%28INSTRUMENTAL%29%20-%20instrumental.png'
    },
    {
      name: 'Breathe Slowly (reprise)',
      artist: 'stereoberry',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/stereoberry%20-%20Breathe%20Slowly%20%28reprise%29.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/stereoberry%20-%20Breathe%20Slowly%20%28reprise%29.jpg'
    },
    {
      name: 'ASAP',
      artist: '林ゆうき',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9E%97%E3%82%86%E3%81%86%E3%81%8D%20-%20ASAP.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E6%9E%97%E3%82%86%E3%81%86%E3%81%8D%20-%20ASAP.png'
    },
    {
      name: 'たぶん',
      artist: 'YOASOBI',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/YOASOBI%20-%20%E3%81%9F%E3%81%B5%E3%82%99%E3%82%93.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/YOASOBI%20-%20%E3%81%9F%E3%81%B5%E3%82%99%E3%82%93.jpg'
    },
    {
      name: 'ハルジオン',
      artist: 'YOASOBI',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/YOASOBI%20-%20%E3%83%8F%E3%83%AB%E3%82%B8%E3%82%AA%E3%83%B3.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/YOASOBI%20-%20%E3%83%8F%E3%83%AB%E3%82%B8%E3%82%AA%E3%83%B3.jpg'
    },
    {
      name: '夜に駆ける',
      artist: 'YOASOBI',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/YOASOBI%20-%20%E5%A4%9C%E3%81%AB%E9%A7%86%E3%81%91%E3%82%8B.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/YOASOBI%20-%20%E5%A4%9C%E3%81%AB%E9%A7%86%E3%81%91%E3%82%8B.jpg'
    },
    {
      name: '口噛み酒トリップ',
      artist: 'RADWIMPS',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20-%20%E5%8F%A3%E5%99%9B%E3%81%BF%E9%85%92%E3%83%88%E3%83%AA%E3%83%83%E3%83%97.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20-%20%E5%8F%A3%E5%99%9B%E3%81%BF%E9%85%92%E3%83%88%E3%83%AA%E3%83%83%E3%83%97.jpg'
    },
    {
      name: '三葉のテーマ',
      artist: 'RADWIMPS',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20-%20%E4%B8%89%E8%91%89%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/RADWIMPS%20-%20%E4%B8%89%E8%91%89%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E.jpg'
    },
    {
      name: 'call',
      artist: 'yutaka hirasaka',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/yutaka%20hirasaka%20-%20call.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/yutaka%20hirasaka%20-%20call.jpg'
    },
    {
      name: 'ボカロはダサい',
      artist: 'ピノキオピー',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%83%94%E3%83%8E%E3%82%AD%E3%82%AA%E3%83%94%E3%83%BC%20-%20%E3%83%9C%E3%82%AB%E3%83%AD%E3%81%AF%E3%83%80%E3%82%B5%E3%81%84.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E3%83%94%E3%83%8E%E3%82%AD%E3%82%AA%E3%83%94%E3%83%BC%20-%20%E3%83%9C%E3%82%AB%E3%83%AD%E3%81%AF%E3%83%80%E3%82%B5%E3%81%84.png'
    },
    {
      name: 'シオシシオ',
      artist: '出羽良彰',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20%E3%82%B7%E3%82%AA%E3%82%B7%E3%82%B7%E3%82%AA.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E5%87%BA%E7%BE%BD%E8%89%AF%E5%BD%B0%20-%20%E3%82%B7%E3%82%AA%E3%82%B7%E3%82%B7%E3%82%AA.jpg'
    },
    {
      name: '魔女',
      artist: '花譜',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E8%8A%B1%E8%AD%9C%20-%20%E9%AD%94%E5%A5%B3.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E8%8A%B1%E8%AD%9C%20-%20%E9%AD%94%E5%A5%B3.jpg'
    },
    {
      name: 'Piano Returns',
      artist: 'Pax Japonica Groove',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Pax%20Japonica%20Groove%20-%20Piano%20Returns.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Pax%20Japonica%20Groove%20-%20Piano%20Returns.png'
    },
    {
      name: '初めてのデート',
      artist: 'SimorE',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/SimorE%20-%20%E5%88%9D%E3%82%81%E3%81%A6%E3%81%AE%E3%83%87%E3%83%BC%E3%83%88.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/SimorE%20-%20%E5%88%9D%E3%82%81%E3%81%A6%E3%81%AE%E3%83%87%E3%83%BC%E3%83%88.jpg'
    },
    {
      name: 'lost',
      artist: 'yutaka hirasaka',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/yutaka%20hirasaka%20-%20lost.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/yutaka%20hirasaka%20-%20lost.png'
    },
    {
      name: 'Frozen World',
      artist: '無力P',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%84%A1%E5%8A%9BP%20-%20Frozen%20World.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/%E7%84%A1%E5%8A%9BP%20-%20Frozen%20World.png'
    },
    {
      name: 'There`s always a way',
      artist: 'Alwone',
      url: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Alwone%20-%20There%27s%20always%20a%20way.mp3',
      cover: 'https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/music/Alwone%20-%20There%27s%20always%20a%20way.jpg'
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

// 检查手机是否支持
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {

    if (event.alpha == null) {    // PC端提示
      setMouseListener()
      return;
    }

    /* 根据beta和gamma值的变化更新偏移值 */
    calcOffset(event.beta, event.gamma);

    /* 显示当下的值 */
    // document.getElementById('alpha').innerHTML = 'x = ' + (event.alpha).toFixed(2); // 东南西北朝向，正北为360/0
    // document.getElementById('beta').innerHTML = 'y = ' + event.beta.toFixed(2); // 手机竖向立倒
    // document.getElementById('gamma').innerHTML = 'z = ' + (event.gamma).toFixed(2); // 手机横向立倒    
    // document.getElementById('deg').innerHTML = 'deg = ' + -( deg + 45 ).toFixed(2); // 相对x轴夹角
    // 显示当前的各项数据
    // spans = document.getElementsByTagName('span');
    // for (item of spans)
    //   item.setAttribute('class', 'show');

    // 更新屏幕显示内容
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
  let offsetX = Math.sin((Math.abs(beta) < 90 ? gamma : -gamma) * Math.PI / 180);  // - 90 < beta < 90 时，手机朝上
  let offsetY = Math.sin(beta * Math.PI / 180);

  // 这里需要用到你小学二年级学过的直角坐标转极坐标的方法
  // 最后的-45是为了让箭头初始指向x轴正方向
  // css的rotate()函数旋转的方向和极坐标系是相反的
  // 同样，text-shadow阴影的offsetY也与y轴是相反的
  // let deg = -Math.atan( -offsetY / offsetX ) * 180 / Math.PI + ( offsetX < 0 ? -180 : 0 ) - 45;
  // console.log(`${offsetX}.${offsetY},${deg}`)
  let percentWidth = offsetX
  let percentHeight = offsetY
  body.style.setProperty('--percentWidth', percentWidth)
  body.style.setProperty('--percentHeight', percentHeight)
}


async function switchImg() {
  var index = Math.floor((Math.random() * imgList.length));
  var src = imgList[index]
  // Get a reference to the image in whatever way suits.
  const img = document.getElementById("backgroundImg")
  var tempImg = new Image()
  tempImg.onload = function () {
    img.style.opacity = 0
    setTimeout(() => {
      img.src = tempImg.src
      img.style.opacity = 100
    }, 500)
  }
  tempImg.src = src
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