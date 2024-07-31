const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { destroy, create } = require('../../models/ProductTag');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
   // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll()
    res.json(allTags)
  }
  catch(e) {
    res.status(400).json(e)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const oneTag = await Tag.findOne({
      where: {
        id: req.params.id
      },
    })
    res.json(oneTag)
  }
  catch(e) {
    res.status(400).json(e)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(
      {
        tag_name: req.body.tag_name
      }
    )
    res.json(newTag)
  }
    catch(e) {
      res.status(400).json(e)
    }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
  res.json(updatedTag)
}
catch(e) {
  res.status(400).json(e)
}
});

router.delete('/:id', async (req, res) => {
  const removeTag = await Tag.destroy({
    where: {
      id: req.params.id
    }
})
    res.json("Tag removed!")
catch(e){
    res.status(400).json(e)
  }
})

module.exports = router;
