function apiRoutes(app) {
  app.get("/api/test", (req,res) => {
    console.log("[API GET]: test");
    res.send("Called test API function");
  })

  app.get("/api/saved", (req,res) => {
    console.log("[API GET]: fetch DB data");
    res.send("Success");
  })

  app.post("/api/saved", (req,res) => {
    console.log("[API POST]: saving to DB", req.body);
    res.send("Success");
  })
}

module.exports = apiRoutes;