export default {
    //FIXME: Change by your public key
    publicKey: "44532503:testpublickey_csSdGM0KnIzIy0hYRj29NoDYjBKV6uDAfP42sIonUhG7u",
  
    //FIXME: Change by the right REST API Server Name (available in merchant BO: Settings->Shop->REST API Keys)
    apiServerName: "https://api.micuentaweb.pe",
  
    // FIXME: change by the right merchant payment server url
    merchantServerUrl: "http://192.168.100.133:3000/api",
  
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