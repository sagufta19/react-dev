import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello World in react!</h1>;
console.log(heading);
const root=ReactDOM.createRoot(document.createElementById("root"));
root.render(heading);