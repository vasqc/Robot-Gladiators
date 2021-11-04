var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;

// Check to see if the value of the playerHealth variable is greater than 0
if (playerHealth === 0) {
    console.log("This will not run.");
}
else {
    console.log("This will run instead.")
}
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at one like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player choses to fight, then fight 
if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attecked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // remove player's health by subtractinf the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
    );
    // Check players health
    if (playerHealth <= 0) {
        window.alert (playerName = " has Died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player chooses to skip
}   else if (promptFight === "skip" || promptFight === "SKIP" ) {
    //comfirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by funning fight() again
    else {
        fight ();
    }
    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
}
};


fight ();