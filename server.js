// Dependencies

const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = 3000;

//
const MAX_TABLES = 5;

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
const tables = [
  {
    customerName: "Name 1",
    customerEmail: "EMail 1",
    customerID: "1",
    phoneNumber: "Phone 1",
  },
  {
    customerName: "Name 2",
    customerEmail: "EMail 2",
    customerID: "2",
    phoneNumber: "Phone 2",
  },
  {
    customerName: "Name 3",
    customerEmail: "EMail 3",
    customerID: "3",
    phoneNumber: "Phone 3",
  },
  {
    customerName: "Name 4",
    customerEmail: "EMail 4",
    customerID: "4",
    phoneNumber: "Phone 4",
  },
  // {
  //   customerName: "Name 5",
  //   customerEmail: "EMail 5",
  //   customerID: "5",
  //   phoneNumber: "Phone 5",
  // },
];
const waitList = [
  // {
  //   customerName: "Name 6",
  //   customerEmail: "EMail 6",
  //   customerID: "6",
  //   phoneNumber: "Phone 6",
  // },
];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/api/tables", (req, res) => res.json(tables));
app.get("/api/waitlist", (req, res) => res.json(waitList));
app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reserve.html"))
);
app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);

// Create New Table - takes in JSON input
app.post("/reserve", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const table = req.body;
  //
  if (tables.length < MAX_TABLES) {
    //
    tables.push(table);
    res.send(true);
    //
  } else {
    //
    waitList.push(table);
    res.send(false);
    //
  }
  //
});

// Clears the Table and Waiting List objects
app.post("/api/clear", (req, res) => {
  //
  tables.splice(0, tables.length);
  waitList.splice(0, waitList.length);
  //
  res.send(true);
  //
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
