const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes, Sequelize) => {
  const usertbls = sequelize.define(
    'usertbl',
    {
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      User_Type: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },

      User_FirstName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      User_LastName: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      User_Email: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      PIN: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      IDcard: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      Passportno: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      pass_word: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      Mobile_No: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
      },
      agent: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
    },
  );
  usertbls.prototype.validPassword = async (password, hash) => {
    return await bcrypt.compareSync(password, hash);
  };
  usertbls.prototype.getHashPass = async (password) => {
    const salt = await bcrypt.genSaltSync(10, 'a');
    const hashed = bcrypt.hashSync(password, salt);
    return hashed;
  };
  return usertbls;
};
