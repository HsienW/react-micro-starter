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
        
        .controls-area>.buttons>.icon {
            width: 20px;
            height: 20px;
            cursor: pointer;
            padding: 0 6px;
            filter: invert(24%) sepia(0%) saturate(2973%) hue-rotate(316deg) brightness(91%) contrast(84%);
        }
        
        .controls-area>.buttons>.icon:hover {
            color: #f33336;
        }
        
        .controls-area>.buttons>.icon.play,
        .controls-area>.buttons>.icon.pause {
            color: #f44336;
            font-size: 55px;
            margin-left: 5px;
            margin-right: 5px
        }
        
        .controls-area>.buttons>.icon.pause,
        .controls-area>.buttons>.icon.repeat-one {
            display: none;
        }
        
        .controls-area>.buttons>.repeat {
            width: 18px;
            height: 18px;
        }
        
        .controls-area>.buttons>.icon.play {
            width: 28px;
            height: 28px;
        }
        
        .progress {
           cursor: pointer;
            width: 100%;
            height: 30%;
            background-color: green;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
        
        .progress>.buffer {
            height: 4px;
            width: 90%;
            background-color: rgba(0, 0, 0, 0.45);
        }
        
        .progress>.conduct {
            height: 4px;
            top: 0;
            width: 10%;
            background-color: red;
        }
        
        .volume-area {
            width: 20%;
            height: 100%;
            min-width: 300px;
            background-color: yellow;
            padding: 0 10px;
        }
        
        .player input.volume {
            display: none;
            width: 50px;
        }
    `
        this.shadow.appendChild(style);
    }

//
// <div id="amplitude-player">
//
//     <!-- Left Side Player -->
// <div id="amplitude-left">
// <img data-amplitude-song-info="cover_art_url"/>
// <div id="player-left-bottom">
// <div id="time-container">
// <span className="current-time">
// <span className="amplitude-current-minutes" ></span>:<span className="amplitude-current-seconds"></span>
// </span>
// <div id="progress-container">
// <input type="range" className="amplitude-song-slider"/>
// <progress id="song-played-progress" className="amplitude-song-played-progress"></progress>
// <progress id="song-buffered-progress" className="amplitude-buffered-progress" value="0"></progress>
// </div>
// <span className="duration">
// <span className="amplitude-duration-minutes"></span>:<span className="amplitude-duration-seconds"></span>
// </span>
// </div>
//
// <div id="control-container">
// <div id="repeat-container">
// <div className="amplitude-repeat" id="repeat"></div>
// <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
// </div>
//
// <div id="central-control-container">
// <div id="central-controls">
// <div className="amplitude-prev" id="previous"></div>
// <div className="amplitude-play-pause" id="play-pause"></div>
// <div className="amplitude-next" id="next"></div>
// </div>
// </div>
//
// <div id="volume-container">
// <div className="volume-controls">
// <div className="amplitude-mute amplitude-not-muted"></div>
// <input type="range" className="amplitude-volume-slider"/>
// <div className="ms-range-fix"></div>
// </div>
// <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle-right"></div>
// </div>
// </div>
//
// <div id="meta-container">
// <span data-amplitude-song-info="name" className="song-name"></span>
//
// <div className="song-artist-album">
// <span data-amplitude-song-info="artist"></span>
// <span data-amplitude-song-info="album"></span>
// </div>
// </div>
// </div>
// </div>

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
        this.controlRepeatOne = document.createElement('img');
        this.controlShuffle = document.createElement('img');
        this.controlPrev = document.createElement('img');
        this.controlPlay = document.createElement('img');
        this.controlPause = document.createElement('img');
        this.controlNext = document.createElement('img');

        this.progress = document.createElement('div');
        this.progressBuffer = document.createElement('div');
        this.progressConduct = document.createElement('div');

        this.volumeArea = document.createElement('div');

        this.playerBody.className = 'player';
        this.detailArea.className = 'detail-area';
        this.detailSongImage.className = 'song-image';
        this.detailSongName.className = 'song-name';
        this.detailArtistName.className = 'song-artist';

        this.controlArea.className = 'controls-area';
        this.controlAreaButtons.className = 'buttons'

        this.progress.className = 'progress';
        this.progressBuffer.className = 'buffer';
        this.progressConduct.className = 'conduct';

        this.volumeArea.className = 'volume-area';


        this.controlRepeat.className = 'icon repeat';
        this.controlRepeatOne.className = 'icon repeat-one';
        this.controlShuffle.className = 'icon shuffle';
        this.controlPrev.className = 'icon prev';
        this.controlPlay.className = 'icon play';
        this.controlPause.className = 'icon pause';
        this.controlNext.className = 'icon next';
        // this.controlVolume.className = 'icon volume material-icons';
        // this.controlVolumeRange.className = 'volume';
        //
        // this.controlVolumeRange.setAttribute('type', 'range');
        // this.controlVolumeRange.setAttribute('min', '0');
        // this.controlVolumeRange.setAttribute('max', '100');
        // this.controlVolumeRange.setAttribute('step', '1');
        // this.controlVolumeRange.setAttribute('value', '100');

        this.detailSongImage.setAttribute('src', 'https://i.scdn.co/image/21e1ebcd7ebd3b679d9d5084bba1e163638b103a');
        this.detailSongName.textContent = 'The Best Of Keane (Deluxe Edition)';
        this.detailArtistName.textContent = 'Keane';

        this.controlRepeat.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/repeat.svg');
        this.controlPrev.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/prev.svg');

        this.controlPlay.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/play.svg');
        this.controlPlay.setAttribute('id', 'play-pause');

        this.controlNext.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/next.svg');
        this.controlShuffle.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/shuffle.svg');

        this.shadow.appendChild(this.playerBody);
        this.playerBody.appendChild(this.detailArea);
        this.detailArea.appendChild(this.detailSongImage);
        this.detailArea.appendChild(this.detailSongName);
        this.detailArea.appendChild(this.detailArtistName);

        this.playerBody.appendChild(this.controlArea);
        this.controlArea.appendChild(this.controlAreaButtons);
        this.controlAreaButtons.appendChild(this.controlRepeat);
        this.controlAreaButtons.appendChild(this.controlRepeatOne);
        this.controlAreaButtons.appendChild(this.controlPrev);
        this.controlAreaButtons.appendChild(this.controlPlay);
        this.controlAreaButtons.appendChild(this.controlPause);
        this.controlAreaButtons.appendChild(this.controlNext);
        this.controlAreaButtons.appendChild(this.controlShuffle);

        this.controlArea.appendChild(this.progress);
        this.progress.appendChild(this.progressBuffer);
        this.progress.appendChild(this.progressConduct);

        this.playerBody.appendChild(this.volumeArea);


        // this.playerBody.appendChild(this.controlArea);

        // this.progressArea.appendChild(this.progressBuffer);
        // this.progressArea.appendChild(this.progressConduct);
    }

    playerConfigInit() {
        this.amplitude.init({
            "songs": [
                // {
                //     "name": "Risin' High (feat Raashan Ahmad)",
                //     "artist": "Ancient Astronauts",
                //     "album": "We Are to Answer",
                //     "url": "https://p.scdn.co/mp3-preview/641fd877ee0f42f3713d1649e20a9734cc64b8f9",
                //     "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
                // },
                // {
                //     "name": "Risin' High (feat Raashan Ahmad)",
                //     "artist": "Ancient Astronauts",
                //     "album": "We Are to Answer",
                //     "url": "https://p.scdn.co/mp3-preview/e001676375ea2b4807cee2f98b51f2f3fe0d109b",
                //     "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
                // }
            ],
            waveforms: {
                sample_rate: 50
            }
        });
    }

    domEventInit() {
        this.controlPlay.addEventListener('click', () => {

            const newSong = {
                "name": "Risin' High (feat Raashan Ahmad)",
                "artist": "Ancient Astronauts",
                "album": "We Are to Answer",
                "url": "https://p.scdn.co/mp3-preview/641fd877ee0f42f3713d1649e20a9734cc64b8f9",
                "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
            };

            this.amplitude.playNow(newSong)
            // this.amplitude.play();
        }, false);

        this.controlNext.addEventListener('click', () => {
            this.amplitude.next();
        }, false);
    }
}

customElements.define('player-container', Player);

export {
    Player
}
