import AWS from 'aws-sdk';
const ses = new AWS.SESV2({ region: 'af-south-1' });

export const getEmailTemplate = (TemplateName: string) => {
  return ses.getEmailTemplate({ TemplateName }).promise();
};
