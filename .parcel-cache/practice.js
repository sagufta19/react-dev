import React from "react";
import ReactDOM from "react-dom/client";

const p=()=>(
<h1 className="head" tabIndex="5">
Namste React In JSX!
</h1>
);

const Component= () => (
<div id="container">
    <p/>
    <h1 className="heading">Namste React In Functinal Component! </h1>
</div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component/>);

