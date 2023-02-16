// all exports from main will now be available as main.X
// export those for testing
import * as main from '../main/main.js';

test('is 1 + 1 = 2?', () => {    
  expect(1 + 1).toBe(2)  
})

// Notice: we're testing the keypress handler's effect on state and /nothing else/
//  We're not actually pressing keys!
//  We're not looking at what the console produces!
// test('handleKeypress counting', () => {    
//   main.handleKeypress(new KeyboardEvent("keypress", {key: "x"}))
//   expect(main.getPressCount()).toBe(1)
//   main.handleKeypress(new KeyboardEvent("keypress", {key: "y"}))
//   expect(main.getPressCount()).toBe(2)
// })

// test('handleMouseClick counting', () => {    
//   main.handleButtonClick(new MouseEvent("mouseclick"))
//   expect(main.getClickCount()).toBe(1)
//   main.handleButtonClick(new MouseEvent("mouseclick"))
//   expect(main.getClickCount()).toBe(2)
// })

// test('handleSentence', () => {
//     main.handle_sentence("mode")
//     expect(main.getOutput()).toBe("Mode switched to Verbose.")
// }
// )
import { mockFilepaths } from "../mockFiles/mockedJson.js";
import { csvFile } from "../mockFiles/mockedJson.js";
import { screen } from "@testing-library/dom";
import userEvent from '@testing-library/user-event';
const startHTML = 
`<div class="repl">
      <div class="repl-history"></div>
      <hr />
      <div class="repl-input">
        <input type="text" class="repl-command-box" />
        <button type="button" class="submit-button">submit</button>
      </div>
</div>`;

let maybeInput: HTMLElement | null;

beforeEach(() => {
    main.clearHistory;
    document.body.innerHTML = startHTML;

    const maybeInput = document.getElementsByClassName("repl-command-box")[0];
})

test("loading a file", () => {
    if(maybeInput instanceof HTMLInputElement){
        maybeInput.value = "load_file mockData/favoriteStudents.csv";
    }

    main.prepareSubmitPress;

    const favoriteStudents: csvFile = {
      hasHeaders: true,
      header: ["Name", "Year", "Concentration", "Hometown"],
      contents: [
        ["Owen", "2", "CS", "Portland"],
        ["Caroline", "2", "APMA-CS", "Rockville"],
        ["Cannon", "2", "Classics", "Concord"],
        ["Emma", "4", "Acting", "London"],
      ],
    };

    let file: csvFile | undefined = main.getCSV;
    if(file != undefined){
        expect(file.contents).toBe(favoriteStudents.contents);
    }
    
})


export {};