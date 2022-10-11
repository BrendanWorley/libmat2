const verbalDisplay = document.querySelector('.verbalDisplay');
const generateButton = document.querySelector('.generateButton');
const yourNumber = document.querySelector('.yourNum');
const checkButton = document.querySelector('.checkYourNum');
const result = document.querySelector('.result');
const refreshButton = document.querySelector('.refresh');
const smile = document.querySelector('.resultSmile');
refreshButton.style.visibility = 'hidden';
checkButton.style.visibility = 'hidden';
yourNumber.style.visibility = 'hidden';

let correctNum = 0;

generateButton.addEventListener('click', generateNum);



function generateNum() {

        

        let hundsK = 0;
        let tensK = 0;
        let unitsK = 0;

        let hundreds = 0;
        let tens = 0;
        let units = 0;

        hundsK = Math.floor(Math.random(9) * 10);
        tensK = Math.floor(Math.random(9) * 10);
        unitsK = Math.floor(Math.random(9) * 10);

        hundreds = Math.floor(Math.random(9) * 10);
        tens = Math.floor(Math.random(9) * 10);
        units = Math.floor(Math.random(9) * 10);

        

        let verbalNum = '';

        switch (hundsK) {
            case 0:
                verbalNum = verbalNum + '';
                break;
            case 1:
                verbalNum = verbalNum + 'сто ';
                break;
            case 2:
                verbalNum = verbalNum + 'двести ';
                break;
            case 3:
                verbalNum = verbalNum + 'триста ';
                break;
            case 4:
                verbalNum = verbalNum + 'четыреста ';
                break;
            case 5:
                verbalNum = verbalNum + 'пятьсот ';
                break;
            case 6:
                verbalNum = verbalNum + 'шестьсот ';
                break;
            case 7:
                verbalNum = verbalNum + 'семьсот ';
                break;
            case 8:
                verbalNum = verbalNum + 'восемьсот ';
                break;
            case 9:
                verbalNum = verbalNum + 'девятьсот ';
                break;
            
        };

        if (tensK === 1) {
            switch (unitsK) {
                case 0:
                    verbalNum = verbalNum + 'десять тысяч ';
                    break;
                case 1:
                    verbalNum = verbalNum + 'одиннадцать тысяч ';
                    break;
                case 2:
                    verbalNum = verbalNum + 'двенадцать тысяч ';
                    break;
                case 3:
                    verbalNum = verbalNum + 'тринадцать тысяч ';
                    break;
                case 4:
                    verbalNum = verbalNum + 'четырнадцать тысяч ';
                    break;
                case 5:
                    verbalNum = verbalNum + 'пятнадцать тысяч ';
                    break;
                case 6:
                    verbalNum = verbalNum + 'шестнадцать тысяч ';
                    break;
                case 7:
                    verbalNum = verbalNum + 'семнадцать тысяч ';
                    break;
                case 8:
                    verbalNum = verbalNum + 'восемнадцать тысяч ';
                    break;
                case 9:
                    verbalNum = verbalNum + 'девятнадцать тысяч ';
                    break;
                
            };  
        } else {
            switch (tensK) {
                case 0:
                    verbalNum = verbalNum + '';
                    break;
                case 2:
                    verbalNum = verbalNum + 'двадцать ';
                    break;
                case 3:
                    verbalNum = verbalNum + 'тридцать ';
                    break;
                case 4:
                    verbalNum = verbalNum + 'сорок ';
                    break;
                case 5:
                    verbalNum = verbalNum + 'пятьдесят ';
                    break;
                case 6:
                    verbalNum = verbalNum + 'шестдесят ';
                    break;
                case 7:
                    verbalNum = verbalNum + 'семдесят ';
                    break;
                case 8:
                    verbalNum = verbalNum + 'восемдесят ';
                    break;
                case 9:
                    verbalNum = verbalNum + 'девяносто ';
                    break;
            };

            switch (unitsK) {
                case 0:
                    verbalNum = verbalNum + 'тысяч ';
                    break;
                case 1:
                    verbalNum = verbalNum + 'одна тысяча ';
                    break;
                case 2:
                    verbalNum = verbalNum + 'две тысячи ';
                    break;
                case 3:
                    verbalNum = verbalNum + 'три тысячи ';
                    break;
                case 4:
                    verbalNum = verbalNum + 'четыре тысячи ';
                    break;
                case 5:
                    verbalNum = verbalNum + 'пять тысяч ';
                    break;
                case 6:
                    verbalNum = verbalNum + 'шесть тысяч ';
                    break;
                case 7:
                    verbalNum = verbalNum + 'семь тысяч ';
                    break;
                case 8:
                    verbalNum = verbalNum + 'восемь тысяч ';
                    break;
                case 9:
                    verbalNum = verbalNum + 'девять тысяч ';
                    break;
                
            };
        };

        switch (hundreds) {
            case 0:
                verbalNum = verbalNum + '';
                break;
            case 1:
                verbalNum = verbalNum + 'сто ';
                break;
            case 2:
                verbalNum = verbalNum + 'двести ';
                break;
            case 3:
                verbalNum = verbalNum + 'триста ';
                break;
            case 4:
                verbalNum = verbalNum + 'четыреста ';
                break;
            case 5:
                verbalNum = verbalNum + 'пятьсот ';
                break;
            case 6:
                verbalNum = verbalNum + 'шестьсот ';
                break;
            case 7:
                verbalNum = verbalNum + 'семьсот ';
                break;
            case 8:
                verbalNum = verbalNum + 'восемьсот ';
                break;
            case 9:
                verbalNum = verbalNum + 'девятьсот ';
                break;
            
        };

        if (tens === 1) {
            switch (unitsK) {
                case 0:
                    verbalNum = verbalNum + 'десять ';
                    break;
                case 1:
                    verbalNum = verbalNum + 'одиннадцать ';
                    break;
                case 2:
                    verbalNum = verbalNum + 'двенадцать ';
                    break;
                case 3:
                    verbalNum = verbalNum + 'тринадцать ';
                    break;
                case 4:
                    verbalNum = verbalNum + 'четырнадцать ';
                    break;
                case 5:
                    verbalNum = verbalNum + 'пятнадцать ';
                    break;
                case 6:
                    verbalNum = verbalNum + 'шестнадцать ';
                    break;
                case 7:
                    verbalNum = verbalNum + 'семнадцать ';
                    break;
                case 8:
                    verbalNum = verbalNum + 'восемнадцать ';
                    break;
                case 9:
                    verbalNum = verbalNum + 'девятнадцать ';
                    break;
                
            };  
        } else {
            switch (tens) {
                case 0:
                    verbalNum = verbalNum + '';
                    break;
                case 2:
                    verbalNum = verbalNum + 'двадцать ';
                    break;
                case 3:
                    verbalNum = verbalNum + 'тридцать ';
                    break;
                case 4:
                    verbalNum = verbalNum + 'сорок ';
                    break;
                case 5:
                    verbalNum = verbalNum + 'пятьдесят ';
                    break;
                case 6:
                    verbalNum = verbalNum + 'шестдесят ';
                    break;
                case 7:
                    verbalNum = verbalNum + 'семдесят ';
                    break;
                case 8:
                    verbalNum = verbalNum + 'восемдесят ';
                    break;
                case 9:
                    verbalNum = verbalNum + 'девяносто ';
                    break;
            };

            switch (units) {
                case 0:
                    verbalNum = verbalNum + '';
                    break;
                case 1:
                    verbalNum = verbalNum + 'один';
                    break;
                case 2:
                    verbalNum = verbalNum + 'два';
                    break;
                case 3:
                    verbalNum = verbalNum + 'три';
                    break;
                case 4:
                    verbalNum = verbalNum + 'четыре';
                    break;
                case 5:
                    verbalNum = verbalNum + 'пять';
                    break;
                case 6:
                    verbalNum = verbalNum + 'шесть';
                    break;
                case 7:
                    verbalNum = verbalNum + 'семь';
                    break;
                case 8:
                    verbalNum = verbalNum + 'восемь';
                    break;
                case 9:
                    verbalNum = verbalNum + 'девять';
                    break;
                
            };
        };

        
        correctNum = correctNum + Number(hundsK) * 100000 + Number(tensK * 10000) + Number(unitsK) * 1000 + Number(hundreds) * 100 + Number(tens) * 10 + Number(units);
        console.log("correct number: ", correctNum);
        verbalDisplay.textContent = verbalNum;
        yourNumber.style.visibility = 'visible';
        checkButton.style.visibility = 'visible';


    }

function checkMyNum() {
    const digitized = Number(document.querySelector('.yourNum').value);
    console.log("corr number: ", correctNum);
    console.log("my number: ", digitized);
    if (digitized === correctNum) {
        result.textContent = "Молодец!";
        result.style.backgroundColor = 'green';
        result.style.color = 'white';
        smile.src = 'images/success.png';
    } else {
        result.textContent = `Большое число победило...
        Думай еще`;
        result.style.backgroundColor = 'red';
        result.style.color = 'white';
        smile.src = 'images/fail.png';
    };
    refreshButton.style.visibility = 'visible';
};

checkButton.addEventListener('click', checkMyNum);

refreshButton.addEventListener('click', () => {
    yourNumber.value = '';
    location.reload();
});