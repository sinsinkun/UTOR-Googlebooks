const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({ }, { strict:false, collection:"saved_books" });
const Book = mongoose.model("Book", bookSchema);

mongoose.connect(process.env.DB_URL || "mongodb://localhost/test_db", 
  {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

function apiRoutes(app) {
  app.get("/api/test", (req,res) => {
    console.log("[API GET]: test");
    res.send("Called test API function");
  })

  app.get("/api/saved", async (req,res) => {
    console.log("[API GET]: fetch DB data");
    const data = await Book.find({});
    res.send(JSON.stringify(data));
  })

  app.post("/api/saved", async (req,res) => {
    console.log("[API POST]: saving to DB", req.body.title);
    await new Book(req.body).save();
    res.send("Success");
  })

  app.delete("/api/saved/:id", async (req,res) => {
    console.log("[API DEL]: deleting entry", req.params.id);
    const response = await Book.deleteOne({_id:req.params.id});
    console.log(response);
    res.send("Success");
  })
}

module.exports = apiRoutes;