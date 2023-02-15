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

const emptyFile: csvFile = {
  hasHeaders: false,
  header: [],
  contents: [[]],
}

const emptyWithHeaders: csvFile = {
  hasHeaders: true,
  header: ["Name", "Year", "Concentration", "Hometown"],
  contents: [[]],
}

const mockFilepaths = new Map([
  ["mockData/favoriteStudents.csv", favoriteStudents],
  ["mockData/noHeaderStudents.csv", noHeaderStudents],
  ["mockData/emptyFile.csv", emptyFile],
  ["mockData/emptyWithHeaders.csv", emptyWithHeaders],
]);

export type { csvFile };
export { mockFilepaths };
