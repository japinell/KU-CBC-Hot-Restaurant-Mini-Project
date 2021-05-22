// Dependencies

const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Hot Restaurant
// Table
const table = {
  customerName: "",
  customerEmail: "",
  customerID: "",
  phoneNumber: "",
};
const tables = [];

// Waitlist
const waiting = {
  customerName: "",
  customerEmail: "",
  phoneNumber: "",
  customerID: "",
};
const waitList = [];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/api/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);
app.get("/api/waitlist", (req, res) =>
  res.sendFile(path.join(__dirname, "waitlist.html"))
);
app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reserve.html"))
);

// Displays all characters
// app.get("/api/characters", (req, res) => res.json(characters));

// Displays a single character, or returns false
// app.get("/api/characters/:character", (req, res) => {
//   const chosen = req.params.character;

//   console.log(chosen);

//   /* Check each character routeName and see if the same as "chosen"
//    If the statement is true, send the character back as JSON,
//    otherwise tell the user no character was found */

//   for (let i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post("/api/reserve", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const table = req.body;
  console.log(table);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  // console.log(newCharacter);

  tables.push(table);
  //res.json(newCharacter);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));