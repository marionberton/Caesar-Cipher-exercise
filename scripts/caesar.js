const form = document.getElementById('form');
const output = document.getElementById('result');

//Someone type their input.Then, press the submit button. As a result, the encrypted text is diplayed. 
//We need to use an event handler, once the button is clicked it give access to the text that was type.



form.addEventListener ("submit", e => {
    e.preventDefault();//we dont want to submit the form
    output.innerHTML = [... form.inputtext.value ]
      .map(el => caesarCipher(el)).join('');
  } //access the input message, turn the string into an array with spread operator (es6 js)
);//map call function on each element in array and creates new array annd join to convert back into string.




const alphabet = [
  'a','b','c','d','e','f',
  'g','h','i','j','k','l',
  'm','n','o','p','q','r',
  's','t','u','v','w','x',
  'y','z'
];

const caesarCipher = (el) => {
  const offset = Number(form.offset.value);
  if (alphabet.includes(el.toLowerCase())) { 
    const index = alphabet.indexOf(el.toLowerCase()); // insuring everything is lower case
    const newIndex = (index + offset) % 26; //the modulo gives us the remainder, so if it's over 25 it will loop back
    return alphabet[newIndex] 
  } else { 
		return el 
	} 
};
module.exports = {
	form, output, caesarCipher, offset, index, newIndex, alphabet
};
