// Capitalising "App" is required
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Spaghetti",
            animal: "Dog",
            breed: "Dachshund"
        }),
        React.createElement(Pet, {
            name: "Chomp",
            animal: "Dog",
            breed: "German Shepard"
        }),
        React.createElement(Pet, {
            name: "Splat",
            animal: "Cat",
            breed: "Domestic short hair"
        }),
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));