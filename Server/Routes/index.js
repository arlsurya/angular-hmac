const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
   return res.send('Index Route')
});

module.exports = router;
