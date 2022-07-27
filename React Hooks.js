useMemo

Problem: Unnecessary re-rendering of components

When you update a state in React, it will re-render the entire component
ex) very complicated function inside the component would have to be run, or fetching same data over and over with useEffect()
Solution: cache the result and only when inputs change, the components will re-render because the cache is invalidated


Example:
It's very much like useEffect():
let's say there is a very slow computating function that multiples number by two

const cache = useMemo(() => {
  return slowFunction(number)
}, [number]);


Key Takeaways: 

1. Just like useEffect, only when the value in the dependency changes, the function will be run again, so wrap a very slow function with it
In this case, the number is the input that's changing
You have to store the returned value in a variable (ex. const cache)
So when the component is called from top to bottom, it skips the slowFunction() if the input hasn't been changed. In this way, you can reduce unnecessary re-renders


2. Don't use memoization for every single function inside the component because it will create unnecessary memory 
(because you have to store the returned cache in a new variable)
And you are creating more functions (useMemo() is another function at the end of the day) 

3. Referential equality

Let's say you have an array or object with a bunch of values in them in your component:
Component gets rerendered for some reason, and the function is run from top to bottom and that object/array gets created 'AGAIN'
And they are 'NOT' the same as before because new reference has been created 
So if you want to make the pre-rendered and after-rendered object/array to be the same, you have to wrap them in memoization 


useRef
- It's not easy to directly target DOM nodes in React, so we use useRef to do this
ex) 
  const buttonRef = useRef(null);
  <button ref={buttonRef}>Click</button>

Now you have an access to button element like you used to in JS with buttonRef.current

-Refs preserve state values as well, but they don't require re-render
-We can IMPERATIVELY call DOM method on these refs
ex) 
  useEffect(() => {
    buttonRef.current.focus();
  }; <- You don't need dependency because it doesn't re-render 

Use cases for useRef():
        
1. It's also often used to focus on the element when the page mounts
2. To add animations
3. To integrate with DOM-based libraries
            
//https://blog.logrocket.com/complete-guide-react-refs/
