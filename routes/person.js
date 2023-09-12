const express = require('express');
const Person = require('../models/person')
const router = express.Router();

//create
router.post('/', async(req,res) => {
   try {
    const {name, value} = req.body;

    if (typeof name !== 'string' || typeof value !== 'string') {
        return res.status(400).json({ error: 'Name and value must be strings' });
      }

        const person = await Person.create({name, value})
    res.status(201).json(person);
    } catch (error) {
        console.error(error)
        res.status(500).send({error: 'internal server error'})
    }
})


//read endpoint
router.get("/:id", async(req, res) => {
    try {
        const id = req.params.id
        const person = await Person.findByPk(id)
        if (!person) {
            res.status(404).send({ error: "Person with given ID not found" });
        } else {
          res.status(200).send(person);
        }
      } catch (error) {
        console.error({ error: "Error getting user with given ID" });
        res.status(500).send({ error: "Internal server error" });
      }
});

// UPDATE by id
router.put('/:id', async (req, res) => {

    try {
      const id = req.params.id;
      const { name, value } = req.body;

      if (typeof name !== 'string' || typeof value !== 'string') {
        return res.status(400).json({ error: 'Name and value must be strings' });
      }

      
      // Use Sequelize to update the age by ID
      const [updatedRowCount] = await Person.update({ name, value }, {
        where: { id },
      });
  
      if (updatedRowCount === 0) {
        res.status(404).json({ error: 'Person not found' });
      } else {
        const updatedPerson = await Person.findByPk(id)
        res.status(200).json({ message: 'Person updated successfully', updatedDetails: updatedPerson });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE by ID
router.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;

      const person = await Person.findByPk(id)
      const deleted_data = person.dataValues
      // Use Sequelize to delete the person by ID
      const deletedRowCount = await Person.destroy({
        where: { id },
      });
  
      if (deletedRowCount === 0) {
        res.status(404).json({ error: 'Person not found' });
      } else {
        res.status(200).json({message: `user deleted successfully`, deleted_user: deleted_data});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router