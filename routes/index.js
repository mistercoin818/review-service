var express = require('express');
var router = express.Router();

let Board = [
  {
    likes: 2,
    username: "김성균",
    message: "우리 학교 좋아요"
  },
  {
    likes: 0,
    username: "김율전",
    message: "역시 명문사학 성균관대학교, 학교에 오길 잘 했어요!!"
  }
]

let len = Board.length;
/* GET home page. */
router.get('/', function(req, res, next) {
  len = Board.length;
  res.render('index', { title: 'Express', Board: Board, len: len });
});

router.post('/likes/:id', function(req,res,next){
  console.log(req.params)
  let index = req.params.id;
  Board[index].likes++;
  res.render('likeSuccess')
})

router.get('/write', function(req,res,next){
  res.render('write')
});

router.post('/write/new', function(req,res,next){
  // res.json(req.body)
  let newone = {
    likes: 0,
    username: req.body.username,
    message: req.body.message
  }
  Board = [...Board, newone]
  len = Board.length;
  res.render('writeSuccess')
});

module.exports = router;


