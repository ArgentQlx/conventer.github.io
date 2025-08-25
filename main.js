class CreateWeightUnits { // работает
    constructor() {
        clearUnits()
        unit1 = 1; unit2 = 1;
        hint1.textContent = 'Килограмм'; hint2.textContent = 'Килограмм';
        this.makeElements();
        this.initEvents();
    };
    makeElements() {
        this.column1 = document.createElement('div'); this.column1.classList.add('column');
        this.column2 = document.createElement('div'); this.column2.classList.add('column');
        this.kg1 = document.createElement('button'); this.kg1.textContent = 'Килограмм';
        this.kg2 = document.createElement('button'); this.kg2.textContent = 'Килограмм';  
        this.g1 = document.createElement('button'); this.g1.textContent = 'Грамм';
        this.g2 = document.createElement('button'); this.g2.textContent = 'Грамм';
        this.ton1 = document.createElement('button'); this.ton1.textContent = 'Тонна';
        this.ton2 = document.createElement('button'); this.ton2.textContent = 'Тонна';
        this.f1 = document.createElement('button'); this.f1.textContent = 'Фунт';
        this.f2 = document.createElement('button'); this.f2.textContent = 'Фунт';
        this.ts1 = document.createElement('button'); this.ts1.textContent = 'Центнер';
        this.ts2 = document.createElement('button'); this.ts2.textContent = 'Центнер';
        this.column1.appendChild(this.kg1); this.column1.appendChild(this.g1); this.column1.appendChild(this.ton1); this.column1.appendChild(this.f1); this.column1.appendChild(this.ts1);
        this.column2.appendChild(this.kg2); this.column2.appendChild(this.g2); this.column2.appendChild(this.ton2); this.column2.appendChild(this.f2); this.column2.appendChild(this.ts2);
        unitsMenu.appendChild(this.column1); unitsMenu.appendChild(this.column2);
    };
    initEvents() {
        this.kg1.addEventListener('click', () => {changeHint1(this.kg1); unit1 = 1; calculateValue2()});
        this.kg2.addEventListener('click', () => {changeHint2(this.kg2); unit2 = 1; calculateValue2()});
        this.g1.addEventListener('click', () => {changeHint1(this.g1); unit1 = 0.001; calculateValue2()});
        this.g2.addEventListener('click', () => {changeHint2(this.g2); unit2 = 1000; calculateValue2()});
        this.ton1.addEventListener('click', () => {changeHint1(this.ton1); unit1 = 1000; calculateValue2()});
        this.ton2.addEventListener('click', () => {changeHint2(this.ton2); unit2 = 0.001; calculateValue2()});
        this.f1.addEventListener('click', () => {changeHint1(this.f1); unit1 = 0.454; calculateValue2()});
        this.f2.addEventListener('click', () => {changeHint2(this.f2); unit2 = 2.204; calculateValue2()});
        this.ts1.addEventListener('click', () => {changeHint1(this.ts1); unit1 = 100; calculateValue2()});
        this.ts2.addEventListener('click', () => {changeHint2(this.ts2); unit2 = 0.01; calculateValue2()});
    }
};
class CreateTempUnits { // работает
    constructor() {
        clearUnits();
        unit1 = 1; unit2 = 1;
        hint1.textContent = 'Цельсий'; hint2.textContent = 'Цельсий';
        this.makeElements();
        this.initEvents();
    };
    makeElements() {
        this.column1 = document.createElement('div'); this.column1.classList.add('column');
        this.column2 = document.createElement('div'); this.column2.classList.add('column');
        this.cel1 = document.createElement('button'); this.cel1.textContent = 'Цельсий';
        this.cel2 = document.createElement('button'); this.cel2.textContent = 'Цельсий';
        this.far1 = document.createElement('button'); this.far1.textContent = 'Фаренгейт';
        this.far2 = document.createElement('button'); this.far2.textContent = 'Фаренгейт';
        this.kel1 = document.createElement('button'); this.kel1.textContent = 'Кельвин';
        this.kel2 = document.createElement('button'); this.kel2.textContent = 'Кельвин';
        this.column1.appendChild(this.cel1); this.column1.appendChild(this.far1); this.column1.appendChild(this.kel1);
        this.column2.appendChild(this.cel2); this.column2.appendChild(this.far2); this.column2.appendChild(this.kel2);
        unitsMenu.appendChild(this.column1); unitsMenu.appendChild(this.column2);
    };
    initEvents() {
        this.cel1.addEventListener('click', () => {changeHint1(this.cel1); calculateTemp2()});
        this.cel2.addEventListener('click', () => {changeHint2(this.cel2); calculateTemp2()});
        this.far1.addEventListener('click', () => {changeHint1(this.far1); calculateTemp2()});
        this.far2.addEventListener('click', () => {changeHint2(this.far2); calculateTemp2()});
        this.kel1.addEventListener('click', () => {changeHint1(this.kel1); calculateTemp2()});
        this.kel2.addEventListener('click', () => {changeHint2(this.kel2); calculateTemp2()});
    }
};
class CreateAngleUnits { // работает
    constructor() {
        clearUnits();
        unit1 = 1/360; unit2 = 360;
        hint1.textContent = 'Градус'; hint2.textContent = 'Градус';
        this.makeElements();
        this.initEvents(); 
    };
    makeElements() {
        this.column1 = document.createElement('div'); this.column1.classList.add('column');
        this.column2 = document.createElement('div'); this.column2.classList.add('column');
        this.deg1 = document.createElement('button'); this.deg1.textContent = 'Градус';
        this.deg2 = document.createElement('button'); this.deg2.textContent = 'Градус';
        this.rad1 = document.createElement('button'); this.rad1.textContent = 'Радиан';
        this.rad2 = document.createElement('button'); this.rad2.textContent = 'Радиан';
        this.rot1 = document.createElement('button'); this.rot1.textContent = 'Оборот';
        this.rot2 = document.createElement('button'); this.rot2.textContent = 'Оборот';
        this.column1.appendChild(this.deg1); this.column1.appendChild(this.rad1); this.column1.appendChild(this.rot1); 
        this.column2.appendChild(this.deg2); this.column2.appendChild(this.rad2); this.column2.appendChild(this.rot2);
        unitsMenu.appendChild(this.column1); unitsMenu.appendChild(this.column2);
    };
    initEvents() {
        this.deg1.addEventListener('click', () => {changeHint1(this.deg1); unit1 = 1/360; calculateValue2()});
        this.deg2.addEventListener('click', () => {changeHint2(this.deg2); unit2 = 360; calculateValue2()});
        this.rad1.addEventListener('click', () => {changeHint1(this.rad1); unit1 = 1/(2 * 3.1415926535); calculateValue2()});
        this.rad2.addEventListener('click', () => {changeHint2(this.rad2); unit2 = 2 * 3.1415926535; calculateValue2()});
        this.rot1.addEventListener('click', () => {changeHint1(this.rot1); unit1 = 1; calculateValue2()});
        this.rot2.addEventListener('click', () => {changeHint2(this.rot2); unit2 = 1; calculateValue2()});
    };
};
class CreateDistUnits { // работает
    constructor() {
        clearUnits();
        unit1 = 1; unit2 = 1;
        hint1.textContent = 'Километр'; hint2.textContent = 'Километр';
        this.makeElements();
        this.initEvents();
    };
    makeElements() {
        this.column1 = document.createElement('div'); this.column1.classList.add('column');
        this.column2 = document.createElement('div'); this.column2.classList.add('column');
        this.km1 = document.createElement('button'); this.km1.textContent = 'Километр';
        this.km2 = document.createElement('button'); this.km2.textContent = 'Километр';
        this.m1 = document.createElement('button'); this.m1.textContent = 'Метр';
        this.m2 = document.createElement('button'); this.m2.textContent = 'Метр';
        this.mile1 = document.createElement('button'); this.mile1.textContent = 'Миля';
        this.mile2 = document.createElement('button'); this.mile2.textContent = 'Миля';
        this.mMile1 = document.createElement('button'); this.mMile1.textContent = 'Морская миля';
        this.mMile2 = document.createElement('button'); this.mMile2.textContent = 'Морская миля';
        this.column1.appendChild(this.km1); this.column1.appendChild(this.m1); this.column1.appendChild(this.mile1); this.column1.appendChild(this.mMile1);
        this.column2.appendChild(this.km2); this.column2.appendChild(this.m2); this.column2.appendChild(this.mile2); this.column2.appendChild(this.mMile2);
        unitsMenu.appendChild(this.column1); unitsMenu.appendChild(this.column2);
    };
    initEvents() {
        this.km1.addEventListener('click', () => {changeHint1(this.km1); unit1 = 1; calculateValue2()});
        this.km2.addEventListener('click', () => {changeHint2(this.km2); unit1 = 1; calculateValue2()}); 
        this.m1.addEventListener('click', () => {changeHint1(this.m1); unit1 = 0.001; calculateValue2()});
        this.m2.addEventListener('click', () => {changeHint2(this.m2); unit2 = 1000; calculateValue2()});
        this.mile1.addEventListener('click', () => {changeHint1(this.mile1); unit1 = 1/0.621; calculateValue2()});
        this.mile2.addEventListener('click', () => {changeHint2(this.mile2); unit2 = 0.621; calculateValue2()});
        this.mMile1.addEventListener('click', () => {changeHint1(this.mMile1); unit1 = 1/0.54; calculateValue2()});
        this.mMile2.addEventListener('click', () => {changeHint2(this.mMile2); unit2 = 0.54; calculateValue2()});
    };
};
class CreateSquareUnits { //работает
    constructor() {
        clearUnits();
        unit1 = 1; unit2 = 1;
        hint1.textContent = 'Метр²'; hint2.textContent = 'Метр²';
        this.makeElements();
        this.initEvents();
    };
    makeElements() {
        this.column1 = document.createElement('div'); this.column1.classList.add('column');
        this.column2 = document.createElement('div'); this.column2.classList.add('column');
        this.m1 = document.createElement('button'); this.m1.textContent = 'Метр²';
        this.m2 = document.createElement('button'); this.m2.textContent = 'Метр²';
        this.cm1 = document.createElement('button'); this.cm1.textContent = 'Сантиметр²';
        this.cm2 = document.createElement('button'); this.cm2.textContent = 'Сантиметр²';
        this.mm1 = document.createElement('button'); this.mm1.textContent = 'Миллиметр²';
        this.mm2 = document.createElement('button'); this.mm2.textContent = 'Миллиметр²';
        this.ar1 = document.createElement('button'); this.ar1.textContent = 'Ар (сотка)';
        this.ar2 = document.createElement('button'); this.ar2.textContent = 'Ар (сотка)';
        this.ga1 = document.createElement('button'); this.ga1.textContent = 'Гектар';
        this.ga2 = document.createElement('button'); this.ga2.textContent = 'Гектар';
        this.column1.appendChild(this.m1); this.column1.appendChild(this.cm1); this.column1.appendChild(this.mm1); this.column1.appendChild(this.ar1); this.column1.appendChild(this.ga1);
        this.column2.appendChild(this.m2); this.column2.appendChild(this.cm2); this.column2.appendChild(this.mm2); this.column2.appendChild(this.ar2); this.column2.appendChild(this.ga2);
        unitsMenu.appendChild(this.column1); unitsMenu.appendChild(this.column2);
    };
    initEvents() {
        this.m1.addEventListener('click', () => {changeHint1(this.m1); unit1 = 1; calculateValue2()});
        this.m2.addEventListener('click', () => {changeHint2(this.m2); unit2 = 1; calculateValue2()});
        this.cm1.addEventListener('click', () => {changeHint1(this.cm1); unit1 = 0.0001; calculateValue2()});
        this.cm2.addEventListener('click', () => {changeHint2(this.cm2); unit2 = 10000; calculateValue2()});
        this.mm1.addEventListener('click', () => {changeHint1(this.mm1); unit1 = 0.000001; calculateValue2()});
        this.mm2.addEventListener('click', () => {changeHint2(this.mm2); unit2 = 1000000; calculateValue2()});
        this.ar1.addEventListener('click', () => {changeHint1(this.ar1); unit1 = 100; calculateValue2()});
        this.ar2.addEventListener('click', () => {changeHint2(this.ar2); unit2 = 0.01; calculateValue2()});
        this.ga1.addEventListener('click', () => {changeHint1(this.ga1); unit1 = 10000; calculateValue2()});
        this.ga2.addEventListener('click', () => {changeHint2(this.ga2); unit2 = 0.0001; calculateValue2()});
    };
};
class CreateVolumeUnits { // работает
    constructor() {
        clearUnits();
        unit1 = 1; unit2 = 1;
        hint1.textContent = 'Метр³'; hint2.textContent = 'Метр³';
        this.makeElements();
        this.initEvents();
    };
    makeElements() {
        this.column1 = document.createElement('div'); this.column1.classList.add('column');
        this.column2 = document.createElement('div'); this.column2.classList.add('column');
        this.m1 = document.createElement('button'); this.m1.textContent = 'Метр³';
        this.m2 = document.createElement('button'); this.m2.textContent = 'Метр³';
        this.cm1 = document.createElement('button'); this.cm1.textContent = 'Сантиметр³';
        this.cm2 = document.createElement('button'); this.cm2.textContent = 'Сантиметр³';
        this.mm1 = document.createElement('button'); this.mm1.textContent = 'Миллиметр³';
        this.mm2 = document.createElement('button'); this.mm2.textContent = 'Миллиметр³';
        this.l1 = document.createElement('button'); this.l1.textContent = 'Литр';
        this.l2 = document.createElement('button'); this.l2.textContent = 'Литр'; 
        this.ml1 = document.createElement('button'); this.ml1.textContent = 'Миллилитр';
        this.ml2 = document.createElement('button'); this.ml2.textContent = 'Миллилитр';
        this.column1.appendChild(this.m1); this.column1.appendChild(this.cm1); this.column1.appendChild(this.mm1); this.column1.appendChild(this.l1); this.column1.appendChild(this.ml1);
        this.column2.appendChild(this.m2); this.column2.appendChild(this.cm2); this.column2.appendChild(this.mm2); this.column2.appendChild(this.l2); this.column2.appendChild(this.ml2);
        unitsMenu.appendChild(this.column1); unitsMenu.appendChild(this.column2);
    };
    initEvents() {
        this.m1.addEventListener('click', () => {changeHint1(this.m1); unit1 = 1; calculateValue2()});
        this.m2.addEventListener('click', () => {changeHint2(this.m2); unit2 = 1; calculateValue2()});
        this.cm1.addEventListener('click', () => {changeHint1(this.cm1); unit1 = 10**(-6); calculateValue2()});
        this.cm2.addEventListener('click', () => {changeHint2(this.cm2); unit2 = 10**6; calculateValue2()});
        this.mm1.addEventListener('click', () => {changeHint1(this.mm1); unit1 = 10**(-9); calculateValue2()});
        this.mm2.addEventListener('click', () => {changeHint2(this.mm2); unit2 = 10**9; calculateValue2()});
        this.l1.addEventListener('click', () => {changeHint1(this.l1); unit1 = 0.001; calculateValue2()});
        this.l2.addEventListener('click', () => {changeHint2(this.l2); unit2 = 1000; calculateValue2()});
        this.ml1.addEventListener('click', () => {changeHint1(this.ml1); unit1 = 10**(-6); calculateValue2()});
        this.ml2.addEventListener('click', () => {changeHint2(this.ml2); unit2 = 10**6; calculateValue2()});
    };
};
const firstInp = document.getElementById('firstInp');
const secondInp = document.getElementById('secondInp');
let unit1; let unit2;
const hint1 = document.getElementById('firstHint');
const hint2 = document.getElementById('secondHint');
const unitsMenu = document.querySelector('.units');
const changeBtn = document.getElementById('change');

const prunk = new Audio('prunk.mp3'); prunk.volume = 1;

const weightBtn = document.getElementById('weight');
const tempBtn = document.getElementById('temperature');
const angleBtn = document.getElementById('angle');
const distBtn = document.getElementById('distance');
const squareBtn = document.getElementById('square');
const volumeBtn = document.getElementById('volume');

const allBtns = [weightBtn, tempBtn, angleBtn, distBtn, squareBtn, volumeBtn];
const tempUnits = ['Цельсий', 'Фаренгейт', 'Кельвин']

const lightTheme = document.getElementById('light');
const darkTheme = document.getElementById('dark');
const root = document.documentElement;
function calculateValue2() {
    changeBtn.textContent = '=';
    const result = secondInp.value = parseInt(firstInp.value) * unit1 * unit2
    if (result - Math.round(result) !== 0) {
        const result1 = parseFloat(result.toFixed(9));
        if (result !== result1) {changeBtn.textContent = '≈'}; 
        secondInp.value = result1;
    } else {secondInp.value = result};
};
function calculateValue1() {
    const result = firstInp.value = (parseInt(secondInp.value) / unit1 / unit2);
    changeBtn.textContent = '=';
    if (result - Math.round(result) !== 0) {
        const result1 = parseFloat(result.toFixed(9));
        if (result !== result1) {changeBtn.textContent = '≈'}; 
        firstInp.value = result1;
    } else {firstInp.value = result};
};
function calculateTemp1() {
    changeBtn.textContent = '=';
    if (hint1.textContent === hint2.textContent) {firstInp.value = secondInp.value; return};
    var temp = parseInt(secondInp.value);
    if (hint2.textContent === 'Фаренгейт') {temp = (parseInt(secondInp.value) - 32) * (5/9)}
    else if (hint2.textContent === 'Кельвин') {temp = parseInt(secondInp.value - 273.15)};

    if (hint1.textContent === 'Фаренгейт') {temp = (9/5) * temp + 32}
    else if (hint1.textContent === 'Кельвин') {temp = temp - 273.15};
    let temp1 = parseFloat(temp.toFixed(5));
    if (temp1 !== temp) {changeBtn.textContent = '≈'};
    firstInp.value = temp1;
}
function calculateTemp2() {
    changeBtn.textContent = '=';
    if (hint1.textContent === hint2.textContent) {secondInp.value = firstInp.value; return};
    var temp = parseInt(firstInp.value);
    if (hint1.textContent === 'Фаренгейт') {temp = (parseInt(firstInp.value) - 32) * (5/9)}
    else if (hint1.textContent === 'Кельвин') {temp = parseInt(firstInp.value - 273.15)};

    if (hint2.textContent === 'Фаренгейт') {temp = (9/5) * temp + 32}
    else if (hint2.textContent === 'Кельвин') {temp -= 273.15};
    let temp1 = parseFloat(temp.toFixed(5));
    if (temp1 !== temp) {changeBtn.textContent = '≈'};
    secondInp.value = temp1;
}
function clearUnits() {
    unitsMenu.innerHTML = '';
    firstInp.value = 0; secondInp.value = 0;
};
function changeHint1(el) {hint1.textContent = el.textContent};
function changeHint2(el) {hint2.textContent = el.textContent};
function selectBtn(el) {
    allBtns.forEach((e) => {e.classList.remove('onclick')});
    el.classList.add('onclick');
};
function saveTheme(value) {
    localStorage.setItem('value', value);
};
function loadTheme() {
    value = localStorage.getItem('value') || 1;
    if (value || value === 'white') {lightTheme.checked = true};
    if (value === 'black') {darkTheme.checked = true; root.style.setProperty('--theme-col', '#252525ff')};
};

firstInp.addEventListener('input', () => {
    if (!firstInp.value) {firstInp.value = 0; secondInp.value = 0};
    firstInp.value = parseInt(firstInp.value);
    if (tempUnits.includes(hint1.textContent)) {calculateTemp2(); return};
    calculateValue2();
});
secondInp.addEventListener('input', () => {
    secondInp.value = secondInp.value.trim();
    if (!secondInp.value) {firstInp.value = 0; secondInp.value = 0};
    secondInp.value = parseInt(secondInp.value);
    if (tempUnits.includes(hint1.textContent)) {calculateTemp1(); return};
    calculateValue1();
});

weightBtn.addEventListener('click', () => {const sas = new CreateWeightUnits(); selectBtn(weightBtn)});
tempBtn.addEventListener('click', () => {const sas = new CreateTempUnits(); selectBtn(tempBtn)});
angleBtn.addEventListener('click', () => {const sas = new CreateAngleUnits(); selectBtn(angleBtn)});
distBtn.addEventListener('click', () => {const sas = new CreateDistUnits(); selectBtn(distBtn)});
squareBtn.addEventListener('click', () => {const sas = new CreateSquareUnits(); selectBtn(squareBtn)});
volumeBtn.addEventListener('click', () => {const sas = new CreateVolumeUnits(); selectBtn(volumeBtn)});

changeBtn.addEventListener('click', () => {prunk.play()
    /*
    const inp1 = firstInp.value; const inp2 = secondInp.value;
    const hintValue1 = hint1.textContent; const hintValue2 = hint2.textContent;
    let unit = unit1;
    firstInp.value = inp2; secondInp.value = inp1;
    hint1.textContent = hintValue2; hint2.textContent = hintValue1;
    unit1 = unit2; unit2 = unit; */
});
lightTheme.addEventListener('change', () => {
    if (lightTheme.checked) {root.style.setProperty('--theme-col', '#fff')};
    saveTheme('white');
});
darkTheme.addEventListener('change', () => {
    if (darkTheme.checked) {root.style.setProperty('--theme-col', '#252525ff')};
    saveTheme('black');
});
loadTheme();
weightBtn.click();