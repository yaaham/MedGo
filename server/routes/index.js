const FormProvider = require('../Provider/formProvider');
var express = require('express');
var router = express.Router();
router.post('/form', [FormProvider.Send]);
router.get('/form', [FormProvider.getter]);

module.exports = router;
