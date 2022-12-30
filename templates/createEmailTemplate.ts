import AWS from 'aws-sdk';
import { CreateEmailTemplateRequest } from 'aws-sdk/clients/sesv2';
const ses = new AWS.SESV2({ region: 'af-south-1' });

export const createEmailTemplate = ({ TemplateName, TemplateContent }: CreateEmailTemplateRequest) => {
  const params = {
    TemplateContent,
    TemplateName /* required */,
  };

  return ses.createEmailTemplate(params).promise();
};
