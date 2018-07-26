import React from "react";

const Cell = ({ onClick, value }) => <button onClick={onClick}>{value}</button>;

export default Cell;
