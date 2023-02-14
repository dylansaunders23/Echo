type csvFile = {
  areHeaders: boolean;
  header: string[];
  contents: string[][];
};

const favoriteStudents: csvFile = {
  areHeaders: true,
  header: ["Name", "Year", "Concentration", "Hometown"],
  contents: [
    ["Owen", "2", "CS", "Cleveland"],
    ["Dylan", "2", "APMA-CS", "Boston"],
    ["Julia", "2", "Classics", "Providence"],
    ["Emily", "4", "Acting", "London"],
  ],
};

const mockFilepaths = new Map([
  ["mockData/favoriteStudents.csv", favoriteStudents],
]);

export type { csvFile };
export { mockFilepaths };
