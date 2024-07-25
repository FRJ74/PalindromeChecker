/* Check a value has been entered */
const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');

checkBtn.addEventListener('click', function() 
{

    const replaced = textInput.value.replace(/[^A-Za-z0-9]/g, "")

  if(textInput.value === '') {
    alert("Please input a value");
  } else if(textInput.value.length === 1) {
      result.innerText = `${textInput.value} is a palindrome`;
  } else if(replaced === [...replaced].reverse().join("")) {
    result.innerText = `${textInput.value} is a palindrome`;
  } 
});