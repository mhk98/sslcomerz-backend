const { createResponse } = require('../../utils/responseGenerator');
const db = require('../../models');
const user = require('../../models/user/user');
const Card = db.cardtbl;
const User = db.user
//card objet 

// yameek
function prepare4_2Json(){
  console.log("iam json creator for 4.2");  
}

module.exports.cardtblInsert = async (req, res) => {
  try {
    const {
      Card_No,
      Device_Type,
      Physical_ID,
      User_ID,
      Issue_Date,
      Expire_Date,
      amount,
      last_chargeamounte,
      last_chargeTime,
      status

    } = req.body;
    if (
      !Card_No ||
      !Device_Type ||
      !Physical_ID ||
      !User_ID ||
      !Issue_Date ||
      !Expire_Date ||
      !amount ||
      !last_chargeamounte ||
      !last_chargeTime ||
      !status

    ) {
      res.json(createResponse(true, null, 'Parameter missing'));
    } else {
      const result = await Card.create({
        Card_No,
        Device_Type,
        Physical_ID,
        User_ID,
        Issue_Date,
        Expire_Date,
        amount,
        last_chargeamounte,
        last_chargeTime,
        status
      });
      if (result) {
        res.json(createResponse(false, result, 'Record inserted'));
      }
    }
  } catch (error) {
    res.json(createResponse(true, null, `${error.message}`));
  }
}

// get all cards of a user using userID
module.exports.getCardByUserId = async (req, res, next) => {
  try {
    const { id } = req.body;
    //gaurd condition 
    if (!id) {
      res.json(createResponse(null, 'Card id missing', true));
    }
    // body has id 
    else {
      prepare4_2Json();
      const result = await Card.findOne({
        where: {
          id: id
        },
        include: [
          {
            model: User,
            // to check particular data by attributes
            // attributes: ['Device_Type']
          }
        ]

      });

      if (result) {
        res.json(createResponse(result))
      }
      else {
        res.json(createResponse(null, "Card not found with this id", true))
      }
    }
  }
  catch (error) {
    next(error.message)
  }
};
