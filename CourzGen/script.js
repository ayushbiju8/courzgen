const slide1 = document.querySelector(".carouselslide1");
const slide2 = document.querySelector(".carouselslide2");
const slide3 = document.querySelector(".carouselslide3");

let activeslide=1;
const changeActive = ()=>{
    if (activeslide==3) {
        activeslide=1;
    }else{
        activeslide++
    }
    console.log(activeslide);
}
displayChange = ()=>{
    if (activeslide == 1) {
        slide1.classList.add("visible");
        slide1.classList.add("carouselslide1");
        slide1.classList.remove("hidden");
    
        slide3.classList.add("hidden");
        slide3.classList.remove("visible");
    
        slide2.classList.add("hidden");
        slide2.classList.remove("visible");
    } else if (activeslide == 2) {
        slide1.classList.add("hidden");
        slide1.classList.remove("visible");
        slide1.classList.remove("carouselslide1");
        
    
        slide2.classList.add("visible");
        slide2.classList.remove("hidden");
    
        slide3.classList.add("hidden");
        slide3.classList.remove("visible");
    } else {
        slide1.classList.add("hidden");
        slide1.classList.remove("visible");
        slide1.classList.remove("carouselslide1");
        
    
        slide2.classList.add("hidden");
        slide2.classList.remove("visible");
    
        slide3.classList.add("visible");
        slide3.classList.remove("hidden");
    }
    
}
const dots = document.querySelectorAll('.dot'); // Get all the dots

function updateDots() {
    dots.forEach((dot, index) => {
        // Remove 'active' class from all dots
        dot.classList.remove('active');
    });

    // Add 'active' class to the current active slide's corresponding dot
    dots[activeslide - 1].classList.add('active');
}
setInterval(()=>{
    changeActive();
    displayChange();
    updateDots();
},5000)






















// Select the hamburger element
let ham = document.querySelector(".hamburger");
ham.addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle("none");
    console.log("vjdfv")
});
















function animateNumber(target, endValue, duration) {
    const element = document.getElementById(target);
    let startValue = 0;
    let startTime = null;
    let hasAnimated = false;

    // Easing function for a smooth transition
    function easeOutExpo(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    function updateNumber(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Get progress percentage

        // Increment the number using easing
        const value = Math.floor(startValue + (endValue - startValue) * easeOutExpo(progress));

        // Format the number with commas as thousand separators
        element.textContent = value.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(updateNumber); // Continue the animation
        }
    }

    // Check if the element is visible in the viewport
    function isElementInView() {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Periodically check if the element is in view and start animation if it is
    function checkVisibility() {
        if (isElementInView() && !hasAnimated) {
            requestAnimationFrame(updateNumber); // Start the animation
            hasAnimated = true; // Prevent multiple animations
        } else if (!hasAnimated) {
            requestAnimationFrame(checkVisibility); // Keep checking until the element is in view
        }
    }

    // Start checking visibility when the page is loaded
    window.addEventListener("load", () => {
        requestAnimationFrame(checkVisibility);
    });
}

// Animate the number from 0 to 2,245,341 over 3 seconds when the div is in view
animateNumber("abc", 2245341, 3000);
animateNumber("def", 46328, 3000);
animateNumber("ghi", 828867, 3000);
animateNumber("jkl", 1926436, 3000);
