function apiRoutes(app) {
  app.get("/api/test", (req,res) => {
    console.log("[API GET]: test");
    res.send("Called test API function");
  })
}

module.exports = apiRoutes;