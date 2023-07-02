const imgContainer = document.querySelector(".container")
const img = document.querySelector(".key-img")

imgContainer.addEventListener('mousemove' , (e)=>{
    // console.log(e.clientX, e.clientY, e.target.offsetLeft, e.target.offsetTop);

    const xPosition = e.clientX - e.target.offsetLeft;
    const yPosition = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${xPosition}px ${yPosition}px`
    img.style.transform = 'scale(2)'
})

imgContainer.addEventListener("mouseleave" , () => {
    img.style.transformOrigin = 'center'
    img.style.transform = 'scale(1)'
})