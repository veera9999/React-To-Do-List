![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 1

===========================================================================

## What is useState?

# **_useState_**

🎯 useState is one of the most fundamental and commonly used Hooks in React. It allows functional components to manage state.

🎯 Prior to the introduction of hooks, state management was only possible in class components.

🎯 useState lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.

```jsx
const [state, setState] = useState(initialValue);
```

🎯 The initialValue is the value you want the state to start with. state is the current state value. setState is a function to update the state.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
```

## What is props drilling and state lifting?

**_Props Drilling_**
🎯 Props drilling occurs when you need to pass data through multiple levels of components that don't need the data themselves, but their children or grandchildren do.

🎯 It refers to the process of passing data from one component to another through a series of intermediate components.

```jsx
function GrandParent({ user }) {
  return (
    <div>
      <Parent user={user} />
    </div>
  );
}

function Parent({ user }) {
  return (
    <div>
      <Child user={user} />
    </div>
  );
}

function Child({ user }) {
  return <div>{user.name}</div>;
}

function App() {
  const user = { name: "John Doe" };
  return <GrandParent user={user} />;
}
```

**_State Lifting_**
🎯 State lifting involves moving the state to a common ancestor of components that need to share the state, then passing it down as props.

🎯 It is done to avoid passing the state through intermediate components (props drilling) and to manage the state in a single place.

```jsx
import React, { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </div>
  );
}

function ChildA({ count }) {
  return <div>Count: {count}</div>;
}

function ChildB({ setCount }) {
  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Increment
    </button>
  );
}
```

## What is the ‘key’ attribute?

🎯 The key attribute in React is a special prop used when rendering lists of elements.

🎯 It helps React identify which items in a list have changed, been added, or been removed.

🎯By using keys, React can re-order, update, or remove elements more efficiently without re-rendering the entire list.

🎯 The key should be unique among its siblings. It doesn’t have to be globally unique, only within the context of the list.

🎯 The key should be consistent and stable across re-renders to ensure correct behavior. Avoid using indexes as keys if the order of items can change because it can lead to incorrect updates.

🎯 Without keys, React may produce unexpected results, like:
. Incorrect item reordering
. Inefficient updates
. Loss of component state between re-renders

## What is synthetic event?

## What is virtual dom?
