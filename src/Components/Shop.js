import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../State/index";

const Shop = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amountReducer);

  return (
    <div className="text-center">
      <button
        className="btn btn-outline-danger mx-2"
        disabled={amount < 100}
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-outline-success mx-2"
        onClick={() => {
          dispatch(actionCreators.depositMoney(100));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
