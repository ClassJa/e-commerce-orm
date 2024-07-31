const router = require('express').Router();
const { Category, Product } = require('../../models');
const { destroy, create } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // console.log("Reached!")
   // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({include: [
      Product
    ]})
    res.json(allCategories)
  }
  catch(e) {
    res.status(400).json(e)
  }
});

router.get('/:id', async (req, res) => {
    // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const foundCategory = await Category.findOne({
      where: {
        id: req.params.id
    },
}
)
res.json(foundCategory)
}
  catch(e) {
    res.status(400).json(e)
  }
});

router.post('/', async (req, res) => {
    // create a new category
  try {
    const newCategory = await Category.create(
      {
        // id: req.body.id,
        category_name: req.body.category_name
      }
    )
    res.json(newCategory)
  }
  catch(e) {
    res.status(400).json(e)
  }
});

router.put('/:id', async (req, res) => {
    // update a category by its `id` value
 try { 
  const updatedCategory = await Category.update(
    {
      // id: req.body.id,
      category_name: req.body.category_name
    },
    // list out the different properties that should get updated
  {
    where: {
      id: req.params.id
    },
  }
  // check if this the correct set-up
)
res.json(updatedCategory)
}
catch(e){
  res.status(400).json(e)
}
});

router.delete('/:id', async (req, res) => {
  await Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.json("Category removed!")
  })
  .catch((e) => {
    res.status(400).json(e)
  })
});

module.exports = router;
