const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  res.send({ id: '1', name: 'mine', quote: 'my quote' });
});