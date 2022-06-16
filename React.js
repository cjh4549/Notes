//Pure React

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

//What's the difference betwe App rendered as a function above and App as an instance below?  
//Above: creating a line of car (blueprint)
//Below: factory stamping out that car 

ReactDOM.render(React.createElement(App), document.getElementById("root"));

//Props

const Pet = (props) => {
    return(
        React.createElement('div', {}, [
            React.createElement('h1', {}, props.name),
            React.createElement('h2', {}, props.animal),
            React.createElement('h2', {}, props.breed),
        ])
    )
}

const App = () => {
    return React.createElement("div",{}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: 'Luna',
            animal: 'Dog',
            breed: 'Havanese'
        }),
 ....
      
//App is the parent that's rendering Pet 
//App is drilling down props into Pet 
//The direction is downwards always 
