import AWS from 'aws-sdk';
const ses = new AWS.SESV2({ region: 'af-south-1' });

export const deleteEmailTemplate = (TemplateName: string) => {
  return ses.deleteEmailTemplate({ TemplateName }).promise();
};
