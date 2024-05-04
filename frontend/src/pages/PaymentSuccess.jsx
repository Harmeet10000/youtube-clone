import React from "react";
import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");
  return (
    <>
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert">
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline">
          {" "}
          Your payment has been processed successfully.
        </span>
      </div>
    </>
  );
};

export default PaymentSuccess;
