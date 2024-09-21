document.addEventListener('DOMContentLoaded', (event) => {
  const inputField=document.getElementById('inputField');

  const placeholderText= "Explore Sumeet's Projects!";
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

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');

      // Close all accordion items
      accordionItems.forEach(item => {
        item.classList.remove('open');
        item.querySelector('.accordion-content').style.display = 'none';
        item.querySelector('.toggle-icon').innerText = '+';
      });

      // Open the clicked item if not already open
      if (!isOpen) {
        item.classList.add('open');
        content.style.display = 'block';
        title.querySelector('.toggle-icon').innerText = '-';
      }
    });
  });
});

function downloadResume() {
  const link = document.createElement('a');
  link.href = 'path/to/your-resume.pdf';  // Replace with the actual path to your resume
  link.download = 'Sumeet_Resume.pdf';    // Optional: Specify a default name for the downloaded file
  link.click();
}