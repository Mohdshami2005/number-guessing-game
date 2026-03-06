# number-guessing-game
A simple **Number Guessing Game** built using HTML, CSS, and JavaScript.

The application generates a random number between 1 and 100, and the player need to  guess the correct number within 10 attempts. The game also provides hints whether the guess is **too high** or **too low**.
# Features
<ul>
<li>Random number generation between 1 and 100.</li>
<li>Maximum 10 attempts to guess the number.</li>
<li>Displays previous guesses.</li>
<li>Shows number of remaining guesses.</li>
<li>Provides hints Too High / Too Low.</li>
<li>Displays the correct number when the game ends</li>
<li>Option to start a new game</li>
</ul>
<h2>How it Works - </h2>

1. The Application generates a random number between 1 and 100 using JavaScript.
2. The user enters a number in the input field.
3. When the Submit Guess button is clicked, JavaScript captures the form submission.
4. The guess is validated to ensure it is a number between 1 and 100.
5. The game checks if the guess is:
   - Correct
   - Too High
   - Too Low
6. The guess is stored in previous guesses and the number of remaining attempts decrease.
7. If the user runs out of attempts, the game displays the correct number.
8. A Start New Game button appears to restart the game.<br><br>
#live demo - https://mohdshami2005.github.io/number-guessing-game/
