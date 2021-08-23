import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts";

const credentials = {
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

var options = {
    credentials,
    region: process.env.AWS_REGION
  }

  var assume = {
    RoleArn: process.env.AWS_IAM_ROLE,
    RoleSessionName: process.env.AWS_IAM_ROLE_SESSION_NAME
  }

const client = new STSClient(options);
const command = new AssumeRoleCommand(assume);

const run = async () => {
  try {
    const data = await client.send(command);
    console.log(options);
    console.log(JSON.stringify(data.Credentials));
  } catch (err) {
    console.log(err, err.stack);
  }
};
run();
