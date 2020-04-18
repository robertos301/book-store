import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_b9XNiFN1EYgl5Ec0cqQ3iuLQ003IGgIRQt";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Book Store Srl."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
