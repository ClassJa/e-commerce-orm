const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll()
    res.json(allTags)
  }
  catch(e) {
    res.status(400).json(e)
  }

  // find all tags
  // be sure to include its associated Product data
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
    res.status(400).json(e)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    Tag.create(
      {
        tag_name: req.params.body.tag_name
      }
    ).then((newTag) => {
      res.json(newTag)
    })
  }
  catch(e) {
    res.status(400).json(e)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const uTag = await Tag.update(
    {
      id: req.params.bo
    }
  )
  res.json(uTag)
  }
  catch(e) {
    res.status(400).json(e)
  }

});

router.delete('/:id', async (req, res) => {
  try {
    Tag.destroy({
    where: {
      id: req.params.id
    }
  })
}
catch(e){
  res.status(400).json(e)
}

  // delete on tag by its `id` value
});

module.exports = router;
