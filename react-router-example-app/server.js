// install dependencies
const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;

// example 1: keep everything in one file
// ========================================

// "/api" goes before "/" to filter out routes before the default
// app.get("/api", (req, res) => res.json({key: "val"}));

// default home route
// app.get("/", (req, res) => res.send("hi"));

// example 2: keep everything in one file but separate by request type
// ========================================

// "/api" goes before "/" to filter out routes before the default
// app.route("/api")
//     .get((req, res) => res.json({key: "val"}))
//     .post((req, res) => res.json({key: "val"}))
//     .delete((req, res) => res.json({key: "val"}))
//     .put((req, res) => res.json({key: "val"}))

// default home route
// app.get("/", (req, res) => res.send("hi"));

// example 3: separate /api and html routes by directing to expernal files
// ========================================

// first set up require the routes file under dependencies

const { apiRoutes, htmlRoutes } = require ("./routes")

// "/api" goes before "/" to filter out routes before the default
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
    console.log("server started on port " + PORT );
});