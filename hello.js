document.getElementById("greet-button").addEventListener("click", function(){
    const name = prompt("Enter your name:");
    const greeting = `Hello, ${name}!`;
    document.getElementById("personalized-greeting").textContent = greeting;
});