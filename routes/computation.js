var express = require('express');

var router = express.Router();



router.get('/', function(req, res, next) {

  var NR1 = Math.random() *10;

  var NR2 = Math.random() *10;

  var NR3 = Math.random() *10;


  var COS = Math.cos(NR1);

  var SIN = Math.asin(NR2);

  var SINH = Math.asinh(NR3);

  

  res.render('computation', { title: 'Sai Mithilesh Singuluri',

  NR1:NR1,

  NR2:NR2,

  NR3:NR3,



  COS:COS,

  SIN:SIN,

  SINH:SINH,

 

});

});



module.exports = router;