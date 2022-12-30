import AWS from 'aws-sdk';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PutEventsRequest } from 'aws-sdk/clients/eventbridge';
const event = new AWS.EventBridge();

export const createOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body as string);
  const data = await createOrderEvent(body);

  console.log(JSON.stringify(data, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Order created successfully', data: body }),
  };
};

export const updateOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body as string);
  const data = await updateOrderEvent(body);

  console.log(JSON.stringify(data, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Order updated successfully', data: body }),
  };
};

export const deleteOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body as string);
  const data = await deleteOrderEvent(body);

  console.log(JSON.stringify(data, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Order deleted successfully', data: body }),
  };
};

interface OrderEntity {
  name: string;
  order?: { name: string; description?: string };
  amount: number;
  restaurantName: string;
}

function createOrderEvent(orderData: OrderEntity) {
  const params: PutEventsRequest = {
    Entries: [
      {
        Detail: JSON.stringify(orderData),
        DetailType: 'OrderCreated',
        Source: 'custom.OrderManager',
      },
    ],
  };

  return event.putEvents(params).promise();
}

function updateOrderEvent(orderData: OrderEntity) {
  const params: PutEventsRequest = {
    Entries: [
      {
        Detail: JSON.stringify(orderData),
        DetailType: 'OrderUpdated',
        Source: 'custom.OrderManager',
      },
    ],
  };

  return event.putEvents(params).promise();
}

function deleteOrderEvent(orderData: OrderEntity) {
  const params: PutEventsRequest = {
    Entries: [
      {
        Detail: JSON.stringify(orderData),
        DetailType: 'OrderDeleted',
        Source: 'custom.OrderManager',
      },
    ],
  };

  return event.putEvents(params).promise();
}
