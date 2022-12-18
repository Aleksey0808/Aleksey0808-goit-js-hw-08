import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(evt.seconds)
    );
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (Number(currentTime)) {
  player.setCurrentTime(Number(currentTime)).catch(function (error) {
    console.error(error);
  });
}
