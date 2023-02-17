type csvFile = {
  hasHeaders: boolean;
  header: string[];
  contents: string[][];
};

const favoriteStudents: csvFile = {
  hasHeaders: true,
  header: ["Name", "Year", "Concentration", "Hometown"],
  contents: [
    ["Owen", "2", "CS", "Cleveland"],
    ["Dylan", "2", "APMA-CS", "Boston"],
    ["Julia", "2", "Classics", "Providence"],
    ["Emily", "4", "Acting", "London"],
  ],
};

var favorite_output = "<table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th>";
favorite_output += "<br><tr><td>Owen</td><td>2</td><td>CS</td><td>Cleveland</td>";
favorite_output += "<br><tr><td>Dylan</td><td>2</td><td>APMA-CS</td><td>Boston</td>";
favorite_output += "<br><tr><td>Julia</td><td>2</td><td>Classics</td><td>Providence</td>";
favorite_output += "<br><tr><td>Emily</td><td>4</td><td>Acting</td><td>London</td></table>";

var favorite_Julia = '<table style= width:100%><br><tr><td>Julia</td><td>2</td><td>Classics</td><td>Providence</td></table>';
var favorite_Dylan = '<table style= width:100%><br><tr><td>Dylan</td><td>2</td><td>APMA-CS</td><td>Boston</td></table>'
var favorite_Arnie = 'Value not found.'
var favorite_CS = '<table style= width:100%><br><tr><td>Owen</td><td>2</td><td>CS</td><td>Cleveland</td>';
favorite_CS += '<br><tr><td>Dylan</td><td>2</td><td>APMA-CS</td><td>Boston</td></table>';

const noHeaderStudents: csvFile = {
  hasHeaders: false,
  header: [],
  contents: [
    ["Dylan", "2", "CS", "Cleveland"],
    ["Julia", "2", "Acting", "London"],
    ["Emily", "4", "Classics", "Providence"],
    ["Owen", "3", "APMA-CS", "Boston"],
  ],
};

var noHeadStu_output= "<table style= width:100%><br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td>";
noHeadStu_output += "<br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td>";
noHeadStu_output += "<br><tr><td>Emily</td><td>4</td><td>Classics</td><td>Providence</td>";
noHeadStu_output += "<br><tr><td>Owen</td><td>3</td><td>APMA-CS</td><td>Boston</td></table>";

var favorite_2 = '<table style= width:100%><br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td>';
favorite_2 += '<br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td></table>';

const multipleStudents: csvFile = {
  hasHeaders: false,
  header: [],
  contents: [
    ["Dylan", "2", "CS", "Cleveland"],
    ["Julia", "2", "Acting", "London"],
    ["Dylan", "4", "Classics", "Providence"],
    ["Owen", "3", "APMA-CS", "Boston"],
  ],
};


var multiStu_output= "<table style= width:100%><br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td>";
multiStu_output += "<br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td>";
multiStu_output += "<br><tr><td>Dylan</td><td>4</td><td>Classics</td><td>Providence</td>";
multiStu_output += "<br><tr><td>Owen</td><td>3</td><td>APMA-CS</td><td>Boston</td></table>";

var multi_Dylan = '<table style= width:100%><br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td>';
multi_Dylan += '<br><tr><td>Dylan</td><td>4</td><td>Classics</td><td>Providence</td></table>';

const multipleStudentsHeaders: csvFile = {
  hasHeaders: true,
  header: ["Name", "Year", "Concentration", "Hometown"],
  contents: [
    ["Dylan", "2", "CS", "Cleveland"],
    ["Julia", "2", "Acting", "London"],
    ["Dylan", "4", "Classics", "Providence"],
    ["Owen", "3", "APMA-CS", "Boston"],
  ],
};

var multiStuHead_output = "<table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th>";
multiStuHead_output += "<br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td>";
multiStuHead_output += "<br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td>";
multiStuHead_output += "<br><tr><td>Dylan</td><td>4</td><td>Classics</td><td>Providence</td>";
multiStuHead_output += "<br><tr><td>Owen</td><td>3</td><td>APMA-CS</td><td>Boston</td></table>";

const emptyFile: csvFile = {
  hasHeaders: false,
  header: [],
  contents: [[]],
}

var empty_output = "(This CSV file is empty)";

const emptyWithHeaders: csvFile = {
  hasHeaders: true,
  header: ["Name", "Year", "Concentration", "Hometown"],
  contents: [[]],
}

var headEmpty_output = "<table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th></table>";

const mockFilepaths = new Map([
  ["mockData/favoriteStudents.csv", favoriteStudents],
  ["mockData/noHeaderStudents.csv", noHeaderStudents],
  ["mockData/emptyFile.csv", emptyFile],
  ["mockData/emptyWithHeaders.csv", emptyWithHeaders],
  ["mockData/multipleStudents.csv", multipleStudents],
  ["mockData/multipleStudentsHeaders.csv", multipleStudentsHeaders],
]);

export type { csvFile };
export { mockFilepaths };
export {favoriteStudents,favorite_output, noHeaderStudents, noHeadStu_output, multipleStudents, multiStu_output};
export {multipleStudentsHeaders, multiStuHead_output, emptyFile, empty_output, emptyWithHeaders, headEmpty_output};
export {favorite_Dylan, favorite_Arnie, favorite_CS, favorite_Julia, favorite_2, multi_Dylan};
