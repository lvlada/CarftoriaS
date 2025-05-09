# Components

Components that are globally used should be placed inside of `/src/components`.

Each component should have:

1. `Component.jsx`
2. `Component.module.scss`
3. `index.js`

---

## Example: Creating a New Component

### Step 1: Create the Component Folder

Create a new folder inside `/src/components` with the name of your component. For example:

/src/components/Button

### Step 2: Create the Component Files

Inside the `Button` folder, create the following files:

#### 1. `Button.jsx`

This file contains the React component logic.

```jsx
// filepath: /src/components/ui/Button/Button.jsx
import styles from './Button.module.scss';

const Button = ({ children, className, onClick, type = 'button', disabled, icon }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export { Button };
```

2. `Button.module.scss`

```
// filepath: /src/components/ui/Button/Button.module.scss
.button {
  background: red;
  color: white;
  padding: 2em;

  &:hover {
    background: blue;
  }
}
```

3. `index.js`

```
export * from './Button';
```

Use the component

```
import Button from '@/components/Button';

const App = () => {
  return (
    <div>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
};

export default App;
```
