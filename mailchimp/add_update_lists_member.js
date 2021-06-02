const mailchimp = require('@mailchimp/mailchimp_marketing');
const md5 = require('md5');

mailchimp.setConfig({
  apiKey: 'x',
  server: 'us2'
});

const listId = 'x'

const subscribingUser = {
  firstName: "Luciano",
  lastName: "Giacchetta",
  email: "luciano@moegui.com"
};

const subscriberHash = md5(subscribingUser.email.toLowerCase());

async function updateListMember() {
  const response = await mailchimp.lists.setListMember(
    listId,
    subscriberHash,
    {
    email_address: subscribingUser.email,
    status_if_new: "subscribed",
    status: "subscribed",
    email_type: "html",
    tags: ["dash-moegui-com"],
    merge_fields: {
      FNAME: subscribingUser.firstName,
      LNAME: subscribingUser.lastName,
    }
  });
  console.log(response);
};

updateListMember();
