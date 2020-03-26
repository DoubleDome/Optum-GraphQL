const express = require('express');
const router = express.Router();
const items = require('./data.json');

router.get('/:id', function(req, res) {
  let result = [];
  items.map(item => {
    if (item.id === req.params.id) {
      result.push(item);
    }
  });
  res.json(result);
});

module.exports = router;
