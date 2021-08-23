import { STS } from "@aws-sdk/client-sts";

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

const sts = new STS(options);

const run = async () => {
  try {
    const data = await sts.assumeRole(assume);
    console.log(data.Credentials);
  } catch (err) {
    console.log(err, err.stack);
  }
};
run();
