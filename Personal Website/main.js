const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const input = document.getElementById('input');
const para = document.getElementById('para');


class Symbol{
    constructor(x,y,fontSize,canvasHeight){ 
        this.characters = 'チママヤザジズソャガドギヂビビ 0123456'; 
        this.x = x; 
        this.y = y; 
        this.fontSize = fontSize; 
        this.text = ''; 
        this.canvasHeight = canvasHeight; 
    }
    draw(context){ 
        this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
        context.fillStyle = 'green';
        context.fillText(this.text, this.x * this.fontSize, this.y *this.fontSize);
        if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98){ //this defines if the symbols moving along the y-axis hits the bottom of canvas height 
            this.y = 0;
        } else{
            this.y += 1;
        }
    }
    random(){
        Math.floor(((Math.random() * 255)+1) ,((Math.random() *255)+1), ((Math.random()*255)+1));
    }
}


class Effects{
    constructor(canvasWidth , canvasHeight){
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 15;
    this.columns = this.canvasWidth/this.fontSize;
    this.symbols = [];
    this.initialize();
    }
    initialize(){
    for(let i=0; i<this.columns; i++){
        this.symbols[i] = new Symbol(i,0,this.fontSize,this.canvasHeight);
    }
    }
}

const effect = new Effects(canvas.width, canvas.height);
let lastTime = 0;
const fps = 15;
const nextFrame = 1000/fps;
let timer = 0;

function animate(timestamp){
    const deltaTime = timestamp - lastTime;
    lastTime =  timestamp;
    if(timer >nextFrame){
    ctx.fillStyle = "rgba( 0 , 0 , 0 , 0.06 )";
    ctx.fillRect( 0 , 0 , canvas.width , canvas.height );
    ctx.font = effect.fontSize + `px monospace`;
    effect.symbols.forEach(symbol => symbol.draw(ctx));
    timer = 0;
    } else{
        timer += deltaTime;
    }

    requestAnimationFrame(animate);
}
// animate(0);


input.addEventListener('keypress' , (e)=>{
    if(e.key === 'Enter'){
        para.textContent ="";
        para.setAttribute('style' , 'white-space: pre;');
        
        
    let i=0;
let text =`Hi ${input.value},
welcome to my page.`

function changePara(){

    if(i<text.length){
        para.textContent += text.charAt(i);
        i++;
        setTimeout(changePara, 125);
    }
}
changePara();
const synth = window.speechSynthesis; 
voices = synth.getVoices(); 
voices.default
const utterThis = new SpeechSynthesisUtterance(text)
synth.speak(utterThis);
    }
})

//word container animation on scroll
const word = document.querySelector('.word_container');

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
            entry.target.classList.toggle("show", entry.isIntersecting)
    })
})

observer.observe(word)