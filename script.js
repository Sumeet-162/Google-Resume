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
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Prepare data for API
  const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
  };

  // API endpoint URL with your form ID
  const apiUrl = `https://api.web3forms.com/submit?form_id=${encodeURIComponent('contact-form')}`;

  // Send POST request to API
  fetch(apiUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Message sent successfully!');
      } else {
          alert('Failed to send message. Please try again.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
  });
});


