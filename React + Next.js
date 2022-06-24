//Getting Started with React
You can load react scripts from unpkg.com

<html>
  <body>
    <div id="app"></div> <-- This is our element

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script> <-- React DOM that provides DOM methods 

    <script type="text/javascript">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app); <-- ReactDOM.render() is the method to manipulate DOM tree, in this case                                                                       render <h1> element on the page 
    </script>
  </body>
</html>
                      
                      
But above code will result in error, why? Because <h1> is not javascript

You need to use JSX (javascript syntax extension that acts like html syntax)


//Three rules of JSX
1. Wrap the multiple elements in a single root element (ex. <div> or <> ghost container)

ex)
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>

2. Close all tags even self closing ones (ex. <img> --> <img/>)
                                          
3. CamelCase all things (ex. className)


//Babel
Normal browers dont understand JSX so you need complier like Babel to convert JSX into normal javascript codes 
<!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> <--script to load from unpkg 
    <script type="text/jsx"> <-- you have to tell in what type babel is compiling 
    
React is declarative code where you are declaring (ex. make pizza for me please)

Versus plain javascript is imperative where you have to write step by step to create a node and append that node and etc. 


//React Core Concepts
1. Components // Reusable UI? 
2. Props // Drilling properties down into layers of components??
3. State  // basically variables or getter/setter??


//Components
They are just reusable snippets of code like 'lego blocks'

In React, components are 'functions'

ex) 
<script type="text/jsx">
  const app = document.getElementById("app")

  function Header() { <-- you need to capitalize components
      return (<h1>whatever</h1>) <-- it 'returns' a value like any other function, in this case UI elements 
  }
  
  ReactDOM.render(<Header />, app) <-- you need to put that component as the first argument to render method
</script>


//Nesting in React

function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      <Header /> <-- inside this header component, you can have more children components such as logo, title, navbar 
    </div>
  );
}

ReactDOM.render(<HomePage />, app); <-- now the most top level component should be the first argument 



//Props

Props are 'read-only' information that can be passed down into components 

function HomePage() {
  return (
    <div>
      <Header />
      <Header /> <-- this would result in same h1 element being pasted twice; what if you want to 'tweak it'?
    </div>
  );
}

You can pass 'pieces of information' as 'properties' of object down

In React, data flows down in one way in component tree

Think of props as 'src' in img element:

<img src="/">           <-- different src values can change/'tweak' the img results
<Header title="React!">

  
function Header(props) {      <-- And inside this Header component, you can 'catch' that props as a parameter and use it in the component 
  console.log(props) // object: {title: "React!"};   
                        props is basically an object with key and value pair  
}


Destructuring in React

Instead of:   function Header(props)    <-- Props is an object 
You can:      function Header( {title} )    <-- title is an destructured inside function paramenter using 'object destructuring'  

return <h1>title</h1> <-- this would not work as React thinks you are rendering plain text
return <h1>{title}</h1> <-- you need curly brackets to write javascript inside JSX

You can think of curly braces as a way to enter "JavaScript land" while you are in "JSX land"

You can use: 
1. object property with dot notation (ex. {object.property})
2. template literal (ex. `Cool ${title}`)
3. function {function(title)}
4. ternanry operator (ex. <h1>{title ? title : 'Default title'})


                                 
Array in React

You can use {} to weave in and out of JSX land

const names = [...];

<ul>
  {names.map( name => {
  
     <li>{name}</li>    <-- but <li> that is being 'iterated' needs 'key' property that uniquely identifies the item such as item ID
                            ex. <li key={id}>{name}</li>
  })}
</ul>


React Event Listeners

Conventions: 
handleFunction() to handle events
onEvent() to handle event listening 

ex) 

    function handleClick() {
      // Do something
    }

    <button onClick={handleClick()}></button>
                       
                   
1. onClick = button 
2. onChange = input fields
3. onSubmit = forms 

      
                     
State

! You can think of state as any information in your UI that changes 'over time', usually triggered by 'user interaction'.
                     
                     
Hooks
                     
Hooks are special functions that allow you to use 'state' inside your components:
                     
1. UseState
 
It uses array destructuring to get State and updater function 

const [state, setState] = useState('initial value');
//Left: setter/getter     Right: array you are destructuring from 

ex)

function HomePage() {
    const [likes, setLikes] = useState(0);

    const handleClick = function(){
      setLikes(like + 1);
    }

    return(
      <div>
        <button onClick={handleClick()}>Like {likes}</button>
      </div>
    )
}

!You can pass 'state' into child components as parameters, but the 'function/logic' that updates the state should be kept in the initial component


Thinking in React

1. Break components into hierarchy (ex. Higher: searchBar, productTable --> Lower: productHeader, productItself...)
2. Build a static version First! (ex. )


EsLint

It forces code styles, opinions, structures for JS like enforcing code foramtting like prettier
Is it using a old API, is it accessible... etc.


Search Form 

const location = "Toronto";

return (
    <div className="search-params">
        <form>
            <label htmlFor="location">
                Location
                <input id="location" value={location} placeholder="location" /> // value={location} Toronto will be pre-filled when the page is rendered
            </label>
            <button>Submit</button>
        </form>
    </div>
)

When you try to input something into that form, nothing happens Why?
Because the input has value of const that is immutable, so every keypress event React senses, it re-renders the page but nothing is changing in the input field of the form
So you have to make it mutable, using useState

!The order of hooks matter
!Do not put any hook inside the if statement or loops

Controlled input vs Uncontrolled Input
Controlled: you attach onChange function to input for React to listen to the inputs 
Uncontrolled: you attach onSubmit to the form to listen to the input that DOM handled it like in HTML form. React is not doing anything, HTML DOM is. 

In General, use uncontrolled input for react form


Map
Use map function to iterate through multiple data and transform them into components 

Side Effects and UseEffect
- Side effects are unpredictable actions/responses that are done outside of React's pure functions such as components (ex. API calls, setTimeOut)
- Side effects should not be occurring inside the component because it should not get in the way of the component's rendering process
- In short, useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in. 
ex)
UseEffect(() => {
  setState();
},[]) <- Dependency array: if you put state in there, every time that state changes, it will fire UseEffect each time


Closure
- Closure is a combination of the inner function and the lexical environment in which that function exists
- Closure gives you access to an outer function's scope from an inner function
Closure in React
- Components are just basically functions, and inside there are many variables such as 'States'
- you will have async fetch function inside the component and you want to use closure to access the outer states (which are variables) from inside of that async 
function


UseEffect and Async fetch function
- You can't have async function directly inside the useEffect hook
- You have to make it outside and call it from the inside of the hook 


Custom Hook
- custom hook usually has other hooks in it
- Ex) a custom hook that takes in a state from parent component and inside the hook, there is useEffect which is dependent on that state that was passed in
- Ex) a custom hook that stores cache of previously called API so the api doesn't get called each time user revisits


Sharing State between components
- If <panel /> componenet has state defined inside itself, the other panel's state would be independent from the state change of the first one even though they are 
the same component
- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.
- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).


Handling User input
- Instead of having button eventlistener to each button in a form, because there are a lot of ways to submit a form
- Just attach onSubmit to the form, and that's it
- Controlled vs uncontrolled form
