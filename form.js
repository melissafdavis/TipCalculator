//DOM ELEMENTS
var bill = document.getElementById('bill');
var people = document.getElementById('people');
var peopleHint = document.getElementById('people-hint');
var tip = document.getElementById('tip-input');
var totalPerPerson = document.getElementById('total-per-person');
var tipPerPerson = document.getElementById('tip-per-person');
var fiveBtn = document.getElementById('five');
var tenBtn = document.getElementById('ten');
var fifteenBtn = document.getElementById('fifteen');
var twentyfiveBtn = document.getElementById('twentyfive');
var fiftyBtn = document.getElementById('fifty');
var customBtn= document.getElementById('custom');
var resetBtn= document.getElementById('reset');

//GLOBAL VARIABLES
var billInput, tipInput, billTotal;
var peopleInput;

let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

//FUNCTIONS
function inputBill(){
    billInput = bill.value;
}

function inputTip(e){
    var target = e.target;
    var targetValue = target.value;

    switch(targetValue){
        case '5%':
        tipInput=.05;
        fiveBtn.className='active-btn';
        tenBtn.className="inactive-btn";
        fifteenBtn.className="inactive-btn";
        twentyfiveBtn.className="inactive-btn";
        fiftyBtn.className="inactive-btn";
        customBtn.value= "Custom";
        break;
        case '10%':
        tipInput=.1;
        fiveBtn.className='inactive-btn';
        tenBtn.className="active-btn";
        fifteenBtn.className="inactive-btn";
        twentyfiveBtn.className="inactive-btn";
        fiftyBtn.className="inactive-btn";
        customBtn.value= "Custom";
        break;
        case '15%':
        tipInput=.15;
        fiveBtn.className='inactive-btn';
        tenBtn.className="inactive-btn";
        fifteenBtn.className="active-btn";
        twentyfiveBtn.className="inactive-btn";
        fiftyBtn.className="inactive-btn";
        customBtn.value= "Custom";
        break;
        case '25%':
        tipInput=.25;
        fiveBtn.className='inactive-btn';
        tenBtn.className="inactive-btn";
        fifteenBtn.className="inactive-btn";
        twentyfiveBtn.className="active-btn";
        fiftyBtn.className="inactive-btn";
        customBtn.value= "Custom";
        break;
        case '50%':
        tipInput=.5;
        fiveBtn.className='inactive-btn';
        tenBtn.className="inactive-btn";
        fifteenBtn.className="inactive-btn";
        twentyfiveBtn.className="inactive-btn";
        fiftyBtn.className="active-btn";
        customBtn.value= "Custom";
        break;
        case 'Custom':
        customBtn.value="";
        customBtn.addEventListener('change', function(){
            tipInput=parseFloat(customBtn.value)/100;
            })
        fiveBtn.className='inactive-btn';
        tenBtn.className="inactive-btn";
        fifteenBtn.className="inactive-btn";
        twentyfiveBtn.className="inactive-btn";
        fiftyBtn.className="inactive-btn";
        break;
    }}

function inputPeople(){
    if (people.value == 0){
        peopleHint.classList.remove('hidden');
    }else{

    peopleHint.classList.add('hidden');
    peopleInput = people.value;
    //add functionality for "must be greater than 0"
}  
}

function calculateTotals(){
    if (billInput>0 && tipInput > 0 && peopleInput > 0){
        var billSubTotal= billInput/peopleInput;
        let tipSubTotal= billInput*tipInput;
        var tipTotal= tipSubTotal/peopleInput;
        var billTotal= billSubTotal +tipTotal;
        var billTotalToFixed = billTotal.toFixed(2);
        var tipTotalToFixed = tipTotal.toFixed(2);
        totalPerPerson.textContent= dollarUS.format(billTotalToFixed);
        tipPerPerson.textContent = dollarUS.format(tipTotalToFixed);
    }}

    function reset(){
        totalPerPerson.textContent = '$0.00';
        tipPerPerson.textContent = '$0.00';
        bill.value= 0;
        customBtn.value= "Custom";
        people.value=0;
        fiveBtn.className='inactive-btn';
        tenBtn.className="inactive-btn";
        fifteenBtn.className="inactive-btn";
        twentyfiveBtn.className="inactive-btn";
        fiftyBtn.className="inactive-btn";
    }

//EVENT LISTENERS
bill.addEventListener('change', inputBill);
bill.addEventListener('change', calculateTotals);
people.addEventListener('change', inputPeople);
people.addEventListener('change', calculateTotals);
tip.addEventListener('click', inputTip);
tip.addEventListener('click', calculateTotals);
resetBtn.addEventListener('click', reset);


