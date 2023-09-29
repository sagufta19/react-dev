import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello World in react!</h1>;
console.log(heading);

const title=(
    <h1 className="head" tabIndex="5">
        Namste React Using JSX!
    </h1>
);

const HeaderComponent=()=>(
    <div id="container">
        {title}
        <h1 className="heading">Namste React</h1>
    </div>
);

const Sub=()=>{
    <div id="subject">This is subject</div>
}

const root=ReactDOM.createRoot(document.createElementById("root"));
root.render(heading);

