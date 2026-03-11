const Project = require("../models/project");

exports.getProjects = async(req,res)=>{

const projects = await Project.find();

res.json(projects);

};