document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: 
        ["Attending Rutgers University",
         "Designing more projects", 
         "Lifting weights at the gym", 
         "Playing Pokemon Showdown"], // Text to type
        typeSpeed: 50, // Typing speed
        startDelay: 500,
        backSpeed: 1000, // Backspacing speed
        backSpeed: 35,
        loop: true, // Repeat the typing effect
        cursorChar: '', // The cursor character
        showCursor: true,
    };
    new Typed('.typewriter-effect', options); // Target the .typewriter-effect class
});

// var typed = new Typed(".typewriter-effect", {
//     strings: 
//     ["Attending Rutgers University",
//      "Designing more projects", 
//      "Lifting weights at the gym", 
//      "Playing Pokemon Showdown"], // Text to type
//     typeSpeed: 50, // Typing speed
//     startDelay: 500,
//     backSpeed: 1000, // Backspacing speed
//     backSpeed: 35,
//     loop: true, // Repeat the typing effect
//     cursorChar: '_', // The cursor character
//     showCursor: true,
// })

