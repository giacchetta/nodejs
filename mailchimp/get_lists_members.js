const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: 'x',
  server: 'us2'
});

const listId = 'x'

async function getListMembers() {
  const response = await mailchimp.lists.getListMembersInfo(listId);
  console.log(response);
};

getListMembers();
