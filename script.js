const userInput = document.getElementById('userInput');
const checkButton = document.getElementById('checkPalindrome');
const result = document.getElementById('result');

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

checkButton.addEventListener('click', () => {
  const inputValue = userInput.value;
  if (inputValue) {
    if (isPalindrome(inputValue)) {
      result.textContent = `"${inputValue}" is a palindrome! 🎉`;
      result.style.color = 'green';
    } else {
      result.textContent = `"${inputValue}" is not a palindrome.`;
      result.style.color = 'red';
    }
  } else {
    result.textContent = 'Please enter a word or phrase';
    result.style.color = 'orange';
  }
});
