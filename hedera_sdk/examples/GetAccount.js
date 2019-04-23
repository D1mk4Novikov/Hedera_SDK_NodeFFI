// Connection HederaSDK library for further use
const HederaSDK = require("../HederaSDK.js");

// Creating an instance of the HederaSDK class
let hederaHashgraph = new HederaSDK("_address_", "_port_");

// Call method and get information about your account
console.log(hederaHashgraph.getAccount("_operator_value_", "_private_key_"));