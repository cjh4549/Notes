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
//This is much easier to maintain, because you don't have to worry about parent anymore after we started dealing with children components 
      
//npm init -y
//npx means install the package and run it right away

//config prettier on everyone who downloads our project
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "format": "prettier --write  \"src/**/*.{js,jsx}\""
},
