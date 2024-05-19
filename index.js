document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    button.addEventListener("click", calculateAge);
});

function calculateAge() {
    const birthdayInput = document.getElementById("birthday").value;
    const resultElement = document.getElementById("result");

    if(birthdayInput) {
        const birthday = new Date(birthdayInput);
        const today = new Date();
        
        let age = today.getFullYear() - birthday.getFullYear();
        const monthDifference = today.getMonth() - birthday.getMonth();
        const dayDifference = today.getDate() - birthday.getDate();

        if(monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        resultElement.textContent = Your age is ${age} years old;
    } else {
        resultElement.textContent = "Please enter a valid date.";
    }
}