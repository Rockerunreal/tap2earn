import { useState, memo, useEffect } from "react";
import { useContext } from "react";

const Machine = memo((props) => {
    const [spinCount, setSpinCount] = useState(props.data.spin_count);
    const [bl, setBl] = useState();
    
    async function sloting(){
        if (spinCount > 0){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let response = await fetch('https://api.spin2win.tech/Spin/0', {method: 'POST'})
        let data = await response.json();
        console.log(data)
        const slot_1 = document.getElementById("slot1");
        const start_btn = document.getElementById("start");
        const slot_2 = document.getElementById("slot2");
        const slot_3 = document.getElementById("slot3");
        start_btn.setAttribute('disabled', true)
        slot_1.style.transform = 'none';
        slot_2.style.transform = 'none';
        slot_3.style.transform = 'none';

        const res = document.getElementById("res");
        setSpinCount(spinCount - 1);
        slot_1.innerHTML = '';
        slot_2.innerHTML = '';
        slot_3.innerHTML = '';
        let mas_1 = [];
        let mas_2 = [];
        let mas_3 = [];
        let sum_1 ='';
        let sum_2 ='';
        let sum_3 ='';
        res.innerHTML = '-_-_-';
        const lib = {
            'TRON (TRX)': 1,
            'Avalanche (AVAX)': 2,
            'Shiba Inu (SHIB)': 3,
            'Polkadot (DOT)': 4,
            'Chainlink (LINK)': 5,
            'Bitcoin Cash (BCH)': 6,
            'UNUS SED LEO (LEO)': 7,
            'Dai (DAI)': 8,
            'NEAR Protocol (NEAR)': 9,
            'Polygon (MATIC)': 10,
            'USD Coin (USDC)': 11,
            'XRP (XRP)': 12,
            'Toncoin (TON)': 13,
            'Dogecoin (DOGE)': 14,
            'Cardano (ADA)': 15,
            'Bitcoin (BTC)': 16,
            'Ethereum (ETH)': 17,
            'Tether (USDT)': 18,
            'BNB (BNB)': 19,
            'Solana (SOL)': 20,
            'Satoshi Nakamoto': 21,
            'Vitalik Buterin': 22,
            'Hamster Combat': 23,
            'Notcoin': 24,
            'Pavel Durov': 25,
            'Golden Bitcoin': 26,
            'Ethereum Gem': 27,
            'Diamond Hands': 28,
            'TON': 29,
        }

        console.log(lib[`${data.slots[0][0]}`])

        let decode_indexes = 
        {
            '0': lib[`${data.slots[0][0]}`], 
            '1': lib[`${data.slots[0][1]}`],
            '2': lib[`${data.slots[0][2]}`],
            '3': lib[`${data.slots[1][0]}`],
            '4': lib[`${data.slots[1][1]}`],
            '5': lib[`${data.slots[1][2]}`],
            '6': lib[`${data.slots[2][0]}`],
            '7': lib[`${data.slots[2][1]}`],
            '8': lib[`${data.slots[2][2]}`]
        }
        
        const total_score = data.total_score;
        
    
        for(let i=0; i<100; i++){
            mas_1.push(getRandomInt(1, 27))
        }
        mas_1.push(decode_indexes['0']);
        mas_1.push(decode_indexes['1']);
        mas_1.push(decode_indexes['2']);
        for(let i in mas_1){
            sum_1 +='<div><img src="img/slots/'+ mas_1[i] + '.png"/></div>';
        }
        slot_1.innerHTML = sum_1;
    
    
        for(let i=0; i<150; i++){
            mas_2.push(getRandomInt(1, 27));
        }
        mas_2.push(decode_indexes['3']);
        mas_2.push(decode_indexes['4']);
        mas_2.push(decode_indexes['5']);
        for(let i in mas_2){
            sum_2 +='<div><img src="img/slots/'+ mas_2[i] + '.png"/></div>';
            }
        slot_2.innerHTML = sum_2;
    
    
        for(let i=0; i<200; i++){
            mas_3.push(getRandomInt(1, 27));
        }
        mas_3.push(decode_indexes['6']);
        mas_3.push(decode_indexes['7']);
        mas_3.push(decode_indexes['8']);
        for(let i in mas_3){
            sum_3 +='<div><img src="img/slots/'+ mas_3[i] + '.png"/></div>';
            }
        slot_3.innerHTML = sum_3;

        

        function resetAndAnimate() {
            // Убираем анимацию
            slot_1.style.transition = 'none';
            slot_2.style.transition = 'none';
            slot_3.style.transition = 'none';

            // Мгновенно сбрасываем позицию
            slot_1.style.transform = 'translateY(0px)';
            slot_2.style.transform = 'translateY(0px)';
            slot_3.style.transform = 'translateY(0px)';

            // Перезапуск анимации после следующего кадра
            requestAnimationFrame(() => {
                // Включаем анимацию
                slot_1.style.transition = 'transform 2s ease-out';
                slot_2.style.transition = 'transform 3s ease-out';
                slot_3.style.transition = 'transform 4s ease-out';

                // Задаем конечное положение
                requestAnimationFrame(() => {
                    slot_1.style.transform = 'translateY(-715vh)';
                    slot_2.style.transform = 'translateY(-1072.5vh)';
                    slot_3.style.transform = 'translateY(-1000vh)';
                });
            });
        }
        resetAndAnimate();
        setTimeout(() => res.innerHTML ='+' + (mas_1[99] + mas_2[149] + mas_3[199]) * 10, 4000)
        ;
        setTimeout(() => start_btn.removeAttribute("disabled"), 4000)
        setTimeout(() => setBl(props.balance((mas_1[99] + mas_2[149] + mas_3[199]) * 10)), 4000)


        
        async function index(i){
            var slotElement = document.querySelector('.slot');
            var newDivElement = document.createElement('div');
            newDivElement.classList.add(`index-${i}`);
            slotElement.appendChild(newDivElement);
            setTimeout(() => newDivElement.remove(), 2000)
        }
        
        function scores(cont){
            var slotElement = document.querySelector('.slot');
            var newDivElement = document.createElement('div');
            newDivElement.classList.add("score");
            newDivElement.innerHTML = `X ${cont}`
            slotElement.appendChild(newDivElement);
            // Показываем элемент
            newDivElement.style.opacity = 1;

            // Анимация улетающего элемента
            setTimeout(() => {
                newDivElement.style.transform = 'translate(750%, -850%)';
                newDivElement.style.opacity = 0;
                setTimeout(() => newDivElement.remove(), 1000)
                
            }, 1000);
        }
        let matrix = {
            '1': mas_1[97],
            '2': mas_1[98],
            '3': mas_1[99],
            '4': mas_2[147],
            '5': mas_2[148],
            '6': mas_2[149],
            '7': mas_3[197],
            '8': mas_3[198],
            '9': mas_3[199],
        };
        function Animate_index(){
            let counter = 0;
            for (let i = 1; i <= 8; i++){
                if ((matrix[`${i}`] == matrix[`${i+1}`]) && (i%3 != 0)){
                    setTimeout(() => {
                        index(i);
                        index(i+1);
                    }, 4500);
                    counter += 2;
                }
            }
        
            for (let i = 1; i <=7; i++){
                if ((matrix[`${i}`] == matrix[`${i+3}`])){
                    setTimeout(() => {
                        index(i);
                        index(i+3);
                    }, 4500);
                    counter += 2;
                }
            }        
            if (matrix['3'] == matrix[5] == matrix['7']){
                setTimeout(() => {
                    index(3);
                    index(5);
                    index(7)
                }, 4500);
                counter += 2;
            }
            if (matrix['1'] == matrix['5'] == matrix['9']){
                setTimeout(() => {
                    index(3);
                    index(5);
                    index(7)
                }, 4500);
                counter += 2;
            }
            if (counter){
            setTimeout(() => scores(counter), 5500)
            }      
        }


        Animate_index();

        function textShadow(){
            var span = document.querySelector('.balance');
            span.className = 'balance--'
            setTimeout(() => span.className = 'balance', 3000)
        }

        setTimeout(textShadow, 4500)

        return {}
    }else{
        const spin = document.getElementById("spin_count");
        const spinLim = document.getElementById("spin_count_lim");
        const res = document.getElementById("res");
        
        spin.style.color = '#E92121'
        spinLim.style.color = '#E92121'
        spin.style.scale = '110%'
        spinLim.style.scale = '110%'
        res.innerHTML = 'Lim-is-over'
    }
    
    };


    
    // };
    return(
        
        <div className="slot">
            <img className="crypt" src="img\Ethereum2 1.png" />
            <img src="img\Group 10.png"  id="slot"/>
            <div className="slot-machine">
                <div className="slot_cover" id="cover1">
                    <div className="sloter" id="sloter_1">
                        <div className="slot1" id="slot1">
                            <div><img src="img/slots/1.png"/></div>
                            <div><img src="img/slots/2.png"/></div>
                            <div><img src="img/slots/3.png"/></div>
                        </div>
                    </div>
                </div>
                <div className="slot_cover" id="cover2">
                    <div className="sloter" id="sloter_2">
                        <div className="slot2" id="slot2">
                            <div><img src="img/slots/4.png"/></div>
                            <div><img src="img/slots/5.png"/></div>
                            <div><img src="img/slots/6.png"/></div>
                        </div>
                    </div>
                </div>
                <div className="slot_cover" id="cover3">
                    <div className="sloter" id="sloter_3">
                        <div className="slot3" id="slot3">
                            <div><img src="img/slots/7.png"/></div>
                            <div><img src="img/slots/8.png"/></div>
                            <div><img src="img/slots/9.png"/></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <span className="section1" id="res">- - - - -</span>
            <button className="start" id="start" onClick={sloting} >START</button>
            <span className="section2" >120</span>
            <span className="section3">1500</span>
            <span className="section4" id="spin_count">{spinCount}</span>
            <span className="section5" id="spin_count_lim">30</span>
        </div>


)});

export default Machine;