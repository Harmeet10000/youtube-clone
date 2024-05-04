import styled from "styled-components";
import axios from "axios";
import React from "react";

const amount = 79;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const Payment = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:5173/api/getkey");
    const {
      data: { order },
    } = await axios.post("http://www.localhost:5173/api/checkout");

    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Harmeet Singh",
      description: "Test Transaction for YouTube-Clone",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:3000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <Container>
        <Wrapper>
          <h1>Buy premium</h1>
          <h3>Enjoy 2 months of YouTube Premium</h3>
          <p>
            Get ad-free access, downloads, and background play when you get
            YouTube Premium. Terms apply.
          </p>
          <p>₹{amount}</p>
          <Button onClick={() => checkoutHandler(amount)}>Buy</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Payment;
