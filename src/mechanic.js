function sloting(){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const slot_1 = document.getElementById("slot1");
    const slot_2 = document.getElementById("slot2");
    const slot_3 = document.getElementById("slot3");
    let mas_1 = [];
    let mas_2 = [];
    let mas_3 = [];
    let sum_1 ='';
    let sum_2 ='';
    let sum_3 ='';


    for(let i=0; i<100; i++){
        mas_1.push(i)
    }
    for(let i in mas_1){
        sum_1 +='<div> '+ getRandomInt(1, 9) + '</div>';
    }
    slot_1.innerHTML = sum_1;


    for(let i=0; i<150; i++){
        mas_2.push(i);
    }
    for(let i in mas_2){
        sum_2 +='<div> '+ getRandomInt(1, 9) + '</div>';
        }
    slot_2.innerHTML = sum_2;


    for(let i=0; i<200; i++){
        mas_3.push(i);
    }
    for(let i in mas_3){
        sum_3 +='<div> '+ getRandomInt(1, 9) + '</div>';
        }
    slot_3.innerHTML = sum_3;
        



    slot_1.style.transform = 'translateY(-2665px)';
    slot_2.style.transform = 'translateY(-4034px)';
    slot_3.style.transform = 'translateY(-5410px)';

};


export default sloting;