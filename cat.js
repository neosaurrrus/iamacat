const walk = 100;
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const cat = hero.querySelector(".cat");
hero.addEventListener("mousemove", mouseShadow)

function mouseShadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero; //gets width and height of Hero
    let { offsetX: x, offsetY: y } = e; //gets the xy of cursor;

    if (this !== e.target) { // This is what you listened on. e.target is what you are current targetting
        x = x + e.target.offsetLeft;   //add the left coordinate to the X
        y = y + e.target.offsetTop; //add the top coordinate to the Y
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2)) //first bit returns a value between 0-100, second makes it -50 to 50
    const yWalk = Math.round((y / height * walk) - (walk / 2))
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,0,0.7)
                            ,${-xWalk}px ${yWalk}px 0 rgba(0,255,0,0.7)
                            ,${xWalk}px ${-yWalk}px 0 rgba(255,0,255,0.7)
                            ,${-xWalk}px ${-yWalk}px 0 rgba(0,0,255,0.7)`
    hero.style.background = `rgb(${xWalk + walk},${yWalk + walk},${xWalk + yWalk + walk})`
    cat.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,0,0.7)
                            ,${-xWalk}px ${yWalk}px 0 rgba(0,255,0,0.7)
                            ,${xWalk}px ${-yWalk}px 0 rgba(255,0,255,0.7)
                            ,${-xWalk}px ${-yWalk}px 0 rgba(0,0,255,0.7)`
}