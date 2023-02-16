import * as mockData from "../mockFiles/mockedJson.js"
import { csvFile as csvFile } from "../mockFiles/mockedJson.js";
// prepare entered command and submit button
window.onload = () => {    
    prepareinput();
    prepareSubmitPress();  
}

// default mode is brief
let current_mode = "Brief";

function prepareinput(){
    const input = document.getElementsByClassName("repl-command-box")[0];
    if(input == null) {
        console.log("Couldn't find input element");
    } else if(!(input instanceof HTMLInputElement)) {
        console.log(`Found element ${input}, but it wasn't an input`);
    } else {
        input.addEventListener('keydown', (e) => {
            if (e.key == "Enter"){
                // strategy 1: reads the entered command after pressing "Enter"
                read();
                // handle_sentence(input.value);
            }
        });
    }
}

// strategy 2: deals with entered command after pressing Submit
function prepareSubmitPress() {
    const maybeInputs: HTMLCollectionOf<Element> = document.getElementsByClassName("enter-command");
    const maybeInput: Element | null = maybeInputs[0];
    if(maybeInput == null) {
        console.log("Couldn't find input element");
    } else if(!(maybeInput instanceof HTMLButtonElement)) {
        console.log(`Found element ${maybeInput}, but it wasn't an input`);
    } else {
        maybeInput.addEventListener("click", handleButtonClick);
    }
}

// input csv File
let file: csvFile | undefined;

// reads after clicking the Submit button
function handleButtonClick(event: MouseEvent) {   
    read();
}

// deals with the input command
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

function get_file(f: csvFile){
    switch (f){
        case mockData.favoriteStudents: 
            return mockData.favorite_output;
        case mockData.noHeaderStudents:
            return mockData.noHeadStu_output;
        case mockData.multipleStudents:
            return mockData.multiStu_output;
        case mockData.multipleStudentsHeaders:
            return  mockData.multiStuHead_output;
        case mockData.emptyFile:
            return mockData.empty_output;
        case mockData.emptyWithHeaders:
            return mockData.headEmpty_output;
    }
}

function search_file(f: csvFile, value: String){
    switch (f){
        case mockData.favoriteStudents: 
            if (value == "Julia"){
                return mockData.favorite_Julia;
            }else if(value == "CS"){
                return mockData.favorite_CS;
            }else{
                return "Value not found.";
            }
        case mockData.noHeaderStudents:
            if (value == "Dylan"){
                return mockData.favorite_Dylan;
            }else{
                return "Value not found.";
            }
        case mockData.multipleStudents:
            if (value == "Dylan"){
                return mockData.multi_Dylan;
            }else{
                return "Value not found.";
            }
        case mockData.multipleStudentsHeaders:
            if (value == 'Arnie'){
                return mockData.favorite_Arnie;
            }else{
                return "Value not found.";
            }
        case mockData.emptyFile:
            return mockData.favorite_Arnie;
        case mockData.emptyWithHeaders:
            return mockData.favorite_Arnie;
    }
}

function handle_sentence(cmd: string){
    let repl_output = document.getElementsByClassName("output")[0];
    var output = "";
    // User Story 1
    if (cmd == "mode"){
        if (current_mode == "Brief"){
            current_mode = "Verbose";
            output = "Mode switched to Verbose. ";
        }
        else if (current_mode == "Verbose"){
            current_mode = "Brief";
            output =  "Mode switched to Brief. ";
        }
    }// User Story 2
    else if (cmd.substring(0, 9) == "load_file"){
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
    } // User Story 3
    else if(cmd == "view"){
        var output = "";
        var header = "";
        var rows = "";
        if (file == undefined){
            output = "No CSV file stored yet.";
        }
        else{
            // if (file.hasHeaders){
            //    header += '<br><th>' + file.header + '</th></br>';
            // }
            // var r = 0;
            // while (r < file.contents.length){
            //    rows += '<br><tr><td>' + file.contents[r] + '</td></tr>' + '</br>';
            //    r ++;
            // }
            output = '<p>' + get_file(file) + '</p>';
            // output += header + rows;
        }
    }// User Story 4
    else if (cmd.substring(0, 6) == "search"){
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
        //         var r = 0;
        //         while (r < file.contents.length){
        //             output += '<br><tr><td>' + file.contents[r] + '</td></tr>' + '</br>';
        //             r ++;
        //         }
        //     }
                output = '<p>' + search_file(file, value);
            }
        }
    }else {
        output = "Invalid Input";
    }
    // Output either Brief or Verbose
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
function getOutput(){
    return document.getElementsByClassName("output");
}
let history: Array<String> [];
function clearHistory(){
    history = [];
}
export { prepareSubmitPress, handleButtonClick, handle_sentence, getOutput, clearHistory };

