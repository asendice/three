const Project = require("../models/Projects");
// const Tech = require("../models/Tech");
// const AboutMe = require("../models/AboutMe");

// get and return all projects
exports.getProjects = (req, res) => {
  Project.find().then((proj) => {
    if (!proj) {
      return res.status(404).json({
        errors: [{ user: "Projects cannot be found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: proj,
      });
    }
  });
};