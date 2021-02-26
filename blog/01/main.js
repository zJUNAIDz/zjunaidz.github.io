let checkbox = document.querySelector('input[name ="theme"]');
checkbox.addEventListener('change',function (){
  if (this.checked) {
    document.documentElement.setAttribute('data-theme','dark');
  }else{
    document.documentElement.setAttribute('data-theme','light');
  }
});
alert('The dark mode is not so good I think...toggle it by pressing that moon Icon');