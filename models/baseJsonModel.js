import fs from "fs";
import path from "path";

const DATA_PATH = process.env.DATA_PATH || "../sample-data";

function getFile(fileName) {
  return path.resolve(DATA_PATH, fileName);
}

function read(fileName) {
  return JSON.parse(fs.readFileSync(getFile(fileName), "utf-8"));
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
