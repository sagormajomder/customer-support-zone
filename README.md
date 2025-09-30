# Customer Support Zone

This project helps manage customer support by organizing
issues into trackable tickets, assigning them to agents, and
ensuring timely resolution through streamlined communication and
status updates.

## Table of Contents

- [Tools & Technology](#tools--technology-used)
- [Run it Locally](#run-it-locally)
- [Necessary Links](#necessary-links)
- [Some Q/A](#answer-the-following-questions)
- [Connect With Me](#connect-with-me)

## Tools & Technology Used

### Technology

- Javascript
- React (v19)
- Tailwindcss (v4)

### Tools

- Vite (v7)
- DaisyUI (v5)
- react-toastify (v11)
- Prettier
- EsLint

## Run it Locally

Please follow the below instructions to run this project in your machine:

1. Clone this repository

   ```sh
   git clone https://github.com/sagormajomder/customer-support-zone.git
   ```

2. Open the directory "customer-support-zone" into visual studio code
3. Open Terminal and run `npm i` to install all dependencies
4. Run `npm run dev` to run the project into browser

The project will be available on http://localhost:5173/ by default.

## Necessary Links

- Design [Figma file](https://www.figma.com/design/vDDwjy5t58r4hPNBmEKY5f/Customer-Support-%E2%80%94-Ticket-System?node-id=0-1&t=kfIU1sKgK36DbdmV-1)

## Answer the following questions

### 1. What is JSX, and why is it used?

#### Answer:

JSX is a syntax extension for Javascript and its full meaning is `Javascript XML`. It is a syntactic sugar where we, the developer, can write html look like tags but behind the scene they are not actual html tags rather they are converted to Javascript function (`React.createElement()`). It makes UI structure more intuitive and readable. Though it is created by react but as it is a syntactic sugar, other library or framework could create their own JSX. That means, we can use JSX outside react. Also as it a syntactic sugar, browser doesn't understand JSX. It need Babel compiler to transfer it into Javascript.

### 2. What is the difference between State and Props?

#### Answer:

| State                                                                       | Props                                                                                                                                  |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| State is an internal data of a component.                                   | Props is an external data of a component.                                                                                              |
| State is like memory of a component cause it is persistent between renders. | Props is like function parameters which value is coming from parent component.                                                         |
| Component can update state.                                                 | Props is read only. Component shouldn't update props.                                                                                  |
| Updating state causes component to re-render.                               | Parent component re-render causes props change(only for object type props). So receiving new props also causes component to re-render. |

### 3.What is the useState hook, and how does it work?

#### Answer:

It is the fundamental hook to create state in the functional component. Before hooks, only class components could have state but `usestate()` changed that and make functional components much more powerful.

`useState()` hook return two things. One is current state value and second is a function to update the state value.

`const [count, setCount] = useState(0);`

Here -

- `useState(0)` defines state with initial value `0` and this initial value only apply in initial component render. Initial value can be a string, number, boolean, array, object or function.
- `count` is the current state value.
- `setCount` is the function which is used to update state value.

### 4. How can you share state between components in React?

#### Answer:

We can share state between components in react as props. If siblings component need state, we can lifting the state up and place the state into a common parent component of the siblings component and pass the state as props.

```js
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
}
```

We can also use local storage, context api, custom hooks and state management libraries to share state between components.

### 5. How is event handling done in React?

#### Answer:

To handle events, React wraps native browser events so that all browser have consistent behavior of same events. This event wrapper called SyntheticEvent.

SyntheticEvent support most DOM events like `onClick`, `onMouseEnter` etc. and uses camelcase for event handler. We can also use `event.preventDefault()` and `event.stopPropagation()` just like Javascript.

```js
<button onClick={() => handleClick("Hello")}>Click</button>
```

Behind the scene, it uses event delegation by attaching event listener to the root of the DOM tree which improves performance.

## Connect with Me

✨ Let's connect on different platforms! Feel free to reach out.

🐦 **Twitter:** [@sagormajomder](https://twitter.com/sagormajomder)

🐙 **GitHub:** [@sagormajomder](https://github.com/sagormajomder)

📘 **Facebook:** [@sagormajomder](https://facebook.com/sagormajomder)

🔗 **LinkedIn:** [@sagormajomder](https://www.linkedin.com/in/sagormajomder/)
