import amplitude from 'amplitudejs';

class Player extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.amplitude = amplitude;
        this.domStyling();
        this.domRender();
        this.playerConfigInit();
        this.domEventInit();
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = `
        .player {
            width: 100%;
            height: 100%;
            background-color: red;
            display: flex;
            justify-content: space-between;
        }
        
        .detail-area {
            width: 20%;
            height: 100%;
            min-width: 300px;
            background-color: green;
            padding: 0 10px;
            display: grid;
            grid-template-columns: 64px auto;
            grid-template-rows: 20px 20px 20px 20px 20px;
            grid-template-areas:
                'image song-name'
                'image song-name'
                'image song-artist'
                'image song-artist'
                'image song-artist'
        }
        
        .detail-area>.song-image {
            grid-area: image;
            grid-row-start: 2;
            width: 64px;
            height: 64px;
            background-color: blue;
        }
        
        .detail-area>.song-name {
            grid-area: song-name;
            grid-row-start: 3;
            width: calc(100% - 64px);
            font-size: 16px;
            font-weight: 600;
            padding: 0 10px;
            color: rgba(0, 0, 0, 0.85);
        }
        
        .detail-area>.song-artist {
            grid-area: song-artist;
            grid-row-start: 4;
            width: calc(100% - 64px);
            font-size: 14px;
            padding: 0 10px;
            color: (0, 0, 0, 0.45);
        }
        
        .detail-area>div {
            overflow : hidden;
            text-overflow : ellipsis;
            white-space : nowrap;
        }
        
        .controls-area {
            width: 30%;
            height: 100%;
            min-width: 400px;
            background-color: blue;
            padding: 0 10px;
        }
        
        .controls-area>.buttons {
            width: 100%;
            height: 70%;
            background-color: gray;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .icon {
            width: 20px;
            height: 20px;
            cursor: pointer;
            padding: 0 6px;
            filter: invert(25%) sepia(4%) saturate(9%) hue-rotate(13deg) brightness(98%) contrast(92%);
        }
        
        .controls-area>.buttons>.icon:hover {
            color: #f33336;
        }
        
        .controls-area>.buttons>.repeat {
            width: 18px;
            height: 18px;
        }
        
         .controls-area>.buttons>.icon.play,
         .controls-area>.buttons>.icon.pause {
            width: 28px;
            height: 28px;
        }
        
        .controls-area>.buttons>.icon-active {
            filter: invert(17%) sepia(95%) saturate(1414%) hue-rotate(197deg) brightness(101%) contrast(113%);
        }
        
        .progress-area {
            width: 100%;
            height: 30%;
            background-color: green;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .progress-area>.progress-bar {
            cursor: pointer;
            height: 4px;
            width: 100%;
        }
        
         .progress-area>input[type="range"] {
            -webkit-appearance: none;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 5px;
            background-image: linear-gradient(#434343, #434343);
            background-size: 0% 100%;
            background-repeat: no-repeat;
        }
        
        .progress-area>input[type="range"]::-webkit-slider-thumb {
           -webkit-appearance: none;
            height: 4px;
            width: 4px;
            cursor: ew-resize;
            box-shadow: 0 0 2px 0 #555;
            transition: background 0.1s ease-in-out;
        }
        
        .progress-area>input[type=range]::-webkit-slider-runnable-track  {
            -webkit-appearance: none;
            box-shadow: none;
            border: none;
            background: transparent;
        }
        
        .progress-area>.progress-second {
            width: 40px;
            color: #262626;
            font-size: 12px;
            background-color: yellow;
            text-align: center;
        }
        
        .volume-area {
            width: 20%;
            height: 100%;
            min-width: 300px;
            background-color: yellow;
            padding: 0 10px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        
        .volume-area>.volume-range-bar {
            height: 4px;
            width: 30%;
            background-color: blue;
            border: 0;
        }
        
        .volume-area>.volume-button {
        }
        
        .volume-area>input[type="range"] {
            -webkit-appearance: none;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 5px;
            background-image: linear-gradient(#ff4500, #ff4500);
            background-size: 50% 100%;
            background-repeat: no-repeat;
        }
        
        .volume-area>input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 14px;
            width: 14px;
            border-radius: 50%;
            background: #ff4500;
            cursor: ew-resize;
            box-shadow: 0 0 2px 0 #555;
            transition: background .3s ease-in-out;
        }
        
        .volume-area>input[type=range]::-webkit-slider-runnable-track  {
            -webkit-appearance: none;
            box-shadow: none;
            border: none;
            background: transparent;
        }
    }
    `
        this.shadow.appendChild(style);
    }

    domRender() {
        console.log('看看看看看看看看看看看看看看看看看看看看看');
        console.log(this.amplitude);

        this.playerBody = document.createElement('div');
        this.detailArea = document.createElement('div');
        this.detailSongImage = document.createElement('img');
        this.detailSongName = document.createElement('div');
        this.detailArtistName = document.createElement('div');

        this.controlArea = document.createElement('div');
        this.controlAreaButtons = document.createElement('div');
        this.controlRepeat = document.createElement('img');
        this.controlShuffle = document.createElement('img');
        this.controlPrev = document.createElement('img');
        this.controlPlay = document.createElement('img');
        this.controlPause = document.createElement('img');
        this.controlNext = document.createElement('img');

        this.progressArea = document.createElement('div');
        this.progressBar = document.createElement('input');
        this.progressPlayedSeconds = document.createElement('div');
        this.progressSongSeconds = document.createElement('div');

        this.volumeArea = document.createElement('div');
        this.volumeButton = document.createElement('img');
        this.volumeRangeBar = document.createElement('input');

        this.playerBody.className = 'player';
        this.detailArea.className = 'detail-area';
        this.detailSongImage.className = 'song-image';
        this.detailSongName.className = 'song-name';
        this.detailArtistName.className = 'song-artist';

        this.controlArea.className = 'controls-area';
        this.controlAreaButtons.className = 'buttons'
        this.controlRepeat.className = 'icon repeat';
        this.controlShuffle.className = 'icon shuffle';
        this.controlPrev.className = 'icon prev';
        this.controlPlay.className = 'icon play';
        this.controlPause.className = 'icon pause';
        this.controlNext.className = 'icon next';

        this.progressArea.className = 'progress-area';
        this.progressBar.className = 'progress-bar';
        this.progressPlayedSeconds.className = 'progress-second';
        this.progressSongSeconds.className = 'progress-second';

        this.volumeArea.className = 'volume-area';
        this.volumeButton.className = 'icon volume-button';
        this.volumeRangeBar.className = 'volume-range-bar';

        this.detailSongImage.setAttribute('src', 'https://i.scdn.co/image/21e1ebcd7ebd3b679d9d5084bba1e163638b103a');

        this.progressBar.setAttribute('amplitude-main-song-played-progress', 'true');
        this.progressBar.setAttribute('type', 'range');
        this.progressBar.setAttribute('min', '0');
        this.progressBar.setAttribute('max', '100');
        this.progressBar.setAttribute('step', '1');
        this.progressBar.setAttribute('value', '0');

        this.volumeButton.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/volume.svg');
        this.volumeRangeBar.setAttribute('type', 'range');
        this.volumeRangeBar.setAttribute('min', '0');
        this.volumeRangeBar.setAttribute('max', '100');
        this.volumeRangeBar.setAttribute('step', '1');
        this.volumeRangeBar.setAttribute('value', '50');

        this.controlRepeat.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/repeat.svg');
        this.controlPrev.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/prev.svg');
        this.controlPlay.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/play.svg');
        this.controlPlay.setAttribute('id', 'play-pause');
        this.controlPause.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/pause.svg');
        this.controlPause.setAttribute('style', 'display: none');
        this.controlNext.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/next.svg');
        this.controlShuffle.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/shuffle.svg');

        this.detailSongName.textContent = 'The Best Of Keane (Deluxe Edition)';
        this.detailArtistName.textContent = 'Keane';

        this.progressPlayedSeconds.textContent = '00:00';
        this.progressSongSeconds.textContent = '00:00';

        this.shadow.appendChild(this.playerBody);
        this.playerBody.appendChild(this.detailArea);
        this.detailArea.appendChild(this.detailSongImage);
        this.detailArea.appendChild(this.detailSongName);
        this.detailArea.appendChild(this.detailArtistName);

        this.playerBody.appendChild(this.controlArea);
        this.controlArea.appendChild(this.controlAreaButtons);
        this.controlAreaButtons.appendChild(this.controlRepeat);
        this.controlAreaButtons.appendChild(this.controlPrev);
        this.controlAreaButtons.appendChild(this.controlPlay);
        this.controlAreaButtons.appendChild(this.controlPause);
        this.controlAreaButtons.appendChild(this.controlNext);
        this.controlAreaButtons.appendChild(this.controlShuffle);

        this.controlArea.appendChild(this.progressArea);
        this.progressArea.appendChild(this.progressPlayedSeconds);
        this.progressArea.appendChild(this.progressBar);
        this.progressArea.appendChild(this.progressSongSeconds);

        this.playerBody.appendChild(this.volumeArea);
        this.volumeArea.appendChild(this.volumeButton);
        this.volumeArea.appendChild(this.volumeRangeBar);
    }

    playerConfigInit() {
        this.amplitude.init({
            songs: [
                {
                    "name": "Risin' High (feat Raashan Ahmad)",
                    "artist": "Ancient Astronauts",
                    "album": "We Are to Answer",
                    "url": "https://p.scdn.co/mp3-preview/641fd877ee0f42f3713d1649e20a9734cc64b8f9",
                    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
                },
                {
                    "name": "Money Changes Everything",
                    "artist": "Cyndi Lauper",
                    "album": "She's So Unusual",
                    "url": "https://p.scdn.co/mp3-preview/01bb2a6c9a89c05a4300aea427241b1719a26b06",
                    "cover_art_url": "https://i.scdn.co/image/54b3222c8aaa77890d1ac37b3aaaa1fc9ba630ae"
                },
                {
                    "name": "Pyttefolk och tigerstekar i hängmattan",
                    "artist": "Bronsåldersstadens kollaps",
                    "album": "Hot Fuss",
                    "url": "https://p.scdn.co/mp3-preview/7a785904a33e34b0b2bd382c82fca16be7060c36",
                    "cover_art_url": "https://i.scdn.co/image/d49268a8fc0768084f4750cf1647709e89"
                },
                {
                    "name": "Run Away With Me",
                    "artist": "Carly Rae Jepsen",
                    "album": "Emotion (Deluxe)",
                    "url": "https://p.scdn.co/mp3-preview/3e05f5ed147ca075c7ae77c01f2cc0e14cfad78d?cid=774b29d4f13844c495f206cafdad9c86",
                    "cover_art_url": "https://i.scdn.co/image/cc0797a99e21733caf0f4e23685a173033fdaa49"
                }
            ],
            callbacks: {
                timeupdate: () => {
                    const initTime = 0;
                    const songTime = this.amplitude.getSongDuration();
                    const playedTime = this.amplitude.getSongPlayedSeconds();
                    this.updateProgressBarTime(playedTime, songTime);
                    this.updateInputBarDisplay(this.progressBar, initTime, songTime, playedTime);
                },
                stop: () => {
                    console.log("Audio has been stopped.")
                    console.log(this.amplitude.getSongPlayedSeconds());
                }
            }
        });

    }

    domEventInit() {
        this.controlRepeat.addEventListener('click', () => {
            console.log("單曲循環");
            this.controlRepeat.classList.add('icon-active');
            this.amplitude.setRepeatSong();
            // 開啟單曲循環後, 停止隨機播放
            this.amplitude.setShuffle(false);
        }, false);

        this.controlPrev.addEventListener('click', () => {
            this.amplitude.prev();
        }, false);

        this.controlPlay.addEventListener('click', () => {
            this.controlPlay.setAttribute('style', 'display: none');
            this.controlPause.removeAttribute('style');
            this.amplitude.play();
        }, false);

        this.controlPause.addEventListener('click', () => {
            this.controlPause.setAttribute('style', 'display: none');
            this.controlPlay.removeAttribute('style');
            this.amplitude.pause();
        }, false);

        this.controlNext.addEventListener('click', () => {
            this.amplitude.next();
        }, false);

        this.controlShuffle.addEventListener('click', () => {
            console.log("隨機播放");
            this.amplitude.setShuffle(true);
            // 開啟隨機播放後, 停止單曲循環
            this.amplitude.setRepeatSong(null);
        }, false);

        this.progressBar.addEventListener('input', (event) => {
            const {target} = event;
            const playedPercentage = (target.value / target.max) * 100;
            this.amplitude.setSongPlayedPercentage(playedPercentage)
            this.updateInputBarDisplay(this.progressBar, target.min, target.max, target.value);
        }, false);

        this.volumeRangeBar.addEventListener('input', (event) => {
            const {target} = event;
            this.amplitude.setVolume(event.target.value);
            this.updateInputBarDisplay(this.volumeRangeBar, target.min, target.max, target.value);
        }, false);
    }

    updateInputBarDisplay(target, min, max, value) {
        target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'
    }

    updateProgressBarTime(playedTime, totalTime) {
        this.progressPlayedSeconds.textContent = new Date(playedTime * 1000).toISOString().substr(14, 5);
        this.progressSongSeconds.textContent = new Date(totalTime * 1000).toISOString().substr(14, 5);
    }
}

customElements.define('player-container', Player);

export {
    Player
}
