import gsap from "gsap"

export default function initAnimationCursor(){
    gsap.fromTo('.cursor', {scale: 4,backgroundColor:"rgba(255, 255, 255, 0.337)"},{scale:1,backgroundColor:"white",duration: 0.5})
    const links = Array.from(document.querySelectorAll('.link_cursor'))
    console.log(links);
    links.forEach(link  => {
        link.addEventListener('mouseenter', function(){
            gsap.fromTo('.cursor', {scale: 1, backgroundColor:"white"},{scale:4,backgroundColor:"rgba(255, 255, 255, 0.337)",duration: 0.5})
        })
        link.addEventListener('mouseleave', function(){
            gsap.fromTo('.cursor', {scale: 4,backgroundColor:"rgba(255, 255, 255, 0.337)"},{scale:1,backgroundColor:"white",duration: 0.5})
        })
    })

    const links2 = Array.from(document.querySelectorAll('.link_cursor_type2'))
    console.log(links);
    links2.forEach(link  => {
        link.addEventListener('mouseenter', function(){
            gsap.fromTo('.cursor', {height:"20px",width:"20px", backgroundColor:"white",border:"solid 0px white"},{height:"120px",width:"120px",backgroundColor:"transparent", border:"solid 1px white",duration: 0.5})
        })
        link.addEventListener('mouseleave', function(){
            gsap.fromTo('.cursor', {height:"120px",width:"120px",backgroundColor:"transparent",border:"solid 1px white"},{height:"20px",width:"20px",backgroundColor:"white",border:"solid 0px white",duration: 0.5})
        })
    })
}