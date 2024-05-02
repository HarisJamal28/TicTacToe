var Board = document.getElementById('Board');
console.log(Board);
var id = 1;
var turn = false;
var arrX = [];
var arrO = [];
var GameOver = false;
var P1 = document.getElementById('p1score');
var P2 = document.getElementById('p2score');
var Draw = 0;
var result = document.getElementById("Results");

var P1score = 0;
var P2score = 0;

Board.querySelectorAll('aside').forEach(box => {
    box.setAttribute('id',`${id}`);
    id++;
    box.addEventListener('click',function(){
        let x = document.getElementById(this.id);
        if(turn){
            if(x.classList.contains('FlagO')){

            }else{
                if(x.innerHTML == ""){
            let img = document.createElement('img')
            img.src = "O.png";

            x.appendChild(img)
            x.classList.add('FlagO')
            Draw++;
            turn = !turn;
                }
                Win(this.id)
            }
        }else{
            if(x.classList.contains('FlagX')){

            }else{
                if(x.innerHTML==''){
            let img = document.createElement('img')
            img.src = "X.png";

            x.appendChild(img)
            x.classList.add('FlagX')
            Draw++;
            turn = !turn;
            Win(this.id);
                }
            }
        }
        
    })
    // box.addEventListener('mouseenter',function(){
    //     let y = console.log(this.id)
    // })

    
});

function Win(id){

    if(turn){
        arrX.push(id);
    }else{
        arrO.push(id);
    }


    if(arrX.includes('1')&&arrX.includes('2')&&arrX.includes('3')){
        console.log("X Wins!")
        P1score++;
        P1.innerHTML = `${P1score}`;
        result.innerText = 'X Wins!'
        GameOver = true;
    }
    if(arrX.includes('1')&&arrX.includes('4')&&arrX.includes('7')){
        console.log("X Wins!")
        P1score++;
        P1.innerHTML = `${P1score}`;
        result.innerText = 'X Wins!'
        GameOver = true;
    }
    if(arrX.includes('1')&&arrX.includes('5')&&arrX.includes('9')){
        console.log("X Wins!")
        P1score++;
        P1.innerHTML = `${P1score}`;
        result.innerText = 'X Wins!'
        GameOver = true;
    }
    if(arrX.includes('4')&&arrX.includes('5')&&arrX.includes('6')){
        console.log("X Wins!")
        P1score++;
        P1.innerHTML = `${P1score}`;
        result.innerText = 'X Wins!'
        GameOver = true;
    }
    if(arrX.includes('2')&&arrX.includes('5')&&arrX.includes('8')){
        console.log("X Wins!")
        P1score++;
        P1.innerHTML = `${P1score}`;
        result.innerText = 'X Wins!'
        GameOver = true;
    }
    if(arrX.includes('3')&&arrX.includes('6')&&arrX.includes('9')){
        console.log("X Wins!")
        P1score++;
        P1.innerHTML = `${P1score}`;
        result.innerText = 'X Wins!'
        GameOver = true;
    }
    if(arrX.includes('3')&&arrX.includes('5')&&arrX.includes('7')){
        console.log("X Wins!")
        P1score++;
        P1.innerHTML = `${P1score}`;
        result.innerText = 'X Wins!'
        GameOver = true;
    }
    if(arrX.includes('7')&&arrX.includes('8')&&arrX.includes('9')){
        console.log("X Wins!")
        P1score++;
        P1.innerHTML = `${P1score}`;
        result.innerText = 'X Wins!'
        GameOver = true;
    }







    if(arrO.includes('1')&&arrO.includes('2')&&arrO.includes('3')){
        console.log("O Wins!")
        P2score++;
        P2.innerHTML = `${P2score}`;
        result.innerText = 'O Wins!'
        GameOver = true;
    }
    if(arrO.includes('1')&&arrO.includes('4')&&arrO.includes('7')){
        console.log("O Wins!")
        P2score++;
        P2.innerHTML = `${P2score}`;
        result.innerText = 'O Wins!'
        GameOver = true;
    }
    if(arrO.includes('4')&&arrO.includes('5')&&arrO.includes('6')){
        console.log("O Wins!")
        P2score++;
        P2.innerHTML = `${P2score}`;
        result.innerText = 'O Wins!'
        GameOver = true;
    }
    if(arrO.includes('1')&&arrO.includes('5')&&arrO.includes('9')){
        console.log("O Wins!")
        P2score++;
        P2.innerHTML = `${P2score}`;
        result.innerText = 'O Wins!'
        GameOver = true;
    }
    if(arrO.includes('2')&&arrO.includes('5')&&arrO.includes('8')){
        console.log("O Wins!")
        P2score++;
        P2.innerHTML = `${P2score}`;
        result.innerText = 'O Wins!'
        GameOver = true;
    }
    if(arrO.includes('3')&&arrO.includes('6')&&arrO.includes('9')){
        console.log("O Wins!")
        P2score++;
        P2.innerHTML = `${P2score}`;
        result.innerText = 'O Wins!'
        GameOver = true;
    }
    if(arrO.includes('3')&&arrO.includes('5')&&arrO.includes('7')){
        console.log("O Wins!")
        P2score++;
        P2.innerHTML = `${P2score}`;
        result.innerText = 'O Wins!'
        GameOver = true;
    }
    if(arrO.includes('7')&&arrO.includes('8')&&arrO.includes('9')){
        console.log("O Wins!")
        P2score++;
        P2.innerHTML = `${P2score}`;
        result.innerText = 'O Wins!'
        GameOver = true;
    }


    if(GameOver){
    setTimeout(function(){
        Board.querySelectorAll('aside').forEach(box=>{
            box.innerHTML = '';
            box.classList.remove('FlagX');
            box.classList.remove('FlagO');
        
        })
        arrX = []
        arrO = []
        turn = false;
        Draw = 0;
        GameOver = false;
        result.innerText = '';
    },1000);
    }else{
        if(Draw==9){
            result.innerText = 'DRAW!'
            setTimeout(function(){
                Board.querySelectorAll('aside').forEach(box=>{
                    box.innerHTML = '';
                    box.classList.remove('FlagX');
                    box.classList.remove('FlagO');
                
                })
                arrX = []
                arrO = []
                turn = false;
                GameOver = false;
                Draw = 0;
                result.innerText = ''
                console.log('DRAW')
            },1000)
        }
    }


    
}




