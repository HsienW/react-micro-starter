class Player extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.domStyling();
        this.domRender();
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
            height: 60%;
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
            height: 40%;
            background-color: green;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .progress>.buffer {
            height: 4px;
            width: 90%;
            background-color: grey;
        }
        
        .progress>.conduct {
            height: 4px;
            position: absolute;
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

    domRender() {
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

    domEventInit() {
        this.sideBarUl.addEventListener('click', this.sideBarItemClick.bind(this), false);
    }
}

customElements.define('player-container', Player);

export {
    Player
}
