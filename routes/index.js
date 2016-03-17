var express = require('express');
var router = express.Router();
var db = require("../db/db");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


router.get('/cards', function(req, res, next) {
  db.query("SELECT * FROM flashcards", function(err, rows) {
    if (err) {
      return res.status(400).send(err)
    }
    res.send(rows);
  });
});

router.post('/cards', function(req, res) {
  db.query('INSERT INTO flashcards SET?', req.body, function(err, result) {
    if (err) return res.status(400).send(err);
    res.send(req.body);
  });
});

router.delete("/cards/:id", (req, res) => {
    id = req.params.id;
    db.query("DELETE FROM flashcards WHERE id=" + id, function(err, result) {
          if (err) return res.status(400).send(err);
          console.log('deleted' + result.affectedRows + 'rows');
    });
});

router.put("/cards/:id", (req, res) => {
  id = req.params.id;
  updateObj = req.body;
  var updateDB = "UPDATE flashcards SET category='" + updateObj.category + "', question='" + updateObj.question + "', answer='" + updateObj.answer + "' where id='" + id + "'";
  db.query(updateDB, function(err, result) {
    console.log(updateDB);
    res.send(result);
  })
})
module.exports = router;
