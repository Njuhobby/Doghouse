const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const authorizer = require("./middlewares/authMiddleware");
const responseCustomFunctions = require("./middlewares/responseCustomFunctionsMiddleware");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const jobsRouter = require("./routes/jobs");
const companiesRouter = require("./routes/companies");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

const unless = function (paths, middleware) {
  return function (req, res, next) {
    let match = false;
    for (let i = 0; i < paths.length; i++) {
      if (req.url.includes(paths[i])) {
        match = true;
        break;
      }
    }
    if (match) {
      next();
    } else {
      middleware(req, res, next);
    }
  };
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(unless(["/users/register", "/users/login"], authorizer));
app.use(responseCustomFunctions);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/jobs", jobsRouter);
app.use("/companies", companiesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
