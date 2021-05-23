let btn = document.getElementById('btn');

  
btn.addEventListener('click', function (){
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
 let output =  document.getElementById('result');
 let taunt = document.getElementById('taunt');
 let result = weight/height**2;
 output.innerText = ` Your approximate BMI is ${result.toFixed(1)}.`;
 if (result < 18.5) {
   taunt.innerText = 'Seriously?Don\'t you fly when someone blows?🤸';
 }else if(result >= 18.5 && result <= 24.9  ){
   taunt.innerText = 'You\'re Healthy weighed.🍎'
 }else if(result > 25 && result <=25.9){
   taunt.innerText = 'Go to the GYM and loose some fat man.🏃'
 }else if (result > 30){
   taunt.innerHTML = 'Stop it, Get some help. Consult the nearest Doctor ASAP. '
 }
});