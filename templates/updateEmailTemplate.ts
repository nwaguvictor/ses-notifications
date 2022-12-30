import AWS from 'aws-sdk';
import { UpdateEmailTemplateRequest } from 'aws-sdk/clients/sesv2';
const ses = new AWS.SESV2({ region: 'af-south-1' });

export const updateEmailTemplate = ({ TemplateName, TemplateContent }: UpdateEmailTemplateRequest) => {
  const params = {
    TemplateName,
    TemplateContent,
  };
  return ses.updateEmailTemplate(params).promise();
};
