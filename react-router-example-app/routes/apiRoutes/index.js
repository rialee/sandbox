// require express and router is a method 
// Router will replace the app.use
const router = require ("express").Router()


router
    // the "/" here means the default which is refering to the "/" route "localhouse:8080/"
    // if there is additional argument after "localhost:8080/objects", it will be Router.get("/objects")
    .get("/", ( req, res ) => res.json({key: "val"}))
   

module.exports = router;