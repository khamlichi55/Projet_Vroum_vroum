const Router = require("express").Router;
const router = new Router();
const User = require("../model/users");
const Admin = require("../model/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const config = require('../config');

router.post("/register", async (req, res) => {
  const { prenom, nom, password, email } = req.body;
  console.log(prenom, nom, password, email);
  // verify if username and password are not empty
  if (!prenom || !nom || !password || !email) {
    return res.json({
      message: "veuiller remplir tout les colonnes",
    });
  }
  console.log(User.find());
  const user = await User.findOne({ email });
  console.log("user", user);

  if (user) return res.json({ error: false, message: "Client deja existant" });

  const salt = await bcrypt.genSalt(Number(10));
  const hashedPassword = await bcrypt.hash(password, salt);
  await new User({ ...req.body, password: hashedPassword }).save();

  return res
    .status(201)
    .json({ error: false, message: "Creation du client avec succes" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // verify if username and password are not empty
  if (!email || !password) {
    return res.json({
      message: "veuiller saisir email et mot de passe",
    });
  }
  // find user by username
  // verify if user exists
  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "User does not exist" });
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword) return res.json({ message: "Mot de passe incorrect" });
  //create token
  const payload = {
    email,
    prenom: user.prenom,
    nom: user.nom,
  };
  const token = jwt.sign(payload, "secret", { expiresIn: "3h" });
  res.json({
    message: "User logged in",
    token: token,
  });
});
//update user password
router.put("/userupdate", async (req, res) => {
  const salt = await bcrypt.genSalt(Number(10));

  const email = req.body.email;

  const pass = req.body.password;

  const hashedPassword = await bcrypt.hash(pass, salt);

  const pass2 = req.body.password2;
  const hashedPassword2 = await bcrypt.hash(pass2, salt);

  const ad = await User.findOne({ email: email });
  console.log(ad);
  if (ad) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      ad.password
    );
    console.log("user", ad.password);
    console.log("actuel", hashedPassword);
    console.log(isValidPassword);
    if (isValidPassword) {
      const ad2 = await User.updateOne(
        { email: email },
        {
          password: hashedPassword2,
        }
      );
      console.log(ad2.modifiedCount);

      return res.json({ message: "modification avec succes" });
    } else {
      console.log("walo");
      return res.json({ message: "mot de passe incorect" });
    }
  } else {
    return res.json({ message: "introuvable" });
  }
});
// admin.login
router.post("/Adminlogin", async (req, res) => {
  const { useradmin, password } = req.body;
  // verify if username and password are not empty
  if (!useradmin || !password) {
    return res.json({
      message: "Veuillez saisir useradmin et le mot de passe",
    });
  }
  // find user by username
  // verify if user exists
  const admin = await Admin.findOne({ useradmin });
  if (!admin) return res.json({ message: "admin does not exist" });
  let isValidPassword = false;
  if (req.body.password === admin.password) {
    isValidPassword = true;
  }

  if (!isValidPassword) return res.json({ message: "Invalid password" });

  res.json({
    message: "admin logged in",
  });
});

// admin.update

router.put("/adminupdate", async (req, res) => {
  const pass = req.body.password;

  const ad = await Admin.updateOne(
    { password: pass },
    {
      password: req.body.password2,
    }
  );
  console.log(ad.modifiedCount);
  if (ad.modifiedCount === 1) {
    return res.json({ message: "modification avec succes" });
  } else {
    console.log("walo");
    return res.json({ message: "mot de passe incorect" });
  }
});

// get admin

router.get("/getadmin", async (req, res) => {
  const admin = await Admin.find();
  res.json(admin);
});

module.exports = router;
