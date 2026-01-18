import multer from "multer";
import fs from "fs";
import path from "path";

// Vercel allows writing only to /tmp
const UPLOADS_FOLDER = "/tmp/uploads";

// Ensure /tmp/uploads exists
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER); // write to /tmp/uploads
  },
  filename: (req, file, cb) => {
    // optional: add timestamp to avoid filename conflicts
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

export const upload = multer({ storage });