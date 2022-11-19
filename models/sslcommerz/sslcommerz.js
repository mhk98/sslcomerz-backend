module.exports = (sequelize, DataTypes) => {
  const PaymentSuccess = sequelize.define(
    "successes",
    {
      tran_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: true,
      },
      val_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      card_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      store_amount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_no: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bank_tran_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tran_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_issuer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_brand: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_sub_brand: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_issuer_country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_issuer_country_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      verify_sign: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      currency_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      currency_amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currency_rate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      updatedAt: false,
    }
  );
  return PaymentSuccess;
};
