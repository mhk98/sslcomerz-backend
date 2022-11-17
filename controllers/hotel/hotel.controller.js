// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createResponse } = require('../../utils/responseGenerator');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../../models');

const Hotel = db.Hotel;

module.exports.hotelInsert = async (req, res) => {
  try {
    const { name, cat_id, etc } = req.body;
    if (!cat_id || !name || !etc) {
      res.json(createResponse(true, null, 'Parameter missing'));
    } else {
      const result = await Hotel.create({
        name: name,
        cat_id,
        etc,
      });

      if (result) {
        res.json(createResponse(false, result, 'Record inserted'));
      }
    }
  } catch (error) {
    res.json(createResponse(true, null, `${error.message}`));
  }
};
