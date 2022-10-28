


const form= document.getElementById('form-area');
form.addEventListener('submit', (event) => {
 event.preventDefault();
 const textArea=document.querySelector("#text")
 const paragragh=document.getElementById("paragragh")
 let valueEl=textArea.value;
 paragragh.textContent=valueEl
    
});


