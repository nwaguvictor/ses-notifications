import { EventBridgeEvent } from 'aws-lambda';
import { EmailNotification } from '../../services';

export const handler = async (event: EventBridgeEvent<any, any>) => {
  const key = event['detail-type'] as string;
  const { customerEmail, data } = event.detail;
  await EmailNotification.sendEmail(key, [customerEmail], data);

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  };
};
