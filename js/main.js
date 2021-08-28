'use strict'

const SCREEN_W = 704;    // tile * 20 =640
const SCREEN_H = 576;    // tile * 18 =576
const FPS = 1000/60;

let can = document.getElementById('can');
can.width = SCREEN_W;  //キャンバスの横幅
can.height = SCREEN_H; //キャンバスの横幅
let ctx = can.getContext('2d');

//フレームレート
let frameCount =0;
let startTime;








//画像イメージを綺麗に表示
ctx.mozimageSmoothingEnabled =false;
ctx.msimageSmoothingEnabled = false;
ctx.webkitimagesSmoothingEnabled =false;
ctx.imageSmoothingEnabled = false;

//乱数用
function rand(min,max){
	return Math.floor( Math.random()*(max-min+1) )+min;
}

//マップチップのImageオブジェクトを作る
let mapchip = new Image();
mapchip.src = 'img/mapchip.png';
 
//マップの作成（さくせい）
let map = [
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,5,6,4,9,10,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,9,10,4,4,4,5,6,4,4,4],
[4,4,4,5,6,4,4,4,4,4,4,4,4,4,4,4,4,9,10,4,4,4],
[4,4,4,9,10,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,2,1,2,1,2,2,2,2,1,1,2,2,1,1,2,1,2,1,1,1,2],
[1,1,2,1,3,1,1,2,2,2,1,3,3,3,1,3,1,1,3,1,1,2],
[3,3,2,1,2,2,1,3,2,1,3,3,1,1,2,2,1,2,2,1,2,3]
];



// メインのsprite
let chara = new Image();
chara.src = 'img/ry2.png';
let chara_num = 4;
let hp = 6;

function drawSprite( snum, x , y){
  let sx = (snum % 9) * 32;
	let sy = 0;
  let sw = 32;
	let sh = 32;
  let px = x;
	let py = 384;
	ctx.drawImage( chara, sx, sy, sw, sh,  px, py, 64, 64);
	if(x<SCREEN_W || x>=SCREEN_W )return;
	
}

class Player{
	constructor(x ,y){
		this.x = (SCREEN_W/2) - 4; //-32
		this.y = 384;
		this.w =64;
		this.h =64;
		this.vx=0;
		this.anime=0;  //正面が０　左右１
		this.dir=0; //左１　右０
		this.acount=0;
		
	}


	update(){

if(keyb.Left){
	this.anime=1;
	this.dir=1;	
	let map_x =  ~~((this.x/32)-1.2);
	let map_y = this.y/32;
	if(map[map_y][map_x]==4){
		if(this.vx > -2)this.vx--;
		this.x  += this.vx 
	}
}else if(keyb.Right){
	this.anime=1;
	this.dir=0;
	let map_x =  ~~((this.x/32)+1.3);
	let map_y = this.y/32;
	if(map[map_y][map_x]==4){
		if(this.vx < 2)this.vx++;
			this.x  += this.vx 
	}
}else{
	this.anime=0;
}

this.acount++;

if(this.anime == 0){
		chara_num = 4;
}else{
	if(this.dir == 0){
		chara_num = 6 + ( Math.floor(this.acount/12) %3 );
	}else{
		chara_num = 2 - ( ~~(this.acount/12) %3 );
	}
}




// お金との当たり判定
for(let i=0; i<money.length; i++){
	if(!money[i].kill){
		if( !gameOver && checkHit(this.x, this.y, this.w, this.h, money[i].x, money[i].y, money[i].w, money[i].h)){
			money[i].kill = true;
			console.log(money[i].kill)	
		  sum += money[i].score;
			//効果音
			sound.currentTime=0;
			sound.play();
			break;
		}
	}
}

// アイスとの当たり判定
for(let i=0; i<ice_cream.length; i++){
	if(!ice_cream[i].kill){
		if( !gameOver && checkHit(this.x, this.y, this.w, this.h, ice_cream[i].x, ice_cream[i].y, ice_cream[i].w, ice_cream[i].h)){
			ice_cream[i].kill = true;
			console.log(ice_cream[i].kill)
		  hp += ice_cream[i].recover;
			//効果音
			music.currentTime=0;
			music.play();  // 再生

			break;
		}
	}
}
	

		
} //update()終了
  draw(){
		drawSprite(chara_num, this.x , this.y);
	}



}
let player = new Player();


// //キーボード
let keyb={};

document.onkeydown=(e)=>{
  if(e.keyCode ==37 )keyb.Left =true;
  if(e.keyCode ==39 )keyb.Right =true;
	if(e.keyCode ==32 )keyb.Space =true;
if(gameOver && keyb.Space){
	
	sum =0;
	hp = 6;
	startTime =performance.now();
	player =new Player();
	for(let i=0; i<MONEY_MAX; i++) money[i].y=-36;
	for(let i=0; i<MONEY_MAX; i++) money[i].r=rand(0, SCREEN_W-64);
	for(let i=0; i<ICECREAM_MAX; i++) ice_cream[i].y=-36;


	gameOver = false;

}




}
document.onkeyup=(e)=>{
	if(e.keyCode ==37 )keyb.Left =false;
	if(e.keyCode ==39 )keyb.Right =false;
	if(e.keyCode ==32 )keyb.Space =false;
}



//お金のスプライトイメージ
let sprite_Mimg= new Image();
sprite_Mimg.src = 'img/1000yen.png';
sprite_Mimg.width=32;
sprite_Mimg.height=18;

class Money{
	constructor(){
		this.x = rand(0, (SCREEN_W-64) )<<8;
		this.y = -36;  //this.y= 0<<8;
		this.vx = 0;
		this.vy = rand(30,350);
		this.w = 64;
		this.h =36;
		this.kill = false;
		this.score =1000;
		this.damage = 1;
	}
	draw(){
		ctx.drawImage( sprite_Mimg, 0, 6, sprite_Mimg.width, sprite_Mimg.height,    this.x>>8,this.y>>8,this.w,this.h );
	}
	//マイフレーム
	update(){
if(this.kill){
	this.y=0;
	this.x=rand(0,SCREEN_W-this.w)<<8;
	this.kill = false;
}

		this.x += this.vx;
		this.y +=this.vy;
		if(this.y> (SCREEN_H-164)<<8){
			hp -= this.damage;
			if(hp<=0){
				gameOver=true;
				
				
			}
			this.y=-36;
			this.x= rand(0, SCREEN_W-this.w)<<8;
			this.vy = rand(100, 350);
		}
		
		
			
		


	}
}
const MONEY_MAX =8;
let money = [];
for(let i=0; i<MONEY_MAX; i++) money[i] = new Money();
let sum = 0;




//当たり判定
function checkHit( x1, y1, w1, h1, x2, y2, w2, h2 ){

	let left1 = x1;  
	let right1 = left1 + w1;
	let top1 = y1;
	let bottom1 = top1 + h1;

	let left2 = x2>>8;
	let right2 = left2 + w2;
	let top2 = y2>>8;
	let bottom2 = top2 + h2;
	
return(left1 <= right2 &&  right1 >= left2 && top1 <= bottom2 && bottom1 >= top2 );
}








//アイスのスプライトイメージ
let ice = new Image();
ice.src = 'img/ice_cream.png';


class IceCream{
	constructor(){
		this.x = rand(0, (SCREEN_W-64) )<<8;
		this.y = -36;  //this.y= 0<<8;
		this.vx = 0;
		this.vy = rand(30,350);
		this.w = 46;
		this.h =64;
		this.recover = 1;
		this.kill = false;
		
	
	}
	draw(){
		ctx.drawImage( ice, 6, 0, 23, 32,    this.x>>8, this.y>>8, this.w, this.h );
	}
	//マイフレーム
	update(){
if(this.kill){
	this.y=0;
	this.x=rand(0,SCREEN_W-this.w)<<8;
	this.kill = false;
}

		this.x += this.vx;
		this.y +=this.vy;
		if(this.y>(SCREEN_H-192)<<8){
			this.y=-36;
			this.x=rand(0,SCREEN_W-this.w)<<8;
		}
		
	}
}

const ICECREAM_MAX =2;
let ice_cream = [];
for(let i=0; i<ICECREAM_MAX; i++) ice_cream[i] = new IceCream();


//ライフのスプライトイメージ
let life = new Image();
life.src = 'img/life.png';




//ゲーム情報の表示
let gameOver = false;

let gs = "GAME OVER";
let gw = ctx.measureText(gs).width;
let gx =SCREEN_W/2 - gw;
let gy =SCREEN_H/2 - 20;

let res = "Push ' SPACE ' key to restart"; 
let rew = ctx.measureText(res).width;
let rex =SCREEN_W/2 - rew;
let rey =SCREEN_H/2 - 20+25;











window.onload =function(){
	startTime =performance.now();
	}

setInterval(mainLoop,1000/60);



function mainLoop(){
	
		let nowTime = performance.now();
let nowFrame = ~~((nowTime-startTime)/1000); 
	
//キャンバス
// ctx.fillStyle='skyblue';
// ctx.fillRect(0, 0,SCREEN_W, SCREEN_H);



//マップ表示
for (let y=0; y<map.length; y++) {
	for (let x=0; x<map[y].length; x++) {
		if ( map[y][x] === 0 ) ctx.drawImage( mapchip, 0, 0, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 1 ) ctx.drawImage( mapchip, 32, 0, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 2 ) ctx.drawImage( mapchip, 64, 0, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 3 ) ctx.drawImage( mapchip, 96, 0, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 4 ) ctx.drawImage( mapchip, 0, 32, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 5 ) ctx.drawImage( mapchip, 32, 32, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 6 ) ctx.drawImage( mapchip, 64, 32, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 7 ) ctx.drawImage( mapchip, 96, 32, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 8 ) ctx.drawImage( mapchip, 0, 64, 32, 32,   32*x, 32*y, 32, 32 );
		if ( map[y][x] === 9 ) ctx.drawImage( mapchip, 32, 64, 32, 32,  32*x, 32*y, 32, 32 );
		if ( map[y][x] === 10 ) ctx.drawImage( mapchip, 64, 64, 32, 32, 32*x, 32*y, 32, 32 );
		if ( map[y][x] === 11 ) ctx.drawImage( mapchip, 96, 64, 32, 32, 32*x, 32*y, 32, 32 );
	}
}

//お金表示
if(!gameOver){
for(let i=0; i<MONEY_MAX; i++) money[i].update();
for(let i=0; i<MONEY_MAX; i++) money[i].draw();
}

//キャラ表示
if(!gameOver){
player.update();
player.draw();
}


//キャンバス
ctx.fillStyle='rgb(0,0,0,0.2)';
ctx.fillRect(0, 0, 250, 64);
//文字の設定
ctx.fillStyle = 'white';
ctx.font = "24px 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'ＭＳ ゴシック', 'MS Gothic', sans-serif";
//文字の表示
ctx.fillText( 'TIME：' + nowFrame + "秒", 10, 25 );
ctx.fillText( 'TOTAL：'+ sum + '円', 10, 50 );
ctx.fillText( '× ' + hp, 630, 28 );
if(gameOver){
ctx.fillText( gs, gx, gy);
ctx.fillText( res, rex, rey);
}
ctx.drawImage(life,0,0,32,32, 590, 0, 32,32);

if(!gameOver){
for(let i=0; i<ICECREAM_MAX; i++) ice_cream[i].update();
for(let i=0; i<ICECREAM_MAX; i++) ice_cream[i].draw();
}



}



// let sound = document.getElementById('MoneySound');
let sound = new Audio('sound/お金を落とす1.mp3');
let music = new Audio('sound/回復魔法4.mp3');

let bgm = new Audio('sound/スズメの鳴き声1.mp3');
