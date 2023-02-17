import * as mockData from "../mockFiles/mockedJson.js"
import * as mockParsed from "../mockFiles/mockedParsed.js"
import * as mockSearched from "../mockFiles/mockedSearched.js"
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

// mocked parse
function get_file(f: csvFile){
    switch (f){
        case mockData.favoriteStudents: 
            return mockParsed.favorite_output;
        case mockData.noHeaderStudents:
            return mockParsed.noHeadStu_output;
        case mockData.multipleStudents:
            return mockParsed.multiStu_output;
        case mockData.multipleStudentsHeaders:
            return mockParsed.multiStuHead_output;
        case mockData.emptyFile:
            return mockParsed.empty_output;
        case mockData.emptyWithHeaders:
            return mockParsed.headEmpty_output;
    }
}
// mocked search
function search_file(f: csvFile, value: String){
    switch (f){
        case mockData.favoriteStudents: 
            if (value == "Julia"){
                return mockSearched.favorite_Julia;
            }else if(value == "CS"){
                return mockSearched.favorite_CS;
            }else{
                return "Value not found.";
            }
        case mockData.noHeaderStudents:
            if (value == "Dylan"){
                return mockSearched.favorite_Dylan;
            }else{
                return "Value not found.";
            }
        case mockData.multipleStudents:
            if (value == "Dylan"){
                return mockSearched.multi_Dylan;
            }else{
                return "Value not found.";
            }
        case mockData.multipleStudentsHeaders:
            if (value == 'Arnie'){
                return mockSearched.favorite_Arnie;
            }else{
                return "Value not found.";
            }
        case mockData.emptyFile:
            return mockSearched.favorite_Arnie;
        case mockData.emptyWithHeaders:
            return mockSearched.favorite_Arnie;
    }
}
let result = ""; 
function handle_sentence(cmd: string){
    let repl_output = document.getElementsByClassName("output")[0];
    var output = "";
    // User Story 1
    if (cmd.toLowerCase() == "mode"){
        // if (cmd.split(" ").length != 1){
        //     output = "Invalid number of inputs";
        //     result = output;
        // }
        if (current_mode == "Brief"){
            current_mode = "Verbose";
            result = "Mode switched to Verbose.";
        }
        else if (current_mode == "Verbose"){
            current_mode = "Brief";
            result =  "Mode switched to Brief.";
        }
    }// User Story 2
    else if (cmd.toLowerCase().substring(0, 9) == "load_file"){
        var filename = cmd.split(" ");
        if (filename.length != 2) {
           output = "Invalid number of inputs";
           result = output;
        }
        else{
            file = mockData.mockFilepaths.get(filename[1]);
            if (file == undefined) {
                output = "Filepath not found";
                result = output;
            }
            else{
                output = "CSV file loaded successfully";
                result = output;
            }
        }
    } // User Story 3
    else if(cmd.toLowerCase() == "view"){
        var output = "";
        var header = "";
        var rows = "";
        // if (cmd.split(" ").length != 1){
        //     output = "Invalid number of inputs";
        //     result = output;
        // }
        if (file == undefined){
            output = "No CSV file stored yet.";
            result = output;
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
            result = output;
            // output += header + rows;
        }
    }// User Story 4
    else if (cmd.toLowerCase().substring(0, 6) == "search"){
        var input = cmd.split(" ");
        var output = "";
        if (input.length != 3) {
           output = "Invalid number of inputs";
           result = output;
        }
        else{
            var column = input[1];
            var value = input[2];
            if (file == undefined){
                output = "No CSV file stored yet.";
                result = output;
                }else{
        //         var r = 0;
        //         while (r < file.contents.length){
        //             output += '<br><tr><td>' + file.contents[r] + '</td></tr>' + '</br>';
        //             r ++;
        //         }
        //     }
                output = '<p>' + search_file(file, value) + '</p>';
                result = output;
            }
        }
    }else {
        output = "Invalid Input";
        result = output;
    }
    // Output either Brief or Verbose
    if (current_mode == "Brief"){
        repl_output.innerHTML += '<p> ' + result +'</p>';
        repl_output.innerHTML += '<hr>';
    }
    else if (current_mode == "Verbose"){
        repl_output.innerHTML += '<p> Command: ' + cmd + '</p>';
        repl_output.innerHTML += '<p> Output: ' + result + '</p>';
        repl_output.innerHTML += '<hr>';
    }
    else{
        repl_output.innerHTML += '<p> ERROR: Illegal Mode </p><hr>';
    }
}
// clean file to default
function clearHistory(){
    file = undefined;
}
// export variables and functions
export{current_mode, result, file};
export { prepareSubmitPress, handleButtonClick, handle_sentence,  clearHistory};

