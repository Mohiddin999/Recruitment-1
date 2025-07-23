// Load the AWS SDK
const AWS = require('aws-sdk');

// Set the region if not using Lambda's default environment
AWS.config.update({ region: 'us-west-2' });

// Create Step Functions client
const stepfunctions = new AWS.StepFunctions();

exports.handler = async (event) => {
  try {
    
    const body = JSON.parse(event.body);

    const jdText = body.jdText;
    const resumeText = body.resumeText;

    if (!jdText || !resumeText) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Both jdText and resumeText are required.' }),
      };
    }

    const params = {
      stateMachineArn: "arn:aws:states:us-west-2:764138983741:execution:Recruitment-Machine:8bf3cc15-39b8-4691-9c26-bc88c8dc6df9",
      input: JSON.stringify({
        jd: jdText,
        resume: resumeText,
      }),
    };

    
    const result = await stepfunctions.startExecution(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Step Function execution started successfully.',
        executionArn: result.executionArn,
      }),
    };
  } catch (err) {
    console.error("Error starting Step Function:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
