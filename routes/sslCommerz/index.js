const router = require("express").Router();
const sslCommerz = require("../../controllers/sslCommerz/sslCommerz.controller");

router.post("/ssl-request", sslCommerz.sslrequestInsert);
router.post("/ssl-payment-success", sslCommerz.sslpaymentsuccessInsert);
router.post(
  "/ssl-payment-notification",
  sslCommerz.sslpaymentnotifiactionInsert
);
router.post("/ssl-payment-fail", sslCommerz.sslpaymentfailInsert);
router.post("/ssl-payment-cancel", sslCommerz.sslpaymentcancelInsert);

module.exports = router;
