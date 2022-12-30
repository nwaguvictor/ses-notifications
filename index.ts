import 'dotenv/config';
import { EmailNotification } from './services';
import { createEmailTemplate, getEmailTemplate, deleteEmailTemplate, updateEmailTemplate } from './templates';

// createEmailTemplate({
//   TemplateName: 'OrderDeleted',
//   TemplateContent: {
//     Subject: `Order Deleted`,
//     Html: `<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" \/>\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" \/>\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" \/>\r\n    <title>OrderEmailTemplate<\/title>\r\n  <\/head>\r\n  <body>\r\n    <p>Hello {{name}}, your order with id: {{orderId}} has been deleted!!.<\/p>\r\n    <p>Thank you for shopping with us.<\/p>\r\n\r\n    <br \/>\r\n    <p>Team AWS SES<\/p>\r\n  <\/body>\r\n<\/html>\r\n`,
//     Text: `Hello {{name}}, your order with id: {{orderId}} has been deleted!!\nThank you for shopping with us.`,
//   },
// })
//   .then(() => console.log({ success: true, status: 200 }))
//   .catch(err => console.log(err));

// getEmailTemplate('OrderCreatedTemplate')
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));

// deleteEmailTemplate('OrderCreatedTemplate')
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));

// updateEmailTemplate({
//   TemplateName: 'OrderCreatedTemplate',
//   TemplateContent: {
//     Subject: 'New Order Processed',
//     Html: "Hello {{name}}, your order have been packaged and it's ready for shipping.",
//     Text: "Hello {{name}}, your order have been packaged and it's ready for shipping.",
//   },
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));

// EmailNotification.sendEmail('OrderProcessedTemplate', ['leofizzy3@gmail.com'], { name: 'Victor' })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
