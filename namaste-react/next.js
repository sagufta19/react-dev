const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background: "red",
    },
    className: "title",
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
