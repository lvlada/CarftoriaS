# Components

Components that are globally used should be placed inside of `/src/components`.

Each component in their folder should have:

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

const Button = ({
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  icon,
  variant = 'primary'
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${className}`}
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
@use '@/styles/variables';
@use '@/styles/typography';

.button {
  @extend .cta;
  outline: none;
  border: none;
  border-radius: 0.75em;
  cursor: pointer;
  width: 100%;
  color: variables.$background-color;
  padding-block: 0.9375em;

  &--primary {
    background: variables.$primary-color;
  }

  &--secondary {
    background: variables.$secondary-color;
  }

  &--accent {
    background: variables.$accent-color;
  }
  &--outline {
    background: transparent;
    border: 1px solid variables.$primary-color;
  }
}

```

3. `index.js`

```
export * from './Button';
```

Example how to use Button component

```
import Button from '@/components';

const App = () => {
  return (
    <div>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
};

export default App;
```
