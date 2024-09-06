document.addEventListener('DOMContentLoaded', (event) => {
  const inputField=document.getElementById('inputField');

  const placeholderText= "Lets Connect!";
  let index=0;
  let isRunning=true;

  function updatePlaceholder(){
    inputField.placeholder=placeholderText.substring(0,index);
    index++;

    if(index>placeholderText.length){
      isRunning=false
      setTimeout(() =>{
        index=0;
        isRunning=true;
      },1000);
    }
  }

  setInterval(updatePlaceholder,150);

});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
  };

  fetch('/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
      document.getElementById('contact-form').reset();
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
