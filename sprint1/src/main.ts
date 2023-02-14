import * as mockData from "./mockFiles/mockCSV.js"
import { csvFile as csvFile } from "./mockFiles/mockCSV.js";
// The window.onload callback is invoked when the window is first loaded by the browser
window.onload = () => {    
    prepareinput();
    prepareSubmitPress();  
    // If you're adding an event for a button click, do something similar.
    // The event name in that case is "click", not "keypress", and the type of the element 
    // should be HTMLButtonElement. The handler function for a "click" takes no arguments.
}

let current_mode = "Brief";

// function prepareCommand(){
//     const maybeInputs: null | HTMLCollectionOf<Element> = document.getElementsByClassName('repl-command-box')
//     if (maybeInputs == null){
//         return ("Couldn't find input element")
//     }else {
//         maybeInputs.addEventListener("keypress", handleKeypress)
//     }
// }
function prepareinput(){
    const input = document.getElementsByClassName("repl-command-box")[0];
    if(input == null) {
        console.log("Couldn't find input element");
    } else if(!(input instanceof HTMLInputElement)) {
        console.log(`Found element ${input}, but it wasn't an input`);
    } else {
        // Notice that we're passing *THE FUNCTION* as a value, not calling it.
        // The browser will invoke the function when a key is pressed with the input in focus.
        //  (This should remind you of the strategy pattern things we've done in Java.)
        input.addEventListener('keydown', (e) => {
            if (e.key == "Enter"){
                read();
            }
        });
    }
}

function prepareSubmitPress() {
    // As far as TypeScript knows, there may be *many* elements with this class.
    const maybeInputs: HTMLCollectionOf<Element> = document.getElementsByClassName("enter-command");
    // Assumption: there's only one thing
    const maybeInput: Element | null = maybeInputs[0];
    // Is the thing there? Is it of the expected type? 
    //  (Remember that the HTML author is free to assign the repl-input class to anything :-) )
    if(maybeInput == null) {
        console.log("Couldn't find input element");
    } else if(!(maybeInput instanceof HTMLButtonElement)) {
        console.log(`Found element ${maybeInput}, but it wasn't an input`);
    } else {
        // Notice that we're passing *THE FUNCTION* as a value, not calling it.
        // The browser will invoke the function when a key is pressed with the input in focus.
        //  (This should remind you of the strategy pattern things we've done in Java.)
        maybeInput.addEventListener("click", handleButtonClick);
    }
}

// We'll use a global state reference for now
let enteredString = ""
// function getPressCount() {
//     return pressCount
// }
let file: csvFile | undefined;

function handleButtonClick(event: MouseEvent) {   
    // The event has more fields than just the key pressed (e.g., Alt, Ctrl, etc.)
    read();
}

function read(){
    const newcommand = document.getElementsByClassName("repl-command-box")[0];
    if (newcommand == null){
        console.log("Couldn't find input element");
    }
    else if (!(newcommand instanceof HTMLInputElement)){
        console.log(`Found element ${newcommand}, but it wasn't an input`)
    }
    else{
        handle_sentence(newcommand.value);
    }
    // console.log(`key pressed: ${event.key}. ${getPressCount()} presses seen so far.`)
}

function handle_sentence(cmd: string){
    let repl_history = document.getElementsByClassName("history")[0];
    let repl_output = document.getElementsByClassName("output")[0];
    if (cmd == "mode"){
        if (current_mode == "Brief"){
            current_mode = "Verbose";
            repl_output.innerHTML += '<p> Command: mode <p>';
            repl_output.innerHTML += '<p> Output: Mode switched to Verbose <p>';
        }
        else if (current_mode == "Verbose"){
            current_mode = "Brief";
            repl_output.innerHTML += '<p> Mode switched to Brief <p>';
        }
        else{
            repl_output.innerHTML += '<p> ERROR: Illegal Mode <p>';
        }
        repl_history.innerHTML += '<p> mode <p>';
    }else if (cmd.substring(0, 9) == "load_file"){
        var filename = cmd.split(" ");
        var output = "";
        if (filename.length != 2) {
           output = "Invalid number of inputs";
        }
        else{
            file = mockData.mockFilepaths.get(filename[1]);
            if (file == undefined) {
                output = "Filepath not found";
            }
            else{
                output = "CSV file loaded successfully";
            }
        }

        if (current_mode == "Brief"){
            repl_output.innerHTML += '<p>' + output + '<p>';
        }
        else if (current_mode == "Verbose"){
            repl_output.innerHTML += '<p> Command: ' + cmd + '<p>';
            repl_output.innerHTML += '<p> Output: ' + output + '<p>';
        }
        else{
            repl_output.innerHTML += '<p> ERROR: Illegal Mode <p>';
        }
        repl_history.innerHTML += cmd;
    }else if(cmd == "view"){
        if (current_mode == "Brief"){
            repl_output.innerHTML += '<p> HTML Table awaiting to be implemented. <p>';
        }
        else if (current_mode == "Verbose"){
            repl_output.innerHTML += '<p> Command: view <p>';
            repl_output.innerHTML += '<p> Output: HTML Table awaiting to be implemented. <p>';
        }
        else{
            repl_output.innerHTML += '<p> ERROR: Illegal Mode <p>';
        }
        repl_history.innerHTML += '<p> view <p>';
    }else if (cmd.substring(0, 6) == "search"){
        if (current_mode == "Brief"){
            repl_output.innerHTML += '<p> HTML Table search awaiting to be implemented. <p>';
        }
        else if (current_mode == "Verbose"){
            repl_output.innerHTML += '<p> Command: <p>' + cmd;
            repl_output.innerHTML += '<p> Output: HTML Table search awaiting to be implemented. <p>';
        }
        else{
            repl_output.innerHTML += '<p> ERROR: Illegal Mode <p>';
        }
        repl_history.innerHTML += cmd;
    }
}
// Provide this to other modules (e.g., for testing!)
// The configuration in this project will require /something/ to be exported.
export { handleButtonClick };

