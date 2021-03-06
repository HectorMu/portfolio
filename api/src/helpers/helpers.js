const bcrypt = require("bcryptjs");
const conn = require("../database");
const multer = require("multer");
const path = require("path");

const helpers = {};

helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
  try {
    return await bcrypt.compare(password, savedPassword);
  } catch (e) {
    console.log(e);
  }
};

helpers.createFirstAccount = async () => {
  const checkForUser = await conn.query("select * from users");
  if (checkForUser.length > 0) return;
  const firstAccount = {
    username: "HecDev",
    email: "hector@gmail.com",
    password: "12345678",
  };

  firstAccount.password = await helpers.encryptPassword(firstAccount.password);

  try {
    await conn.query("insert into users set ?", [firstAccount]);
    console.log("first user created successfully");
  } catch (error) {
    console.log(error);
  }
};

helpers.multerStorageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

helpers.checkFileType = (file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb(new Error("Error: PDFS Only!"));
  }
};
module.exports = helpers;
