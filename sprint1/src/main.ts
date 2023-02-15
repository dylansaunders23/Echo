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

let file: csvFile | undefined;

function handleButtonClick(event: MouseEvent) {   
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
}

function handle_sentence(cmd: string){
    let repl_output = document.getElementsByClassName("output")[0];
    let repl_header = document.getElementsByClassName("header")[0];
    let repl_view = document.getElementsByClassName("file-content")[0];
    var output = "";
    if (cmd == "mode"){
        if (current_mode == "Brief"){
            current_mode = "Verbose";
            output = "Mode switched to Verbose. ";
        }
        else if (current_mode == "Verbose"){
            current_mode = "Brief";
            output =  "Mode switched to Brief. ";
        }
    }else if (cmd.substring(0, 9) == "load_file"){
        var filename = cmd.split(" ");
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
    }else if(cmd == "view"){
        var output = "";
        var header = "";
        var rows = "";
        if (file == undefined){
            output = "No CSV file stored yet.";
        }
        else{
            if (file.hasHeaders){
                //repl_header.innerHTML += file.header;
               header += '<br><th>' + file.header + '</th></br>';
               //header += file.header;
            }
            var r = 0;
            while (r < file.contents.length){
               rows += '<br><tr><td>' + file.contents[r] + '</td></tr>' + '</br>';
               //rows += file.contents[r] ;
               r ++;
            }
            output += header + rows;
        }
    }else if (cmd.substring(0, 6) == "search"){
        var input = cmd.split(" ");
        var output = "";
        if (input.length != 3) {
           output = "Invalid number of inputs";
        }
        else{
            var column = input[1];
            var value = input[2];
            if (file == undefined){
                output = "No CSV file stored yet.";
            }else{
                var r = 0;
                while (r < file.contents.length){
                    output += '<br><tr><td>' + file.contents[r] + '</td></tr>' + '</br>';
                    r ++;
                }
            }
        }
    }
    if (current_mode == "Brief"){
        repl_output.innerHTML += '<p>' + output + '</p>';
    }
    else if (current_mode == "Verbose"){
        repl_output.innerHTML += '<p> Command: ' + cmd + '</p>';
        repl_output.innerHTML += '<p> Output: ' + output + '</p>';
    }
    else{
        repl_output.innerHTML += '<p> ERROR: Illegal Mode </p>';
    }
}
// Provide this to other modules (e.g., for testing!)
// The configuration in this project will require /something/ to be exported.
export { handleButtonClick };

