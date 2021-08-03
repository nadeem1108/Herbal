var createError = require('http-errors');
var express = require('express');
const cors = require("cors");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require("http");
const passport = require("passport");
// const server = http.createServer(app);
const dbConnect = require("./config/database");


const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Connect to MongoDB
dbConnect();

// Passport middleware
app.use(passport.initialize());

// Passport config
// require("./middleware/passport")(passport);

// Use Routes
app.use("/", require("./routes/indexRoute"));

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is running at (==> http://localhost:5000 <==)`
  );
});
