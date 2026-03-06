// so firstly we need to generate a random number from 1 to 100 that the user will guess.
    let randomNumber=Math.round((100*Math.random()))+1;
    // now we need to prevent the default action of the submit button so, that the form don get reset and we can apply conditions for checking the guess.
    const form=document.querySelector("#mainform");
    const user_input=document.querySelector("#num");
    const prev_input=document.querySelector("#previous");
    const remain_guesses=document.querySelector("#remain");
    const suggestion=document.querySelector("#lowOrHigh");
    let prev_guesses=[]; // it will store all the previous gusse so that we can 
    // tell user to not to enter these numbers again.
    let num_guesses=0; // store number of guesses.
    let playGame=true; // we will make it false when all 10 gusses are guessed.
    // thus varaible is very useful like in a game if coins are 0 you can't play the game so we can make it false.
    if(playGame==true){
        form.addEventListener("submit",function(e){
            e.preventDefault();
            const guess=parseInt(user_input.value);
            console.log(guess);
            validate_guess(guess);
        })
    }
    function validate_guess(guess){
        // to check wheather guess is a valid guess or not like : it should be a number, b/w 1 and 100;
        if(isNaN(guess)){
            alert("enter a valid Number");
        }
        else if(guess>100 || guess<1){
            alert("please enter the number in range of 1 to 100");
        }
        else{
            prev_guesses.push(guess);
            if(num_guesses==9){
                remain_guesses.innerHTML=`${0}`;
                suggestion.innerHTML=(`Game Over , The  Correct Random Number was <span style="background-color:yellow; color:black"> ${randomNumber}</span>`);
                end_game();
            }
            else{
                check_guess(guess);
                display_guess(guess);
            }
        }
    }
    function check_guess(guess){
        // to check if guess is low or high.
        if(guess===randomNumber){
            display_message("You guessed the Number right");
            end_game();
        }
        else if(guess>randomNumber){
            display_message(`${guess} is  too High`);
        }
        else{
            display_message(`${guess} is  too Low`);
        }
    }
    function display_message(message){
        // to display high , low accordingly to the guess made.
        suggestion.innerHTML=`${message}`;
    }
    function display_guess(guess){
        // to also display the guess just made .
        user_input.value=""; // so that the area becomes empty and we can enter other number.
        num_guesses++;
        prev_input.innerHTML+=` ${guess}`;
        remain_guesses.innerHTML=`${10-num_guesses}`;
    }
    const sub=document.querySelector("#submit");
    function end_game(){
        playGame=false;
        // so if we end the game we nedd to empty out all the fields.
        // setAttribute("disabled", ...) is used to disable a form element so the user cannot interact with it.
        // When an element is disabled:❌ It cannot be clicked,❌ It cannot receive focus,❌ Its value is not submitted with a form,🎨 It appears greyed out by default
        // Applies to:<button>,<input>,<select>,<textarea>,<option>
        // so here we need to disable the submit button so that user can't interact with it.
        user_input.value="";
        sub.setAttribute("disabled",""); // you may put it "true" or "false" or just "" it does not matter.
        sub.style.cursor="default";
        user_input.setAttribute("disabled","");
        // as we also need to prevent anyone to enter the num again after game ends.
        const new_game=document.createElement("span");
        // now we can simply add any css property ;ike border, border color,etc.
        new_game.innerHTML="Start new game";
        new_game.style.backgroundColor="orange";
        new_game.style.fontFamily="cursive";
        new_game.style.border="2px solid black";
        new_game.style.borderRadius="4px";
        new_game.style.position="relative";
        new_game.style.left="100px";
        new_game.style.cursor="pointer";
        const footer_div=document.querySelector(".footer");
        footer_div.appendChild(new_game);
        New_game(new_game);
    }
    function New_game(new_game){
        // we can click on any tag here we click on span tag.
        new_game.addEventListener("click",()=>{
               // no we need to generate a new random number.
               randomNumber=Math.round((100*Math.random()+1));
               // directly made it as it was in global scope
               // now make the prev guess array empty.
               prev_guesses=[];
               prev_input.innerHTML="";
               // make num_guesse again 0.
               num_guesses=0;
               // again make remaining guesse 10.
               remain_guesses.innerHTML=`${10-num_guesses}`;
               // again able the submit button.
               sub.removeAttribute("disabled","");
               user_input.removeAttribute("disabled","");
               suggestion.innerHTML="";
               new_game.remove();
               // as if clicked we also need to remove the start ne game logo.
               // now after managing everything you can make  playGame as true.
               playGame=true;
        })
        
    }