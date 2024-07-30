const router = require('express').Router();
const { Category, Product } = require('../../models');
const { destroy, create } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    Category.findAll()
  }
  catch(e) {
    res.json("Error occurred", e)
    res.status()
  }
  res.json("All Categories listed!")
 
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  try {
    Category.findOne({
      where: {
        id: req.params.id
    },
}
)}
  catch(e) {
    res.json("Error: ", e)
  }
  res.json("Category found!")
  
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  try {
    Category.create(
      {
        // id: req.params.id,
        category_name: req.params.body.category_name
      }
    ).then((newCategory) => {
      res.json("New Category created", newCategory)
    })
  }
  // Is this try catch block the right syntax?
  catch(e) {
    res.json("Error occured when trying to create a new category", e)
  }
  // create a new category
});

// figure out how to add aync and await here
router.put('/:id', (req, res) => {
  Category.update({
    // list out the different properties that should get updated
// req.body
  },
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

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.json("Category removed!")
  })
  .catch((e) => {
    res.json("Error occurred when trying to delete this category", e)
  })

  // res._destroy(req.params.id)
  // check if this the correct set-up
  // delete a category by its `id` value
});

module.exports = router;
