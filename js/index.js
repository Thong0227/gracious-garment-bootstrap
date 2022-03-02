var dropdownBtn = document.querySelector('.dropdown');
var prevBtn = document.querySelector('.prev');
var expandLeft = document.querySelector('.expand-left');

function showleftContent(){
    expandLeft.classList.toggle('hide');
}

dropdownBtn.addEventListener('click',showleftContent);
prevBtn.addEventListener('click',showleftContent);

expandLeft.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) showleftContent();
  });

//expandLeft.addEventListener('wheel', function(e) {  
    //e.preventDefault();
    // add custom scroll code if you want
//});

$('.carousel').carousel({
    interval: 3000
  })