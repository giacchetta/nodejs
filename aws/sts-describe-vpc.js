import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts";
import { EC2Client, DescribeVpcsCommand } from "@aws-sdk/client-ec2";

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

const sts_client = new STSClient(options);
const assume_role = new AssumeRoleCommand(assume);

const run = async () => {
  try {
    // console.log(options);
    const sts = await sts_client.send(assume_role);
    const credentials = {
      accessKeyId: sts.Credentials.AccessKeyId,
      secretAccessKey: sts.Credentials.SecretAccessKey,
      sessionToken: sts.Credentials.SessionToken
    }
    var ec2_config = {
      credentials,
      region: process.env.AWS_REGION
    }
    // console.log(ec2_config);
    const ec2_client = new EC2Client(ec2_config);
    const describe_vpc = new DescribeVpcsCommand({Filters:[]});
    const ec2 = await ec2_client.send(describe_vpc);
    console.log(ec2.Vpcs);

  } catch (err) {
    console.log(err, err.stack);
  }
};
run();
