const { EC2Client, DescribeSubnetsCommand  } = require("@aws-sdk/client-ec2");

const credentials = {
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

var options = {
    credentials,
    region: process.env.AWS_REGION
  }

const client = new EC2Client(options);
const command = new DescribeSubnetsCommand ({Filters:[]});

const run = async () => {
  try {
    const data = await client.send(command);
    // console.log(data);
    console.log("Success", JSON.stringify(data.Subnets));
  } catch (err) {
    console.log(err, err.stack);
  }
};
run();
