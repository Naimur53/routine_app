import React from "react";

const TokenCard = ({ token }) => {
  return (
    <div>
      <div className="shadow-md  border border-1 p-5">{token.token}</div>
    </div>
  );
};

export default TokenCard;
