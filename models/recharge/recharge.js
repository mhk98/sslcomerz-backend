module.exports = (sequelize, DataTypes) => {
  const RechargeTBL = sequelize.define('recharge', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    BankType: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    recharge_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rechargeTime_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    recharge_Amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rechargepreAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rechargepostAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rechargeStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return RechargeTBL;
};
