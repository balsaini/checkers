/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */

import express from 'express';
import Player from '../models/player';
// import bodyValidator from '../validators/bookmarks/body';
// import queryValidator from '../validators/bookmarks/query';
// import paramsValidator from '../validators/bookmarks/params';
const router = module.exports = express.Router();

// index
router.get('/', (req, res) => {
  Player.find()
          // .sort(res.locals.sort)
          // .limit(res.locals.limit)
          // .skip(res.locals.skip)
          .exec((err, players) => {
            res.send({ players });
          });
});

// show
// router.get('/:id', paramsValidator, (req, res) => {
//   Bookmark.findById(req.params.id, (err, bookmark) => {
//     res.send({ bookmark });
//   });
// });

// create new player
router.post('/', (req, res) => {
  Player.create(req.body, (err, player) => {
    res.send({ player });
  });
});
