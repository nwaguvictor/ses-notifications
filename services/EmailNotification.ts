import 'dotenv/config';
import AWS from 'aws-sdk';
const ses = new AWS.SESV2({ region: 'af-south-1' });
const FROM_EMAIL_ADDRESS = process.env.FROM_EMAIL_ADDRESS;

export class EmailNotification {
  public static sendEmail(templateName: string, toAddresses: string[], data: any = {}) {
    return ses
      .sendEmail({
        FromEmailAddress: FROM_EMAIL_ADDRESS,
        Destination: { ToAddresses: toAddresses },
        Content: {
          Template: {
            TemplateName: templateName,
            TemplateData: JSON.stringify({ ...data }),
          },
        },
      })
      .promise();
  }
}
