
const form = document.forms['search'];
const input = form.elements.searchInput;
input.value = 'Search Here';
form.addEventListener ('submit', search, false);

function search(event) {
   alert(`You Searched for: ${input.value}`);
   event.preventDefault();
}

input.addEventListener('focus', function(){
   if (input.value==='Search Here') {
       input.value = '' 
   }
}, false);
input.addEventListener('blur', function(){
   if(input.value === '') {
       input.value = 'Search Here';
   } }, false);

   const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}