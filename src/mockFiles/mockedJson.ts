type csvFile = {
  hasHeaders: boolean;
  header: string[];
  contents: string[][];
};

// basic csvFile with headers
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

// basic csvFile without headers
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

// csv File with repeated entries
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
// csv File with entries repeated as substrings
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

// empty without headers
const emptyFile: csvFile = {
  hasHeaders: false,
  header: [],
  contents: [[]],
}


// empty with headers
const emptyWithHeaders: csvFile = {
  hasHeaders: true,
  header: ["Name", "Year", "Concentration", "Hometown"],
  contents: [[]],
}


// hashmap between mocked file paths and csv files themselves
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
export {favoriteStudents, noHeaderStudents, multipleStudents};
export {multipleStudentsHeaders, emptyFile, emptyWithHeaders};
