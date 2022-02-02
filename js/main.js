
const myBD4 =      ['gain',     'grab',    'lead',   'rely',         'doom',        'dare'     ];
const myBDtrans4 = ['получать', 'хватать', 'вести' , 'положиться', 'обрекать', 'осмеливаться'        ];

const myBD5 =      ['hoard', 'rival',    'doubt',        'seize', 'aisle',  'trump' ];
const myBDtrans5 = ['запас', 'соперник', 'сомнение', 'схватить', 'проход', 'превзойти'];

const myBD6 =      ['albeit', 'fulfil'     , 'target', 'insult',    'legacy'];
const myBDtrans6 = ['хотя',   'осуществлять', 'цель',  'оскорблять', 'наследие'];

// Определение длині слова
const number = document.querySelector('.number');
const thatas = document.querySelector('.that_was');
const num = +number.textContent;
let modalbody = document.querySelector(".modal-body");
// *********************************************
let randnum;
let chosen_word;
let translete;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

if(num==4){  
randnum = getRandomInt(myBD4.length);
while(myBD4[randnum]==thatas.innerHTML){
    randnum = getRandomInt(myBD4.length); 
}
chosen_word = myBD4[randnum];
translete = myBDtrans4[randnum];
}
if(num==5){
    randnum = getRandomInt(myBD5.length);
    while(myBD5[randnum]==thatas.innerHTML){
        randnum = getRandomInt(myBD5.length); 
    }
    chosen_word = myBD5[randnum];  
    translete = myBDtrans5[randnum]; 
}
if(num==6){
    randnum = getRandomInt(myBD6.length);
    while(myBD6[randnum]==thatas.innerHTML){
        randnum = getRandomInt(myBD6.length); 
    }
    chosen_word = myBD6[randnum];  
    translete = myBDtrans6[randnum]; 
}
console.log(num);
thatas.innerHTML = `${chosen_word}`;
console.log(chosen_word);
// **********************************************************
const buttons = document.querySelectorAll('.key');
const cells = document.querySelectorAll('.sq');

const modalwindow = document.querySelector(".modal-container");
const modalbutton = document.querySelector(".modalbut");
let i;
let flagEnter = false;


function empty(item){
    if(item.style.borderRadius == '100%' || item.style.borderRadius == '31%'){
        return false;
    }
    return true;
}
function end(i){
    if(i%num==0 && i!=0){
        return true;
    }
    return false;
}




 buttons.forEach(item  => {
     item.addEventListener('click', () =>{
        let v = item.textContent;
        
        // определяем первій пустой елемент
         for(let k = 0; k<cells.length; k++){
            if(empty(cells[k])){
                i=k;
                break;
            }
            else{
                i=cells.length;
            }
        };


        if(v =='delete'){
            if(cells[i-1].style.borderRadius != '31%')   {
            cells[i-1].innerHTML = " ";
            cells[i-1].style.borderRadius = '30%';
            }
            
            flagEnter= true;
        }

        else if(end(i) && flagEnter==false){
// *********************************************************************
           
            if(v == 'enter' ){
                flagEnter = true;
                const getted = [];
                let z = 0;
                // Формирование масива полученым из ячеек
                    for(k=i-num;k<i;k++){
                        getted[z] = cells[k].textContent;
                        z++;
                    }
                //************************************** */
                /*То что вроде работает */
                let butncolor;
                for(let s = 0; s<num; s++){
                let index = s + i-num;
                let letter = cells[index].textContent;
                cells[index].style.borderRadius= '31%';
                cells[index].style.backgroundColor = 'grey';
                cells[index].style.color = '#fff'

                butncolor = document.querySelector(`.${letter}`);
                butncolor.style.backgroundColor = 'grey';
                };

                for(let s = 0; s<num; s++){
                    for(let j = 0; j<num; j++){
                    if(chosen_word[s] == getted[j] && s!=j){
                        cells[j+i-num].style.backgroundColor =  '#b59f3b';
                        butncolor = document.querySelector(`.${chosen_word[s]}`);
                        butncolor.style.backgroundColor = '#b59f3b';
                    }
                    } 
                }
                let counter = 0;
                for(let s = 0; s<num; s++){
                    if(chosen_word[s] == getted[s]){
                        cells[s+i-num].style.backgroundColor = '#6aaa64';
                        counter++;
                        butncolor = document.querySelector(`.${chosen_word[s]}`);
                        butncolor.style.backgroundColor = '#6aaa64';
                    }
                }
                // ***************************************************
                if(counter==num){
                    // alert(`Твое слово ${myBD[randnum]} - ${myBDtrans[randnum]}`);
                    modalwindow.classList.remove('modal-hidden');
                    document.querySelector('.modal-body > span').innerHTML = `Поздравляем) Твое слово <span class='trueword'>${chosen_word}</span> - ${translete}`;
                    // setTimeout(() => {
                    //     modalwindow.classList.add('modal-hidden');
                    // }, 3000);
                }
                if(i==cells.length && counter!=num){
                    modalwindow.classList.remove('modal-hidden');
                    document.querySelector('.modal-body > span').innerHTML = `Не повезло( Твое слово <span class='trueword'>${chosen_word}</span> - ${translete}`;
                }
                   
                console.log(getted);
                flagEnter=true;
                console.log(flagEnter);
                
            }
        }
// *********************************************************************

        else{
                if(v!='enter'){
                cells[i].innerHTML = `<h2 class = 'inkey'>${v}</h2>`;
                cells[i].style.borderRadius = '100%';
                flagEnter = false;
                };
        }
        

     });
 });

 modalbutton.addEventListener('click', ()=>{
    document.location.reload();
 });

 let modalbody2 = document.querySelector(".modal-body2");
 let modalwindow2 = document.querySelector(".modal-container2");


 number.addEventListener('click', ()=>{
    modalbody2.innerHTML = '<div id="four" tabindex="2"></div><a href="index.html">4</a></div>   <a href="index2.html">5</a><a href="index3.html">6</a>'
    modalwindow2.classList.remove('modal-hidden'); 
    modwind.focus();

});

  modwind.onblur = function(){
    setTimeout( function(){
        modalwindow2.classList.add('modal-hidden'); 
      }, 200 );
    

}


//  document.addEventListener('click', (event) =>{
//     modalbody2 = document.querySelector(".modal-body2");
//     let box = modalbody2.getBoundingClientRect();
//    if((event.clientX > box.right || event.clientX < box.left || event.clientY > box.bottom || event.clientY < box.top)){
//        modalwindow2.classList.add('modal-hidden');  
//    }
// });

