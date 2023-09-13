// output elements
const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');
const submitBtn = document.querySelector('.submit-btn');

// input elements
let isValid = false;
const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');

// error elements
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
const labelDay = document.querySelector('.label-day');
const labelMonth = document.querySelector('.label-month');
const labelYear = document.querySelector('.label-year');

submitBtn.addEventListener('click', CalculateDate)

inputDay.addEventListener('input', (e) => {
    if(+inputDay.value > 31) {
        errorDay.textContent = "Must be a valid day";
        inputDay.style.outline = "1px solid red";
        labelDay.style.color = "red";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorDay.textContent = "";
        inputDay.style.outline = "";
        labelDay.style.color = "";
    }
    if(+inputDay.value === 0) {
        errorDay.textContent = "This field is required";
        inputDay.style.outline = "1px solid red";
        labelDay.style.color = "red";
        isValid = false;
        return;
    }
    else{
        errorDay.textContent = "";
    }
});

inputMonth.addEventListener('input', (e) => {
    if(+inputMonth.value > 12) {
        errorMonth.textContent = "Must be a valid month";
        inputMonth.style.outline = "1px solid red";
        labelMonth.style.color = "red";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorMonth.textContent = "";
        inputMonth.style.outline = "";
        labelMonth.style.color = "";
    }
    if(+inputMonth.value === 0) {
        errorMonth.textContent = "This field is required";
        inputMonth.style.outline = "1px solid red";
        labelMonth.style.color = "red";
        isValid = false;
        return;
    }
    else{
        errorMonth.textContent = "";
    }
});

inputYear.addEventListener('input', (e) => {
    if(+inputYear.value > 2023) {
        errorYear.textContent = "Must be a valid year";
        inputYear.style.outline = "1px solid red";
        labelYear.style.color = "red";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorYear.textContent = "";
        inputYear.style.outline = "";
        labelYear.style.color = "";
    }
    if(+inputYear.value === 0) {
        errorYear.textContent = "This field is required";
        inputYear.style.outline = "1px solid red";
        labelYear.style.color = "red";
        isValid = false;
        return;
    }
    else{
        errorYear.textContent = "";
    }
});

function CalculateDate(){
    if(isValid){
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYear = ageDate.getUTCFullYear() -1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() -1;
        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYear;
    }
    else{
        alert('Please input your data');
    }
}

