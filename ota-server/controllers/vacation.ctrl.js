const express = require('express');
const vacationRepository = require('./../repositories/vacation.repository');

const router = express.Router();

router.get('/', function (req, res) {
    const getAllVacations = vacationRepository.getVacations(req);
    res.send(getAllVacations);
 })





 module.exports = router;