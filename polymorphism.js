class Payment {

    billPay(amount) {
        console.log('This is a paymeny of  ' +amount)
    }
}

class CreditPay extends Payment {

    billPay(amount) {
        console.log("This is credit card payment of  " + amount)
    }
}

class PhonePay extends Payment {

    billPay(amount) {
        console.log('This is payment of  ' + amount + ' with phone pay')
    }
}

Payment.prototype.processing = function () {
    console.log("The Payment is in Progress!, Wait for some time Don't click back button")
}
let cc = new CreditPay()
cc.billPay(10000);
cc.processing()



let pp = new PhonePay()
pp.processing()
pp.billPay(25000);