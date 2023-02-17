/**
 * Testing Plan:
 * 
 * (A). User Story 1 -------------------------------------------------------------------
 * (1). Test "Invalid Input" if the command consists of more than "mode" (not "mode")
 * (2). Test the default mode is "Brief"
 * (3). Test the mode will be swiched to "Verbose" under the command "mode"
 * (4). Test the mode will be switched back to "Brief" after twice the command "mode"
 * 
 * (B). User Story 2 -------------------------------------------------------------------
 * (1). Test "Invalid number of inputs"if the command consists only of "load_file"
 * (2). Test "Invalid Input" if the command consists of typo
 * (3). Test "Invalid number of inputs" if the command consists of more than 2 inputs
 * (4). Test "Filepath not found" if filepath is invalid
 * (5). Test "CSV file loaded successfully" if filepath is valid
 * 
 * (C). User Story 3 -------------------------------------------------------------------
 * (1). Test "Invalid Input" if the command consists of more than "view"
 * (2). Test "No CSV file stored yet." if file is undefined
 * (3). Test when the csv file has headers
 * (4). Test when the csv file has no headers
 * (5). Test when the csv file is empty
 * (6). Test when the csv file is empty except for headers
 * 
 * (D). User Story 4 -------------------------------------------------------------------
 * (1). Test "Invalid number of inputs" if the command consists of only "search"
 * (2). Test "Invalid Input" if the command consists of typo
 * (3), Test "Invalid number of inputs" if the command consists of more than 3 inputs
 * (4). Test "No CSV file stored yet." if file is undefined
 * (5). Test search by column index
 * (6). Test search by column name
 * (7). Test when the value is present once in the csv file
 * (8). Test when the value is present multiple times in the csv files
 * (9). Test when the value is present as a substring in the table entries
 * (10). Test when the value is not present in the csv file
 * 
 * (E). Multiple commands --------------------------------------------------------------
 * (1). "mode" + "load_file"
 * (2). "mode" + "view"
 * (3). "mode" + "search"
 * (4). "load_file" + "view"
 * (5). "load_file" + "search"
 * (6). "view" + "load_file"
 * (7). "view" + "search"
 * (8). "search" + "load_file"
 * (9). "search" + "view"
 * (10). "mode" + "load_file" + "mode"
 * (11). "view" + "load_file" + "view"
 * (12). "search" + "load_file" + "search"
 * (13). "mode" + "load_file" + "view"
 * (14). "mode" + "load_file" + "search"
 * (15). "mode" + "view" + "search"
 * (16). "load_file" + "view" + "search"
 * (17). "mode" + "load_file" + "view" + "search"
 * 
 * (F). Edge Cases ---------------------------------------------------------------------
 * (1). Upper and lower cases of command
 * (2). Wrong case in filepath
 * (3). Wrong case in search value
 */
// all exports from main will now be available as main.X
// export those for testing
import * as main from '../main/main.js';
import * as mockData from "../mockFiles/mockedJson.js"
import { mockFilepaths } from "../mockFiles/mockedJson.js";
import { csvFile } from "../mockFiles/mockedJson.js";
import { screen } from "@testing-library/dom";
import userEvent from '@testing-library/user-event';
// starting html webpage
const startHTML = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../styles/main.css" type="text/css">
</head>
<body>
    <div class="repl">
        <div class="repl-history">  
            <label for = "name">
                Echo:
            <div class = "output">
                
            </div>
        </div>
        <div class="repl-input">
        <hr>
            <input type="text" placeholder = "Enter command here!" class="repl-command-box">
            <button type = "button" class = "enter-command">Submit</button>
        </div>
    </div>
    <script type=module src="../src/main/main.js"></script>
</body>
</html> `

beforeEach(() => {
    main.clearHistory();
    document.body.innerHTML = startHTML;
})

// (A). User Story 1 
// (1). Test "Invalid Input" if the command consists of more than "mode" (not "mode")
test("mode - invalid", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode brief");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid Input");
  expect(main.current_mode).toBe("Brief");
})
// (2). Test the default mode is "Brief"
test("mode - default", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid Input");
  expect(main.current_mode).toBe("Brief");
})
//(3). Test the mode will be swiched to "Verbose" under the command "mode"
test("mode - verbose", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Mode switched to Verbose.");
  expect(main.current_mode).toBe("Verbose");
})
// (4). Test the mode will be switched back to "Brief" after twice the command "mode"
test("mode - brief again", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Mode switched to Brief.");
  expect(main.current_mode).toBe("Brief");
})
// (B). User Story 2
// (1). Test "Invalid number of inputs"if the command consists only of "load_file"
test("load_file - missing inputs", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid number of inputs");
  expect(main.current_mode).toBe("Brief");
})
// (2). Test "Invalid Input" if the command consists of typo
test("load_file - typo", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("loadfile");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid Input");
  expect(main.current_mode).toBe("Brief");
})
// (3). Test "Invalid number of inputs" if the command consists of more than 2 inputs
test("load_file - too many inputs", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/favoriteStudents csv");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid number of inputs");
  expect(main.current_mode).toBe("Brief");
})
// (4). Test "Filepath not found" if filepath is invalid
test("load_file - invalid path", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/favoriteStudent.csv");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Filepath not found");
  expect(main.current_mode).toBe("Brief");
})
// (5). Test "CSV file loaded successfully" if filepath is valid
test("load_file - valid path", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/favoriteStudents.csv");
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe("CSV file loaded successfully");
  expect(main.current_mode).toBe("Brief");
})

// (C). User Story 3 
// (1). Test "Invalid Input" if the command consists of more than "view"
test("view - invalid", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mecowweqwceidlskfnlaskj");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid Input");
  expect(main.current_mode).toBe("Brief");
})
// (2). Test "No CSV file stored yet." if file is undefined
test("view - undefined", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("view");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("No CSV file stored yet.");
  expect(main.current_mode).toBe("Brief");
})
// (3). Test when the csv file has headers
test("view - has headers", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/multipleStudentsHeaders.csv");
  main.handle_sentence("view");
  expect(main.file).toBe(mockData.multipleStudentsHeaders);
  expect(main.result).toBe("<p><table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th><br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td><br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td><br><tr><td>Dylan</td><td>4</td><td>Classics</td><td>Providence</td><br><tr><td>Owen</td><td>3</td><td>APMA-CS</td><td>Boston</td></table></p>");
  expect(main.current_mode).toBe("Brief");
})
// (4). Test when the csv file has no headers
test("view - no headers", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/noHeaderStudents.csv");
  main.handle_sentence("view");
  expect(main.file).toBe(mockData.noHeaderStudents);
  expect(main.result).toBe("<p><table style= width:100%><br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td><br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td><br><tr><td>Emily</td><td>4</td><td>Classics</td><td>Providence</td><br><tr><td>Owen</td><td>3</td><td>APMA-CS</td><td>Boston</td></table></p>");
  expect(main.current_mode).toBe("Brief");
})
// (5). Test when the csv file is empty
test("view - empty", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/emptyFile.csv");
  main.handle_sentence("view");
  expect(main.file).toBe(mockData.emptyFile);
  expect(main.result).toBe("<p>(This CSV file is empty)</p>");
  expect(main.current_mode).toBe("Brief");
})
// (6). Test when the csv file is empty except for headers
test("view - empty with headers", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/emptyWithHeaders.csv");
  main.handle_sentence("view");
  expect(main.file).toBe(mockData.emptyWithHeaders);
  expect(main.result).toBe("<p><table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th></table></p>");
  expect(main.current_mode).toBe("Brief");
})

// (D). User Story 4
// (1). Test "Invalid number of inputs" if the command consists of only "search"
test("search - missing inputs", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("search");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid number of inputs");
  expect(main.current_mode).toBe("Brief");
})
// (2). Test "Invalid Input" if the command consists of typo
test("search - invalid", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("searh");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid Input");
  expect(main.current_mode).toBe("Brief");
})
// (3), Test "Invalid number of inputs" if the command consists of more than 3 inputs
test("search - too many inputs", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("search mockData/multipleStudents.csv Name Julia");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("Invalid number of inputs");
  expect(main.current_mode).toBe("Brief");
})
// (4). Test "No CSV file stored yet." if file is undefined
test("search - undefined", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("search Name Julia");
  expect(main.file).toBe(undefined);
  expect(main.result).toBe("No CSV file stored yet.");
  expect(main.current_mode).toBe("Brief");
})
// (5). Test search by column index
test("search - column index", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("search 0 Julia");
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('<p>' + mockData.favorite_Julia + '</p>');
  expect(main.current_mode).toBe("Brief");
})

// (6). Test search by column name
test("search - column index", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("search Name Julia");
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('<p>' + mockData.favorite_Julia + '</p>');
  expect(main.current_mode).toBe("Brief");
})
// (7). Test when the value is present once in the csv file
test("search - present once", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/noHeaderStudents.csv")
  main.handle_sentence("search Name Dylan");
  expect(main.file).toBe(mockData.noHeaderStudents);
  expect(main.result).toBe('<p>' + mockData.favorite_Dylan + '</p>');
  expect(main.current_mode).toBe("Brief");
})
// (8). Test when the value is present multiple times in the csv files
test("search - present multiple", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/multipleStudents.csv")
  main.handle_sentence("search 0 Dylan");
  expect(main.file).toBe(mockData.multipleStudents);
  expect(main.result).toBe('<p>' + mockData.multi_Dylan + '</p>');
  expect(main.current_mode).toBe("Brief");
})
// (9). Test when the value is present as a substring in the table entries
test("search - present substring", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("search 2 CS");
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('<p>' + mockData.favorite_CS + '</p>');
  expect(main.current_mode).toBe("Brief");
})
// (10). Test when the value is absent from the csv file
test("search - absent", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/noHeaderStudents.csv")
  main.handle_sentence("search Name Arnie");
  expect(main.file).toBe(mockData.noHeaderStudents);
  expect(main.result).toBe('<p>Value not found.</p>');
  expect(main.current_mode).toBe("Brief");
})

// (E). Multiple commands
// (1). "mode" + "load_file"
test("mode + load_file", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("load_file mockData/noHeaderStudents.csv")
  expect(main.file).toBe(mockData.noHeaderStudents);
  expect(main.result).toBe('CSV file loaded successfully');
  expect(main.current_mode).toBe("Verbose");
})
// (2). "mode" + "view"
test("mode + view", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("view")
  expect(main.file).toBe(undefined);
  expect(main.result).toBe('No CSV file stored yet.');
  expect(main.current_mode).toBe("Brief");
})
// (3). "mode" + "search"
test("mode + search", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("search Name Julia")
  expect(main.file).toBe(undefined);
  expect(main.result).toBe('No CSV file stored yet.');
  expect(main.current_mode).toBe("Verbose");
})
// (4). "load_file" + "view"
test("load_file + view", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("view")
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('<p><table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th><br><tr><td>Owen</td><td>2</td><td>CS</td><td>Cleveland</td><br><tr><td>Dylan</td><td>2</td><td>APMA-CS</td><td>Boston</td><br><tr><td>Julia</td><td>2</td><td>Classics</td><td>Providence</td><br><tr><td>Emily</td><td>4</td><td>Acting</td><td>London</td></table></p>');
  expect(main.current_mode).toBe("Verbose");
})
// (5). "load_file" + "search"
test("load_file + search", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/multipleStudentsHeaders.csv")
  main.handle_sentence("search 0 Arnie")
  expect(main.file).toBe(mockData.multipleStudentsHeaders);
  expect(main.result).toBe('<p>Value not found.</p>');
  expect(main.current_mode).toBe("Verbose");
})
// (6). "view" + "load_file"
test("view + load_file", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("view")
  main.handle_sentence("load_file mockData/multipleStudentsHeaders.csv")
  expect(main.file).toBe(mockData.multipleStudentsHeaders);
  expect(main.result).toBe('CSV file loaded successfully');
  expect(main.current_mode).toBe("Verbose");
})
// (7). "view" + "search"
test("view + search", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("view")
  main.handle_sentence("search Year 2")
  expect(main.file).toBe(undefined);
  expect(main.result).toBe('No CSV file stored yet.');
  expect(main.current_mode).toBe("Verbose");
})
// (8). "search" + "load_file"
test("search + load_file", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("search Concentration Classics")
  main.handle_sentence("load_file mockData/emptyFile.csv")
  expect(main.file).toBe(mockData.emptyFile);
  expect(main.result).toBe('CSV file loaded successfully');
  expect(main.current_mode).toBe("Verbose");
})
// (9). "search" + "view"
test("search + view", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("search Concentration Classics")
  main.handle_sentence("view")
  expect(main.file).toBe(undefined);
  expect(main.result).toBe('No CSV file stored yet.');
  expect(main.current_mode).toBe("Verbose");
})
// (10). "mode" + "load_file" + "mode"
test("mode + load_file + mode", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("mode")
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('Mode switched to Verbose.');
  expect(main.current_mode).toBe("Verbose");
})
// (11). "view" + "load_file" + "view"
test("view + load_file + view", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("view")
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("view")
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('<p><table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th><br><tr><td>Owen</td><td>2</td><td>CS</td><td>Cleveland</td><br><tr><td>Dylan</td><td>2</td><td>APMA-CS</td><td>Boston</td><br><tr><td>Julia</td><td>2</td><td>Classics</td><td>Providence</td><br><tr><td>Emily</td><td>4</td><td>Acting</td><td>London</td></table></p>');
  expect(main.current_mode).toBe("Verbose");
})
// (12). "search" + "load_file" + "search"
test("search + load_file + search", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("search Name Dylan")
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("search Concentration CS")
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('<p>' + mockData.favorite_CS + '</p>');
  expect(main.current_mode).toBe("Verbose");
})
// (13). "mode" + "load_file" + "view"
test("mode + load_file + view", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("view")
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('<p><table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th><br><tr><td>Owen</td><td>2</td><td>CS</td><td>Cleveland</td><br><tr><td>Dylan</td><td>2</td><td>APMA-CS</td><td>Boston</td><br><tr><td>Julia</td><td>2</td><td>Classics</td><td>Providence</td><br><tr><td>Emily</td><td>4</td><td>Acting</td><td>London</td></table></p>');
  expect(main.current_mode).toBe("Brief");
})
// (14). "mode" + "load_file" + "search"
test("mode + load_file + search", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("load_file mockData/favoriteStudents.csv")
  main.handle_sentence("search Concentration CS")
  expect(main.file).toBe(mockData.favoriteStudents);
  expect(main.result).toBe('<p>' + mockData.favorite_CS + '</p>');
  expect(main.current_mode).toBe("Verbose");
})
// (15). "mode" + "view" + "search"
test("mode + view + search", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("view")
  main.handle_sentence("search Concentration CS")
  expect(main.file).toBe(undefined);
  expect(main.result).toBe('No CSV file stored yet.');
  expect(main.current_mode).toBe("Brief");
})
// (16). "load_file" + "view" + "search"
test("load_file + view + search", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("load_file mockData/emptyWithHeaders.csv")
  main.handle_sentence("view")
  main.handle_sentence("search Concentration CS")
  expect(main.file).toBe(mockData.emptyWithHeaders);
  expect(main.result).toBe('<p>Value not found.</p>');
  expect(main.current_mode).toBe("Brief");
})
// (17). "mode" + "load_file" + "view" + "search"
test("mode + load_file + view + search", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("load_file mockData/emptyWithHeaders.csv")
  main.handle_sentence("view")
  main.handle_sentence("search Concentration CS")
  expect(main.file).toBe(mockData.emptyWithHeaders);
  expect(main.result).toBe('<p>Value not found.</p>');
  expect(main.current_mode).toBe("Verbose");
})

// (F). Edge Cases
// (1). Upper and lower cases of command
test("edge case - upper and lower case", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mODE")
  main.handle_sentence("loaD_file mockData/emptyWithHeaders.csv")
  main.handle_sentence("viEw")
  main.handle_sentence("SEARCH Concentration CS")
  expect(main.file).toBe(mockData.emptyWithHeaders);
  expect(main.result).toBe('<p>Value not found.</p>');
  expect(main.current_mode).toBe("Brief");
})
// (2). Wrong case in filepath
test("edge case - wrong case in filepath", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("load_file mockdata/emptywithheaders.csv")
  main.handle_sentence("view")
  main.handle_sentence("search Concentration CS")
  expect(main.file).toBe(undefined);
  expect(main.result).toBe('No CSV file stored yet.');
  expect(main.current_mode).toBe("Verbose");
})
// (3). Wrong case in search value
test("edge case - wrong case in filepath", () => {
  main.prepareSubmitPress();
  main.handleButtonClick;
  main.handle_sentence("mode")
  main.handle_sentence("load_file mockData/emptyWithHeaders.csv")
  main.handle_sentence("view")
  main.handle_sentence("search Concentration cs")
  expect(main.file).toBe(mockData.emptyWithHeaders);
  expect(main.result).toBe('<p>Value not found.</p>');
  expect(main.current_mode).toBe("Brief");
})

export {};
