var favoriteStudents = {
    hasHeaders: true,
    header: ["Name", "Year", "Concentration", "Hometown"],
    contents: [
        ["Owen", "2", "CS", "Cleveland"],
        ["Dylan", "2", "APMA-CS", "Boston"],
        ["Julia", "2", "Classics", "Providence"],
        ["Emily", "4", "Acting", "London"],
    ],
};
var noHeaderStudents = {
    hasHeaders: false,
    header: [],
    contents: [
        ["Dylan", "2", "CS", "Cleveland"],
        ["Julia", "2", "Acting", "London"],
        ["Emily", "4", "Classics", "Providence"],
        ["Owen", "3", "APMA-CS", "Boston"],
    ],
};
var emptyFile = {
    hasHeaders: false,
    header: [],
    contents: [[]],
};
var emptyWithHeaders = {
    hasHeaders: true,
    header: ["Name", "Year", "Concentration", "Hometown"],
    contents: [[]],
};
var mockFilepaths = new Map([
    ["mockData/favoriteStudents.csv", favoriteStudents],
    ["mockData/noHeaderStudents.csv", noHeaderStudents],
    ["mockData/emptyFile.csv", emptyFile],
    ["mockData/emptyWithHeaders.csv", emptyWithHeaders],
]);
export { mockFilepaths };
