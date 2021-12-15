import songs from './db.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = 'lIGHT_MUSIC_PLAYER';

function isMobile() {
   return window.innerWidth <= 800;
 }

const app = (function() {
   const progress = $('#progress');
   const progressCircle = $('#progress .progress__running');
   const audio = $('#audio');
   const cd = $('.cd');
   const playingCd = cd.querySelector('.playing-cd');
   const playlist = $('.playlist');
   const config = JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {};

   let cdWidth = getComputedStyle(cd).getPropertyValue('--cd-width');
   cdWidth = +cdWidth.replace('%', '') * cd.offsetWidth / 100;
   let currentCdWidth = cdWidth;
   let current = 28;
   let isShuffle = false;
   let isRepeat = false;
   return {
      setConfig(key, value) {
         config[key] = value;
         localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(config));
      },
      render() {
         const htmls = songs.map((song, index) =>`
         <li class="song" data-songIndex="${index}">
            <div class="thumb" style="background-image: url(${song.image});"></div>
            <div class="song__infor">
               <h2 class="song__name">${song.name}</h2>
               <p class="song__artist">${song.artist}</p>
            </div>
            <div class="options">
               <i class="fa-light fa-ellipsis"></i>
               <ul class="options__menu">
                  <li>Add to favorites</li>
                  <li>Remove song from playlist</li>
               </ul>
            </div>
         </li>`)
         playlist.innerHTML = htmls.join('');
      },
      hideCd() {
         const minimizeBtn = $('#btn-minimize');
         minimizeBtn.onclick = () => {
            cd.classList.toggle('hide-cd');
         }
      },
      rewindAndForward() {
         if(isMobile()){
            progress.onclick = function(e) {
               const offsetCenter = currentCdWidth / 2;
               let alpha = Math.atan2(e.offsetY - offsetCenter, e.offsetX - offsetCenter);
               if(alpha < 0) alpha += 2 * Math.PI;
               alpha /= 2 * Math.PI;
               audio.currentTime = audio.duration * alpha;
            }
         } else {
            let isMousedown = false;
            progress.onclick = function(e) {
               const offsetCenter = currentCdWidth / 2;
               let alpha = Math.atan2(e.offsetY - offsetCenter, e.offsetX - offsetCenter);
               if(alpha < 0) alpha += 2 * Math.PI;
               alpha /= 2 * Math.PI;
               audio.currentTime = audio.duration * alpha;
            }
            progress.onmousedown = function() {
               isMousedown = true;
            }
            progress.onmousemove = function(e) {
               if(isMousedown) {
                  const offsetCenter = currentCdWidth / 2;
                  let alpha = Math.atan2(e.offsetY - offsetCenter, e.offsetX - offsetCenter);
                  if(alpha < 0) alpha += 2 * Math.PI;
                  alpha /= 2 * Math.PI;
                  audio.currentTime = audio.duration * alpha;
               }
            }
            progress.onmouseup = function() {
               isMousedown = false;
            }
         }
      },
      shuffle() {
         let newIndex;
         do {
            newIndex = Math.floor(Math.random() * songs.length);
         } while(newIndex === current);
         current = newIndex;
      },
      changeSong(a = 0) {
         if(isShuffle) {
            this.shuffle();
         } else {
            current += a;
            if(current === songs.length) {
               current = 0;
            } else if (current < 0) {
               current = songs.length - 1;
            }
         }
         this.loadCurrentSong();
         audio.play();
      },
      control() {
         const playBtn = $('#btn-play');
         const repeatBtn = $('#btn-repeat');
         const shuffleBtn = $('#btn-shuffle');
         const nextBtn = $('#btn-next');
         const prevBtn = $('#btn-prev');

         playBtn.onclick = function() {
            if(audio.paused) {
               audio.play();
            } else {
               audio.pause();
            }
         }
         
         audio.onplay = function(){
            playBtn.classList.add('playing');
            playingCd.style.animationPlayState = 'running';
         }
         audio.onpause = function(){
            playBtn.classList.remove('playing');
            playingCd.style.animationPlayState = 'paused';
         }

         audio.ontimeupdate = function() {
            const percent = audio.currentTime / audio.duration || 0;
            progressCircle.style.strokeDashoffset = `calc(${Math.PI} * 2 * var(--radius) * (1 - ${percent}))`;
         }

         nextBtn.onclick = () => {
            this.changeSong(1);
         }
         prevBtn.onclick = () => {
            this.changeSong(-1);
         }

         shuffleBtn.onclick = () => {
            isShuffle = !isShuffle;
            shuffleBtn.classList.toggle('active', isShuffle);
         }
         repeatBtn.onclick = () => {
            isRepeat = !isRepeat;
            repeatBtn.classList.toggle('active', isRepeat);
         }

         audio.onended = () => {
            if(isRepeat) audio.play();
            else nextBtn.click();
         }
         this.rewindAndForward();
         playlist.addEventListener('click', (e) => {
            const selectedSong = e.target.closest('.song:not(.active)');
            const options = e.target.closest('.options');
            if(selectedSong && !options) {
               current = +selectedSong.getAttribute('data-songIndex');
               this.changeSong();
            }
         })
      },
      loadCurrentSong() {
         const heading = $('.dashboard header h2');
         const newSong = $(`.song[data-songIndex = '${current}']`)
         try {
            playlist.querySelector('.song.active').classList.remove('active');
         } catch (e) {
         }
         newSong.classList.add('active');
         setTimeout(() => {
            newSong.scrollIntoView({
               behavior: 'smooth',
               block: 'center',
            })
         }, 300);

         heading.innerText = this.currentSong.name;
         playingCd.style.backgroundImage = `url(${this.currentSong.image})`;
         
         audio.src = this.currentSong.path;
      },
      start() {
         Object.defineProperty(this, 'currentSong', {
            get() { return songs[current]}
         })

         this.hideCd();
         this.render();
         this.loadCurrentSong();
         this.control();
      }
   }
})();

app.start();