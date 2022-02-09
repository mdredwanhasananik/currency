document.querySelector('button').addEventListener('click',function () {
  let amount = document.querySelector('#amount').value;
  let tick = document.querySelector('#tick').value;
  
  if (amount&&tick){
    switch (tick) {
      case 'USD':
        rate = 82;
        break;
      case 'Pound':
        rate = 115;
        break;
      case 'Euro':
        rate = 67;
        break;
      case 'won':
        rate = 0.075;
        break;
    }
    
    let solve = rate * amount;
    
    
    
    document.querySelector('h4').innerHTML = amount + ' ' + tick + '=' + solve + ' BDT';
  }else{
    document.querySelector('h4').innerHTML='<span style="color:red;font-size: 30px;">Fill the above field!</span>';
  }
  
  
  
})