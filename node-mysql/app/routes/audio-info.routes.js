module.exports = app => {
  const audio = require("../controllers/audio.controller.js");
  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", audio.findAll);

  // // Create a new Tutorial
  // router.post("/", audio.create);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use('/audio', router);
};
