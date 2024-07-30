const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
   // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll()
    res.json(allTags)
  }
  catch(e) {
    res.json("Error occurred", e)
  }
});

router.get('/:id', async (req, res) => {
  try {
    await Tag.findOne({
      where: {
        id: req.params.id
      },
    })
  }
  catch(e) {
    res.json("Error", e)
    res.status(400)
  }
  res.json("Tag found!")
  res.status(200)
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    await Tag.create(
      {
        tag_name: req.params.body.tag_name
      }
    ).then((newTag) => {
      res.json("New Tag created", newTag)
      res.status(200)
    })
  }
  catch(e) {
    res.json("Error occured when trying to create a new Tag")
    res.status(400)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  await Tag.update(
    {
      id: req.params.body,
      tag_name: req.params.body
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
  .catch((e) => {
    res.json("Error occurred", e)
  })
  res.json("Update completed for id: ", req.params.id)

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.json("Tag removed!")
  })
  .catch((e) => {
    res.json("Error occurred when trying to delete this category", e)
    res.status(400)
  })
});

module.exports = router;
