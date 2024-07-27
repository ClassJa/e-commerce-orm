const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    Category.findAll()
  }
  catch(e) {
    res.status("Error occurred", e)
  }
 
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne()
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {

  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.params.id, req.body)
  // check if this the correct set-up
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  res._destroy(req.params.id)
  // check if this the correct set-up
  // delete a category by its `id` value
});

module.exports = router;
