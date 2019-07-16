const LETTERS = require('../models/letters');

module.exports = async (req, res) => {
  const { email, nickname } = req.query;
  if (req.decode === email) {
    const data = await LETTERS.find({ to: nickname });

    const obj = {};
    obj.nickname = nickname;
    obj.toData = data;
    res.status(200).json(obj);
  } else {
    res.status(400).json('partner가 존재하지 않습니다');
  }
};