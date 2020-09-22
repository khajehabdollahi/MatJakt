const { Product } = require('../models/product');

const express = require('express');
const router = express.Router();

router.post('/generateList', async (req, res) => {
  let list = [];
  for (const product of req.body) {
    await Product.findOne({ $query: { name: { $regex: product['name'], $options: 'i' } } }, (err, data) => {
      if (err) console.log(err);
      list.push(data)
    })
  }
  console.log(list);
  res.send(list)
});

module.exports = router;