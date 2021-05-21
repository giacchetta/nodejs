var AWS = require('aws-sdk');

var options = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
  }
var cloudformation = new AWS.CloudFormation(options);

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

cloudformation.createStack(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
