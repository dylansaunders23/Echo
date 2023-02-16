// all exports from main will now be available as main.X
// export those for testing
import * as main from '../main/main.js';
test('is 1 + 1 = 2?', function () {
    expect(1 + 1).toBe(2);
});
var startHTML = "<div class=\"repl\">\n      <div class=\"repl-history\"></div>\n      <hr />\n      <div class=\"repl-input\">\n        <input type=\"text\" class=\"repl-command-box\" />\n        <button type=\"button\" class=\"submit-button\">submit</button>\n      </div>\n</div>";
var maybeInput;
beforeEach(function () {
    main.clearHistory();
    document.body.innerHTML = startHTML;
    var maybeInput = document.getElementsByClassName("repl-command-box")[0];
});
test("loading a file", function () {
    if (maybeInput instanceof HTMLInputElement) {
        maybeInput.value = "load_file mockData/favoriteStudents.csv";
    }
    main.prepareSubmitPress();
    var favoriteStudents = {
        hasHeaders: true,
        header: ["Name", "Year", "Concentration", "Hometown"],
        contents: [
            ["Owen", "2", "CS", "Portland"],
            ["Caroline", "2", "APMA-CS", "Rockville"],
            ["Cannon", "2", "Classics", "Concord"],
            ["Emma", "4", "Acting", "London"],
        ],
    };
    var file = main.getCSV();
    if (file != undefined) {
        expect(file.contents).toBe(favoriteStudents.contents);
    }
});
