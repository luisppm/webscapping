const express = require('express');
const router = express.Router();
const db = require("../models");
const main = require('../imoveis');

router.get("/", (req, res) => {
    res.status(200).send('Service executing');
})

router.get("/all", (req, res) => {
    console.log('get');
    db.ImoveisOLX.findAll().then(imoveis => res.send(imoveis));
});

router.get("/imoveisrun", (req, res)=> {
    console.log('leitura imoveis run...');
    main();
    res.status(200).send('leitura imoveis run...');
})

module.exports = router