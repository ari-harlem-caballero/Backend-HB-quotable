const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');
const fetch = require('cross-fetch');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const quotes = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');

  const data = await quotes.json();

  const profile = await Profile.insert({ ...req.body, quote: data[0].quote });
  res.send(profile);
});
