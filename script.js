let button = document.querySelector("#mode"); //select button with id "#mode"

let span = document.querySelector("span");  //select span

if(localStorage.getItem('theme')){
  if(localStorage.getItem('theme') == 'dark') {
    modeSombre();
  }
}

button.addEventListener('click', () => {     // detect when click on the button
  if(document.body.classList.contains('dark')) {  // verify if class body has element dark
    document.body.className = '';  
    span.textContent = 'Dark theme';
    localStorage.setItem('theme', 'light');
  }
  else {
    modeSombre();
  }
});

function modeSombre() {
  document.body.className = 'dark';
  span.textContent = 'Light theme';
  localStorage.setItem('theme', 'dark');
}