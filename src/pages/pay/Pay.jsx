import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest"
import { useParams } from "react-router-dom";
import CheckoutForm from "../../Components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NZcMwSFW5uOfnggK15HKvFkVjvM0itNEMX9ifqqbq2ZOnJVCqhBj4UzY7nWCqHqLVLrfdBBBX4GFFtIQGUzJmd300gYiYYy6Y"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return <div className="pay">
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
  </div>;
};

export default Pay;