const Company = require("../models").companies

module.exports = {
  async getAllCompanies(req, res){
    try{
      const companyCollection = await Company.findAll();
      res.status(200).send(companyCollection);
    }
    catch(e){
      console.log(e);
      res.status(500).send(e);
    }
  },
  async getCompanyById(req, res){
    try{
      const company = await Company.findOne({
        where:{
          id: req.params.companyId,
        }
      });
      res.status(200).send(company);
    }
    catch(e){
      console.log(e);
      res.status(500).send(e);
    }
  },
  async create(req, res) {
    try {
      const company = await Company.create({
        name: req.body.name,
      });
      res.status(201).send(company);
    } 
    catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async update(req, res) {
    try {
      const company = await Company.findOne({
        where:{
          id: req.params.companyId,
        }
      });
      if (company) {
        const updatedCompany = await company.update({
          name: req.body.name,
        });
        res.status(200).send(updatedCompany);
      } 
      else {
        res.status(404).send("Company Not Found");
      }
    } 
    catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async delete(req, res) {
    try{
      const company = await Company.findOne({
        where:{
          id: req.params.companyId,
        }
      });
      if(company) {
        company.destroy();
        res.status(200).send("Company successfully deleted");
      }
      else{
        res.status(404).send("Company Not Found");
      }
    }
    catch(e){
      console.log(e);
      res.status(400).send(e);
    }
  }
}