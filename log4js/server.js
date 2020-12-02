// dependencies
const log4js = require ("log4js")
const express = require ("express");
const app = express();


log4js.configure({
    appenders: { server: { type: "file", filename: "server.log" }},
    categories: { default: { appenders: ["server"], level: "debug" }}
});

var logger = log4js.getLogger();

const PORT = process.env.PORT || 3000;

// log
logger.info("successfully logged in!");
const { apiRoutes, htmlRoutes } = require ("./routes")

// "/api" goes before "/" to filter out routes before the default
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
    console.log("server started on port " + PORT );
});