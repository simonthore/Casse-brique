// CHARGEMENT DES SONS 

const WALL_HIT = new Audio( 'sound/sounds_wall.mp3');
const PADDLE_HIT = new Audio('sound/sounds_paddle_hit.mp3');
const BRICK_HIT = new Audio('sound/sounds_brick_hit.mp3');
const WIN = new Audio(  'sound/sounds_win.mp3');
const LIFE_LOST = new Audio(  'sound/sounds_life_lost.mp3');


// CHARGEMENT DES IMAGES 
const LEVEL_IMG = new Image();
LEVEL_IMG.src = 'img/level.png'
const LIFE_IMG = new Image();
LIFE_IMG.src = 'img/life.png'
const SCORE_IMG = new Image();
SCORE_IMG.src = 'img/score.png'
