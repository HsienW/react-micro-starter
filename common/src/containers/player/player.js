// import amplitude from 'amplitudejs';
//
// class Player extends HTMLElement {
//     constructor() {
//         super();
//         this.shadow = this.attachShadow({mode: 'open'});
//         this.amplitude = amplitude;
//         this.domStyling();
//         this.domRender();
//         this.playerConfigInit();
//         this.domEventInit();
//     }
//
//     domStyling() {
//         let style = document.createElement('style');
//         style.textContent = `
//         .player {
//             width: 100%;
//             height: 100%;
//             background-color: red;
//             display: flex;
//             justify-content: space-between;
//         }
//
//         .detail-area {
//             width: 20%;
//             height: 100%;
//             min-width: 300px;
//             background-color: green;
//             padding: 0 10px;
//             display: grid;
//             grid-template-columns: 64px auto;
//             grid-template-rows: 20px 20px 20px 20px 20px;
//             grid-template-areas:
//                 'image song-name'
//                 'image song-name'
//                 'image song-artist'
//                 'image song-artist'
//                 'image song-artist'
//         }
//
//         .detail-area>.song-image {
//             grid-area: image;
//             grid-row-start: 2;
//             width: 64px;
//             height: 64px;
//             background-color: blue;
//         }
//
//         .detail-area>.song-name {
//             grid-area: song-name;
//             grid-row-start: 3;
//             width: calc(100% - 64px);
//             font-size: 16px;
//             font-weight: 600;
//             padding: 0 10px;
//             color: rgba(0, 0, 0, 0.85);
//         }
//
//         .detail-area>.song-artist {
//             grid-area: song-artist;
//             grid-row-start: 4;
//             width: calc(100% - 64px);
//             font-size: 14px;
//             padding: 0 10px;
//             color: (0, 0, 0, 0.45);
//         }
//
//         .detail-area>div {
//             overflow : hidden;
//             text-overflow : ellipsis;
//             white-space : nowrap;
//         }
//
//         .controls-area {
//             width: 30%;
//             height: 100%;
//             min-width: 400px;
//             background-color: blue;
//             padding: 0 10px;
//         }
//
//         .controls-area>.buttons {
//             width: 100%;
//             height: 70%;
//             background-color: gray;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//         }
//
//         .icon {
//             width: 20px;
//             height: 20px;
//             cursor: pointer;
//             padding: 0 6px;
//             filter: invert(24%) sepia(0%) saturate(2973%) hue-rotate(316deg) brightness(91%) contrast(84%);
//         }
//
//         .controls-area>.buttons>.icon:hover {
//             color: #f33336;
//         }
//
//         .controls-area>.buttons>.icon.pause,
//         .controls-area>.buttons>.icon.repeat-one {
//             display: none;
//         }
//
//         .controls-area>.buttons>.repeat {
//             width: 18px;
//             height: 18px;
//         }
//
//         .controls-area>.buttons>.icon.play {
//             width: 28px;
//             height: 28px;
//         }
//
//         .progress-area {
//            cursor: pointer;
//             width: 100%;
//             height: 30%;
//             background-color: green;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//         }
//
//         .progress-area>.progress-bar {
//             height: 4px;
//             width: 100%;
//             background-color: rgba(0, 0, 0, 0.45);
//         }
//
//         .progress-bar>.progress-bar-conduct {
//             height: 4px;
//             width: 10%;
//             background-color: red;
//             z-index:99;
//         }
//
//         .progress-area>.progress-second {
//             width: 40px;
//             color: #ffffff;
//             font-size: 12px;
//             background-color: yellow;
//         }
//
//         .volume-area {
//             width: 20%;
//             height: 100%;
//             min-width: 300px;
//             background-color: yellow;
//             padding: 0 10px;
//             display: flex;
//             justify-content: flex-end;
//             align-items: center;
//         }
//
//         .volume-area>.volume-range-bar {
//             height: 4px;
//             width: 30%;
//             background-color: blue;
//             border: 0;
//         }
//
//         .volume-area>.volume-button {
//         }
//     `
//         this.shadow.appendChild(style);
//     }
//
//     domRender() {
//
//         console.log('看看看看看看看看看看看看看看看看看看看看看');
//         console.log(this.amplitude);
//
//         this.playerBody = document.createElement('div');
//         this.detailArea = document.createElement('div');
//         this.detailSongImage = document.createElement('img');
//         this.detailSongName = document.createElement('div');
//         this.detailArtistName = document.createElement('div');
//
//         this.controlArea = document.createElement('div');
//         this.controlAreaButtons = document.createElement('div');
//         this.controlRepeat = document.createElement('img');
//         this.controlRepeatOne = document.createElement('img');
//         this.controlShuffle = document.createElement('img');
//         this.controlPrev = document.createElement('img');
//         this.controlPlay = document.createElement('img');
//         this.controlPause = document.createElement('img');
//         this.controlNext = document.createElement('img');
//
//         this.progressArea = document.createElement('div');
//         this.progressBar = document.createElement('div');
//         this.progressBarConduct = document.createElement('div');
//         this.progressPlayedSeconds = document.createElement('div');
//         this.progressSongSeconds = document.createElement('div');
//
//         this.volumeArea = document.createElement('div');
//         this.volumeButton = document.createElement('img');
//         this.volumeRangeBar = document.createElement('input');
//
//         this.playerBody.className = 'player';
//         this.detailArea.className = 'detail-area';
//         this.detailSongImage.className = 'song-image';
//         this.detailSongName.className = 'song-name';
//         this.detailArtistName.className = 'song-artist';
//
//         this.controlArea.className = 'controls-area';
//         this.controlAreaButtons.className = 'buttons'
//         this.controlRepeat.className = 'icon repeat';
//         this.controlRepeatOne.className = 'icon repeat-one';
//         this.controlShuffle.className = 'icon shuffle';
//         this.controlPrev.className = 'icon prev';
//         this.controlPlay.className = 'icon play';
//         this.controlPause.className = 'icon pause';
//         this.controlNext.className = 'icon next';
//         //
//         // <div className="progress">
//         //     <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
//         //          aria-valuemax="100"></div>
//         // </div>
//
//         this.progressArea.className = 'progress-area';
//         this.progressBar.className = 'progress-bar';
//         this.progressBarConduct.className = 'progress-bar-conduct';
//         this.progressPlayedSeconds.className = 'progress-second';
//         this.progressSongSeconds.className = 'progress-second';
//
//         this.volumeArea.className = 'volume-area';
//         this.volumeButton.className = 'icon volume-button';
//         this.volumeRangeBar.className = 'volume-range-bar';
//         //
//         this.volumeRangeBar.setAttribute('type', 'range');
//         this.volumeRangeBar.setAttribute('min', '0');
//         this.volumeRangeBar.setAttribute('max', '100');
//         this.volumeRangeBar.setAttribute('step', '1');
//         this.volumeRangeBar.setAttribute('value', '100');
//         this.detailSongImage.setAttribute('src', 'https://i.scdn.co/image/21e1ebcd7ebd3b679d9d5084bba1e163638b103a');
//
//         this.controlRepeat.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/repeat.svg');
//         this.controlPrev.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/prev.svg');
//         this.controlPlay.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/play.svg');
//         this.controlPlay.setAttribute('id', 'play-pause');
//         this.controlNext.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/next.svg');
//         this.controlShuffle.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/shuffle.svg');
//         this.volumeButton.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/volume.svg');
//
//         this.progressBar.setAttribute('amplitude-main-song-played-progress', 'true');
//
//         this.detailSongName.textContent = 'The Best Of Keane (Deluxe Edition)';
//         this.detailArtistName.textContent = 'Keane';
//
//         this.progressPlayedSeconds.textContent = '00:00';
//         this.progressSongSeconds.textContent = '00:00';
//
//         this.shadow.appendChild(this.playerBody);
//         this.playerBody.appendChild(this.detailArea);
//         this.detailArea.appendChild(this.detailSongImage);
//         this.detailArea.appendChild(this.detailSongName);
//         this.detailArea.appendChild(this.detailArtistName);
//
//         this.playerBody.appendChild(this.controlArea);
//         this.controlArea.appendChild(this.controlAreaButtons);
//         this.controlAreaButtons.appendChild(this.controlRepeat);
//         this.controlAreaButtons.appendChild(this.controlRepeatOne);
//         this.controlAreaButtons.appendChild(this.controlPrev);
//         this.controlAreaButtons.appendChild(this.controlPlay);
//         this.controlAreaButtons.appendChild(this.controlPause);
//         this.controlAreaButtons.appendChild(this.controlNext);
//         this.controlAreaButtons.appendChild(this.controlShuffle);
//
//         this.controlArea.appendChild(this.progressArea);
//         this.progressArea.appendChild(this.progressPlayedSeconds);
//         this.progressArea.appendChild(this.progressBar);
//         this.progressBar.appendChild(this.progressBarConduct);
//         this.progressArea.appendChild(this.progressSongSeconds);
//
//         this.playerBody.appendChild(this.volumeArea);
//         this.volumeArea.appendChild(this.volumeButton);
//         this.volumeArea.appendChild(this.volumeRangeBar);
//     }
//
//     playerConfigInit() {
//         this.amplitude.init({
//             "volume": 35,
//             "songs": [
//                 // {
//                 //     "name": "Risin' High (feat Raashan Ahmad)",
//                 //     "artist": "Ancient Astronauts",
//                 //     "album": "We Are to Answer",
//                 //     "url": "https://p.scdn.co/mp3-preview/641fd877ee0f42f3713d1649e20a9734cc64b8f9",
//                 //     "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
//                 // },
//                 // {
//                 //     "name": "Risin' High (feat Raashan Ahmad)",
//                 //     "artist": "Ancient Astronauts",
//                 //     "album": "We Are to Answer",
//                 //     "url": "https://p.scdn.co/mp3-preview/e001676375ea2b4807cee2f98b51f2f3fe0d109b",
//                 //     "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
//                 // }
//             ],
//             waveforms: {
//                 sample_rate: 50
//             }
//         });
//     }
//
//     domEventInit() {
//         this.controlPlay.addEventListener('click', () => {
//
//             const newSong = {
//                 "name": "Risin' High (feat Raashan Ahmad)",
//                 "artist": "Ancient Astronauts",
//                 "album": "We Are to Answer",
//                 "url": "https://p.scdn.co/mp3-preview/641fd877ee0f42f3713d1649e20a9734cc64b8f9",
//                 "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
//                 "callbacks": {
//                     'time_update': function () {
//                         let songPlayedPercentage = this.amplitude.getSongPlayedPercentage();
//
//                         console.log('mmmmmmmmmmmmmmmmmmmm');
//                         console.log(songPlayedPercentage);
//                         /*
//                             SET YOUR ELEMENT HERE PERCENT WISE
//                         */
//                     }
//                 },
//                 "time_callbacks": {
//                     1: function () {
//                         console.log("1 second into the song")
//                     },
//                 }
//             };
//
//             this.amplitude.playNow(newSong);
//             // this.amplitude.play();
//         }, false);
//
//         this.controlNext.addEventListener('click', () => {
//             this.amplitude.next();
//         }, false);
//
//         this.progressBar.addEventListener('click', function (event) {
//             let offset = this.getBoundingClientRect();
//             let x = event.pageX - offset.left;
//
//             console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb');
//             console.log(event.pageX);
//             console.log(offset);
//             console.log(x);
//             console.log(offset.width - x);
//
//
//             // this.amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
//         }, false);
//
//         this.controlNext.addEventListener('click', () => {
//             this.amplitude.next();
//         }, false);
//
//
//         this.volumeRangeBar.addEventListener('input', (event) => {
//             this.amplitude.setVolume(event.target.value);
//             console.log(this.amplitude.getSongPlayedSeconds());
//             console.log(this.amplitude.getSongDuration());
//         }, false);
//     }
// }
//
// customElements.define('player-container', Player);
//
// export {
//     Player
// }