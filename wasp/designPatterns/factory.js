class CoreNotificationService {
    send() {
        console.log(this.message);
    }
}

class PushNotificationService extends CoreNotificationService {
    constructor(message){
        super();
        this.message = `sent push notification - ${message}`;
    }
}

class MailService extends CoreNotificationService {
    constructor(message){
        super();
        this.message = `sent mail notification - ${message}`;
    }
}

class CommunicationService {
constructor(type,message){
    if(type === 'push')
       return new PushNotificationService(message);
    if(type === 'mail')
        return new MailService(message);
}
}

const instance = new CommunicationService('mail','redeem coupon HELLO50'); // sent mail notification - redeem coupon HELLO50
instance.send(); // Used prototype concept here

// Helps when specific instance of generic instance is decided at run time.