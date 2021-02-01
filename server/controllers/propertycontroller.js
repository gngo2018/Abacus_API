const Property = require("../models").properties

module.exports = {
  async getAllProperties(req, res){
    try{
      const propertyCollection = await Property.findAll();
      res.status(200).send(propertyCollection);
    }
    catch(e){
      console.log(e);
      res.status(500).send(e);
    }
  },
  async getPropertyById(req, res){
    try{
      const property = await Property.findOne({
        where:{
          id: req.params.propertyId,
        }
      });
      res.status(200).send(property);
    }
    catch(e){
      console.log(e);
      res.status(500).send(e);
    }
  },
  async create(req, res) {
    try {
      const property = await Property.create({
        name: req.body.name,
        company_id: req.body.companyId,
        city: req.body.city,
        state: req.body.state,
        address: req.body.address,
        phone_number: req.body.phoneNumber,
        email: req.body.email,
        units_total: req.body.unitsTotal,
        units_utilized: req.body.unitsUtilized,
        annual_revenue: req.body.annualRevenue,
        annual_revenue_datetime: req.body.annualRevenueDatetime,
      });
      res.status(201).send(property);
    } 
    catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async update(req, res) {
    try {
      const property = await Property.findOne({
        where:{
          id: req.params.propertyId,
        }
      });
      if (property) {
        const updatedProperty = await property.update({
            name: req.body.name,
            company_id: req.body.companyId,
            city: req.body.city,
            state: req.body.state,
            address: req.body.address,
            phone_number: req.body.phoneNumber,
            email: req.body.email,
            units_total: req.body.unitsTotal,
            units_utilized: req.body.unitsUtilized,
            annual_revenue: req.body.annualRevenue,
            annual_revenue_datetime: req.body.annualRevenueDatetime,
        });
        res.status(200).send(updatedProperty);
      } 
      else {
        res.status(404).send("Property Not Found");
      }
    } 
    catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async delete(req, res) {
    try{
      const property = await Property.findOne({
        where:{
          id: req.params.propertyId,
        }
      });
      if(property) {
        property.destroy();
        res.status(200).send("Property successfully deleted");
      }
      else{
        res.status(404).send("Property Not Found");
      }
    }
    catch(e){
      console.log(e);
      res.status(400).send(e);
    }
  }
}