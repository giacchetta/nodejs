const mailchimp = require('@mailchimp/mailchimp_marketing');

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

async function addListMember() {
  const response = await mailchimp.lists.addListMember(listId,{
    email_type: "html",
    tags: ["dash-moegui-com"],
    email_address: subscribingUser.email,
    status: "subscribed",
    merge_fields: {
      FNAME: subscribingUser.firstName,
      LNAME: subscribingUser.lastName
    }
  });
  console.log(response);
};

addListMember();
