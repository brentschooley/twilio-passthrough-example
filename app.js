const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID;

const client = require('twilio')(accountSid, authToken);

client.notify.services(notifyServiceSid)
  .notifications.create({
    toBinding: [
      JSON.stringify({ binding_type: 'sms', address: '** First phone number here **' }),
      JSON.stringify({ binding_type: 'sms', address: '** Second phone number here **' }),
      // This also works for iOS, Android, and FB Messenger.
      // You can mix and match binding_type in the toBinding.
    ],
    body: 'You just sent your first message with the Passthrough API!'
  })
  .then(notification => console.log(notification.sid))
  .catch(error => console.log(error));
