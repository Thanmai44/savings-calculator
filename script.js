// Initialize Feather icons
feather.replace();

// Roadmap Step 1: Select DOM elements
const goalAmount = document.getElementById("goal-amount");
const currentSavings = document.getElementById("current-savings");
const monthlyContribution = document.getElementById("monthly-contribution");
const calculatebtn = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");

// Roadmap Step 2: Add event listener for calculate button
calculatebtn.addEventListener("click", ()=>{
    // Roadmap Step 3: Validate user input
    const savingsGoal = parseFloat(goalAmount.value);
    const savingsAmount = parseFloat(currentSavings.value);
    const monthlyContributionAmount = parseFloat(monthlyContribution.value);
    if(isNaN(savingsGoal) || isNaN(savingsAmount) || isNaN(monthlyContributionAmount)){
        result.textContent = "Please enter valid numbers";
        result.classList.add("show");
        return;
    }
    // Roadmap Step 4: Calculate remaining amount and months to reach goal
    const remainingAmount = savingsGoal - savingsAmount;
    const monthsToGoal = Math.ceil(remainingAmount / monthlyContributionAmount);
    const progress = (savingsAmount / savingsGoal) * 100;

    // Roadmap Step 5: Update progress bar based on current savings
    progressBar.style.width = `${progress}%`;
    result.classList.remove("show");
    setTimeout(() => {
        if(savingsAmount>=savingsGoal){
            result.innerHTML = `Congratulations! You have reached your savings goal of $${savingsGoal}!!!`;
        }
        else{
            result.innerHTML = `You have ${monthsToGoal} months to reach your savings goal of $${savingsGoal}`;
        }
        result.classList.add("show");
    },100);
});




// Roadmap Step 6: Display result based on the savings progress

// Roadmap Step 7: Handle UI updates and transitions for result display