import React from "react";
import CustomButton from "../custom-button/custom-button.component";

const StripeCheckoutButton = ({ price }) => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // fetch("/payment", {
  //   //   mode: "cors",
  //   //   method: "POST",
  //   //   headers: headers,
  //   //   body: JSON.stringify({
  //   //     quantity: price,
  //   //   }),
  //   // });

  //   axios.post("/payment", {
  //     quantity: price,
  //   });
  // };

  return (
    <form action="/payment" method="POST">
      <input name="price" value={price} type="hidden"></input>
      <CustomButton disabled={price === 0} type="submit">
        Pay now
      </CustomButton>
    </form>
  );
};

export default StripeCheckoutButton;
