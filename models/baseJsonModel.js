import fs from "fs";
import path from "path";

const DATA_PATH = "/tmp";//process.env.DATA_PATH || "../sample-data";

function getFile(fileName) {
  return path.resolve(DATA_PATH, fileName);
}

// Ensure file exists
function ensureFile(fileName, defaultData = []) {
  const filePath = getFile(fileName);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
  }
}

function read(fileName, defaultData = []) {
  ensureFile(fileName, defaultData);
  const filePath = getFile(fileName);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function write(fileName, data) {
  fs.writeFileSync(
    getFile(fileName),
    JSON.stringify(data, null, 2)
  );
}

export default {
  read,
  write
};
