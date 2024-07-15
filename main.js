
// const TopAbout = document.getElementById('top-about')

// TopAbout.addEventListener('click',(e)=>{
//   document.getElementsByClassName('about').style.display ='block';
//   console.log('aaaaa')
// });

document.getElementById('top-about').addEventListener('click',function(event){
  event.preventDefault();
  document.querySelector('.right').style.display = 'block';
  document.querySelector('.right').scrollIntoView({behavior:'smooth'});
});

document.getElementById('top-skill').addEventListener('click',function(event){
  event.preventDefault();
  document.querySelector('.skills').style.display = 'block';
  document.querySelector('.skills').scrollIntoView({behavior:'smooth'});
});

document.getElementById('top-project').addEventListener('click',function(event){
  event.preventDefault();
  document.querySelector('.projects').style.display = 'block';
  document.querySelector('.projects').scrollIntoView({behavior:'smooth'});
});

document.getElementById('top-contact').addEventListener('click',function(event){
  event.preventDefault();
  document.querySelector('.details').style.display = 'block';
  document.querySelector('.details').scrollIntoView({behavior:'smooth'});
});