const router = require('express').Router();
const { Category, Product } = require('../../models');
const { destroy, create } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/categories', async (req, res) => {
  try {
    await Category.findAll()
  }
  catch(e) {
    res.json("Error occurred", e)
    res.status(400)
  }
  res.json("All Categories listed!")
  res.status(200)
 
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    await Category.findOne({
      where: {
        id: req.params.id
    },
}
)}
  catch(e) {
    res.json("Error: ", e)
    res.status(400)
  }
  res.json("Category found!")
  res.status(200)
  
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    await Category.create(
      {
        // id: req.params.id,
        category_name: req.params.body.category_name
      }
    ).then((newCategory) => {
      res.json("New Category created", newCategory)
      res.status(200)
    })
  }
  // Is this try catch block the right syntax?
  catch(e) {
    res.json("Error occured when trying to create a new category", e)
    res.status(400)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  await Category.update(
    {
      id: req.params.body,
      category_name: req.params.body
    },
    // list out the different properties that should get updated
// req.body
  {
    where: {
      id: req.params.id
    },
  }
  
  // check if this the correct set-up
  // update a category by its `id` value
)
.catch((e) => {
  res.json("Error occurred", e)
})
res.json("Update completed for id: ", req.params.id)
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
    res.json("Error occurred when trying to delete this category", e)
    res.statu(400)
  })

  // res._destroy(req.params.id)
  // check if this the correct set-up
  // delete a category by its `id` value
});

module.exports = router;
