const multer = require("multer");
const path = require("path");


const tempStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("asdf");
    cb(null, path.join(__dirname, "../storage/uploads/"));
  },
  filename: (req, file, cb) => {
    if (!req.files) {
      req.files = [];
    }
    const tempFileName = Date.now() + "-" + file.originalname;
    req.files.push(tempFileName);
    cb(null, tempFileName);
  }
});

const fileFilter = (req, file, cb) => {
  // .pdf and .docx only
  const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new ValidationError('Invalid file type'));
  }
}

const upload = multer({
  storage: tempStorage,
  limits: { fileSize: 1000 * 1000 * 5}, // 5MB
  // fileFilter: fileFilter,
});

module.exports = upload;