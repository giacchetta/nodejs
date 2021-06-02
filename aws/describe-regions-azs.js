const { EC2Client, DescribeRegionsCommand, DescribeAvailabilityZonesCommand } = require("@aws-sdk/client-ec2");

const credentials = {
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

var options = {
    credentials,
    region: process.env.AWS_REGION
  }

const client = new EC2Client(options);
const regions = new DescribeRegionsCommand({});
const azs = new DescribeAvailabilityZonesCommand({});

const run = async () => {
  try {
    console.log("Regions", JSON.stringify(await client.send(regions)));
    console.log("AZs", JSON.stringify(await client.send(azs)));
  } catch (err) {
    console.log(err, err.stack);
  }
};
run();
