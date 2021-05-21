const { CloudFormationClient, CreateStackCommand } = require("@aws-sdk/client-cloudformation");

const credentials = {
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

var options = {
    credentials,
    region: 'us-east-1'
  }

var params = {
  StackName: 'Stack01',
  Capabilities: ['CAPABILITY_IAM','CAPABILITY_NAMED_IAM','CAPABILITY_AUTO_EXPAND'],
  DisableRollback: true,
  EnableTerminationProtection: false,
  Parameters: [
    {
      ParameterKey: 'KeyName',
      ParameterValue: 'elasticstack-node',
      // ResolvedValue: 'STRING_VALUE',
      // UsePreviousValue: true || false
    },
    {
      ParameterKey: 'VPC',
      ParameterValue: 'vpc-ecd32f91',
      // ResolvedValue: 'STRING_VALUE',
      // UsePreviousValue: true || false
    },
    {
      ParameterKey: 'Subnet1',
      ParameterValue: 'subnet-26f15f07',
      // ResolvedValue: 'STRING_VALUE',
      // UsePreviousValue: true || false
    },
    {
      ParameterKey: 'Subnet2',
      ParameterValue: 'subnet-2839a326',
      // ResolvedValue: 'STRING_VALUE',
      // UsePreviousValue: true || false
    },
    {
      ParameterKey: 'ASGDesiredCapacity',
      ParameterValue: '1',
      // ResolvedValue: 'STRING_VALUE',
      // UsePreviousValue: true || false
    },
    {
      ParameterKey: 'ClusterName',
      ParameterValue: 'elasticstack01',
      // ResolvedValue: 'STRING_VALUE',
      // UsePreviousValue: true || false
    },
    {
      ParameterKey: 'Operator',
      ParameterValue: 'luciano@moegui.com',
      // ResolvedValue: 'STRING_VALUE',
      // UsePreviousValue: true || false
   },
  ],
  TemplateURL: process.env.TemplateURL,
  TimeoutInMinutes: '30'
};

const client = new CloudFormationClient(options);
const command = new CreateStackCommand(params);

const run = async () => {
  try {
    const data = await client.send(command);
    console.log(data);
  } catch (err) {
    console.log(err, err.stack);
  }
};
run();
