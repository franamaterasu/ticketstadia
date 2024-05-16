import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

type PayButtonProps = {
  value: string;
  invoice: string;
};

const PayButton = ({ value, invoice }: PayButtonProps) => {
  const paypalOptions = {
    clientId:
      'AcGz9xXO5oYU776DxkOZ7Qh2FiziB7vkZ0eFfdt_-DQhVO2SVHGtdJoGIa161qK4STZHCd1l7gOBSxT3',
    currency: 'EUR',
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={{ layout: 'horizontal', height: 46 }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: invoice,
                amount: {
                  value: value,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture();
          console.log('Order', order);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayButton;
