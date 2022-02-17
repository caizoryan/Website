document.getElementById("noot").addEventListener("click" , scrolll);

function scrolll(){
    document.querySelector('.featured').scrollIntoView({ 
        behavior: 'smooth' 
      });
};