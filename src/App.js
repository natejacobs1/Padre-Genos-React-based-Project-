const Pizza = (props) => {
     return React.createElement("div",{},[
         React.createElement("h1", {}, props.name),
         React.createElement("p", {}, props.description),
         ]
     );
};


const App = () => {
     return React.createElement(
         "div",
         {},
         [
         React.createElement("h1", {}, "Padre Genos"),
         React.createElement(Pizza, {
              name: "Chikku pizza",
              description: "Just like pineapple",
         }),
         React.createElement(Pizza),
         React.createElement(Pizza),
         React.createElement(Pizza),
         React.createElement(Pizza),
         ]

     );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));