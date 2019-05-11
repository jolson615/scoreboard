# Scorekeeper React App

## The Setup

Run `npm install` and `npm start` to start the app in development mode.

## The Lab

### 1. Add Player B  
Right now the lab only keeps track of a single player. Add a "Player B" component to the app.

### 2. Make Player B Work
If you don't create new functions and modify the component.state initial setup, Player B's buttons won't work.

### 3. Current Winner
Show the current winner in the App.

### 4. Winning Score
Show the current high score in the App.

## Extensions
* Consolidate the `handlePlayerAClick` and `handlePlayerBClick` functions to be a single function.
If you've currently encoded the event handler as `onClick={()=>props.clickHandler()}` you may want to add additional information as an argument (`onClick={()=>props.clickHandler(props.id)}`), and then rewrite the function definition of `const handlePlayerAClick = ()` with a parameter like `const handlePlayerAClick = (id)`.
* Store the scores more efficiently - an array or an object could both make the processes of changing scores and identifying a high score and a current winner a lot easier.
* Modify the game to work for 4-10 players.
* Add a reset button.
* Add an "add player" and a "remove player" button. 
