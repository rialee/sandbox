module.exports = 
{
    // the require path is the ./apiRoutes and ./htmlRoutes folders
    // when requiring just a folder, by default if there is an index.js file in the folder,that is the file that will be required
    
    apiRoutes: require("./apiRoutes"),
    htmlRoutes: require("./htmlRoutes")
}