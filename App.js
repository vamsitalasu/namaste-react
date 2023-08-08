const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello world from react!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("div", { id: "heading-parent" }, [
  heading,
  React.createElement("h1", { id: "heading2" }, "Hello world from react2!"),
  React.createElement("div", { id: "heading-parent2" }, [
    heading,
    React.createElement("h1", { id: "heading2" }, "Hello world from react2!"),
  ]),
]);

root.render(heading1);
