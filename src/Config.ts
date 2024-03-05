export default {
    //FIXME: Change by your public key
    publicKey: "~~CHANGE_ME_PUBLIC_KEY~~",
  
    //FIXME: Change by the right REST API Server Name (available in merchant BO: Settings->Shop->REST API Keys)
    apiServerName: "https://api.micuentaweb.pe",
  
    // FIXME: change by the right merchant payment server url
    merchantServerUrl: "http://YOUR_SERVER/api",
  
    //Customer Informations
    // Change by the desired parameters if necessary
    email: "customeremail@domain.com",
    customerReference: "customerRef",
  
    // Payment parameters
    // Change by the desired parameters if necessary
    amount: "100",
    currency: "PEN",
    orderId: "Order-123",
  
    // Environment TEST or PRODUCTION, refer to documentation for more information
    // FIXME: change by your targeted environment
    paymentMode: "TEST",
  };