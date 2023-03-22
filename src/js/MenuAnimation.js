import gsap from 'gsap';

function MenuJs(){
    const menu = document.querySelector('.Menu')
    if(menu.classList.contains('active_menu')){
      gsap.fromTo(".Menu__item", {
        opacity:1, x: 0
      }, 
      {
        opacity:0, 
        x:50, 
        duration:0.5, 
        onComplete: () => {menu.classList.remove('active_menu')},
        stagger:{
          each: 0.1,
          yoyo: false, 
        }
      });
    }
    else{
      menu.classList.add('active_menu')
      gsap.fromTo(".Menu__item", {opacity:0, x: 50}, 
      {opacity:1, x:0, duration:1, stagger:{
          each: 0.1,
          yoyo: false, 
        }
      });
    }
  }

export default MenuJs