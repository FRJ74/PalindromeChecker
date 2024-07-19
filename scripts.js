/* Check a value has been entered */
const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkBtn.addEventListener('click', function() 
{
  if(textInput.value === '') {
    alert('Please input a value');
  }
});