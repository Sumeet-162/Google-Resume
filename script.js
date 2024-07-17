document.addEventListener('DOMContentLoaded', (event) => {
  const inputField=document.getElementById('inputField');

  const placeholderText= "What does a good employee look like?";
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