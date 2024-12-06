const submit = document.getElementById('submit');
const box1 = document.getElementById('info1');
const box2 = document.getElementById('info2');
const box3 = document.getElementById('info3');
const name = document.getElementById('name-to-add');
const loca = document.getElementById('location-to-add');

submit.addEventListener("click", submitForm);

function submitForm(event){
    console.log("clicked");
    event.preventDefault();
    console.log(loca.value);
    if(box1.checked) console.log(box1.value);
    if(box2.checked) console.log(box2.value);
    if(box3.checked) console.log(box3.value);
}