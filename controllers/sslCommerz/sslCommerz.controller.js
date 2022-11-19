const express = require("express");
const { async } = require("rxjs");
const shortid = require("shortid");
const SSLCommerzPayment = require("sslcommerz-lts");
const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const Success = db.success;
// const demoFunc = async (amount, TranId) => {
//   const data = {
//     total_amount: amount,
//     currency: 'BDT',
//     tran_id: TranId,
//     // success_url: `http://localhost:4000/api/v1/sslcommerz/ssl-payment-success?transactionId=${TranId}`,
//     // fail_url: `http://localhost:4000/api/v1/sslcommerz/ssl-payment-fail?transactionId=${TranId}`,
//     // cancel_url: `http://localhost:4000/api/v1/sslcommerz/ssl-payment-cancel?transactionId=${TranId}`,
//     success_url: 'http://localhost:4000/api/v1/sslcommerz/ssl-payment-success',
//     fail_url: 'http://localhost:4000/api/v1/sslcommerz/ssl-payment-fail',
//     cancel_url: 'http://localhost:4000/api/v1/sslcommerz/ssl-payment-cancel',
//     shipping_method: 'No',
//     product_name: 'device_number.',
//     product_category: 'Electronic',
//     product_profile: 'general',
//     cus_name: 'Customer Name',
//     cus_email: 'cust@yahoo.com',
//     cus_add1: 'Dhaka',
//     cus_add2: 'Dhaka',
//     cus_city: 'Dhaka',
//     cus_state: 'Dhaka',
//     cus_postcode: '1000',
//     cus_country: 'Bangladesh',
//     cus_phone: '01711111111',
//     cus_fax: '01711111111',
//     multi_card_name: 'mastercard',
//     value_a: 'ref001_A',
//     value_b: 'ref002_B',
//     value_c: 'ref003_C',
//     value_d: 'ref004_D',
//     // ipn_url: `http://localhost:4000/api/v1/sslcommerz/ssl-payment-notification?transactionId=${TranId}`,
//     ipn_url: 'http://localhost:4000/api/v1/sslcommerz/ssl-payment-notification',
//   };

//   const sslcommerz = new SSLCommerzPayment(
//     process.env.STORE_ID,
//     process.env.STORE_PASSWORD,
//     false,
//   ); //true for live default false for sandbox
//   const result = await sslcommerz.init(data);

//   if (result?.GatewayPageURL) {
//     return { TranId, GatewayPageURL: result.GatewayPageURL };
//   } else {
//     return false;
//   }
// };

exports.sslrequestInsert = async (req, res) => {
  // console.log(req.body);
  const TranId = `${shortid.generate()}`;
  const data = {
    total_amount: 200,
    // ...req.body,
    currency: "BDT",
    tran_id: TranId,
    // success_url: 'http://localhost:4000/api/v1/sslcommerz/ssl-payment-success',
    // fail_url: 'http://localhost:4000/api/v1/sslcommerz/ssl-payment-fail',
    // cancel_url: 'http://localhost:4000/api/v1/sslcommerz/ssl-payment-cancel',
    success_url: `http://localhost:4000/api/v1/sslcommerz/ssl-payment-success?transactionId=${TranId}`,
    fail_url: `http://localhost:4000/api/v1/sslcommerz/ssl-payment-fail?transactionId=${TranId}`,
    cancel_url: `http://localhost:4000/api/v1/sslcommerz/ssl-payment-cancel?transactionId=${TranId}`,
    shipping_method: "No",
    product_name: "device_number.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "cust@yahoo.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    multi_card_name: "mastercard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    // value_c: 'ref003_C',
    value_d: "ref004_D",
    ipn_url: "http://localhost:4000/api/v1/sslcommerz/ssl-payment-notification",
  };
  // const sslcommerz = new SSLCommerzPayment(
  //   process.env.STORE_ID,
  //   process.env.STORE_PASSWORD,
  //   false
  // ); //true for live default false for sandbox
  // const result = await sslcommerz.init(data);
  // if (result?.GatewayPageURL) {
  //   return { TranId, GatewayPageURL: result.GatewayPageURL };
  // } else {
  //   return false;
  // }
  const sslcommer = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASSWORD,
    false
  ); //true for live default false for sandbox
  const r1 = await sslcommer.init(data);
  return res.status(200).json({
    success: true,
    data: r1,
  });
};

// module.exports.sslrequestInsert = async (req, res) => {
//   const { amount } = req.body;
//   // console.log(req.body);
//   const TranId = `${shortid.generate()}`;
//   // console.log(TranId);
//   const ddd = await demoFunc(amount, TranId);
//   //   // save information to database
//   res.json(ddd.GatewayPageURL);
// };

module.exports.sslpaymentsuccessInsert = async (req, res) => {
  const { transactionId } = req.query;
  console.log(req.body);
  const {
    tran_id,
    val_id,
    amount,
    card_type,
    store_amount,
    card_no,
    bank_tran_id,
    status,
    tran_date,
    currency,
    card_issuer,
    card_brand,
    card_sub_brand,
    card_issuer_country,
    card_issuer_country_code,
    verify_sign,
    currency_type,
    currency_amount,
    currency_rate,
  } = req.body;
  // console.log(tran_id, val_id, amount, status);

  const jane = Success.create({
    tran_id,
    val_id,
    amount,
    card_type,
    store_amount,
    card_no,
    bank_tran_id,
    status,
    tran_date,
    currency,
    card_issuer,
    card_brand,
    card_sub_brand,
    card_issuer_country,
    card_issuer_country_code,
    verify_sign,
    currency_type,
    currency_amount,
    currency_rate,
  }).then((res) => {
    // console.log(res);
  });

  // await result.save();
  res.redirect(`http://localhost:3000/success/${transactionId}`);
};

// module.exports.findOne = async (req, res) => {
//   const { transactionId } = req.body;
//   console.log(transactionId);
//   // //   // search info in db
//   // //   "status": Complete
//   // //   if  ====>
// };

module.exports.sslpaymentnotifiactionInsert = async (req, res) => {
  return res.status(200).json({
    data: req.body,
    message: "Payment notification",
  });
};

module.exports.sslpaymentfailInsert = async (req, res) => {
  // let status = 'fail';
  // intimidiate_process(req.body, status);
  return res.status(200).json({
    data: req.body,
    message: "Payment failed",
  });
};

module.exports.sslpaymentcancelInsert = async (req, res) => {
  /**
   * If payment cancelled
   */
  // let status = 'cancel';
  // intimidiate_process(req.body, status);

  return res.status(200).json({
    data: req.body,
    message: "Payment cancelled",
  });
};
