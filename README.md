# Using the DropdownMenu Component

These instructions explain how to use the `DropdownMenu` component and the `createOptionsList` function in your React application.

## Installation

1. **Create React App**: Make sure you have a React application set up. If not, you can create a new React project using Create React App or set up your project manually.

2. **Component Files**: Place the following component files in your project directory:

   - `DropdownMenu.css`: Contains the CSS styles for the dropdown menu.
   - `DropdownMenu.js`: Contains the `DropdownMenu` React component.
   - `utils.js`: Contains the `createOptionsList` utility function that prettifies a list to display as options in the dropdown.

3. **Import the Components**: In your application files, import the `DropdownMenu` component and the `createOptionsList` function as needed. For example:

   ```jsx
   import DropdownMenu from './DropdownMenu';
   import { createOptionsList } from './utils';

## Example in `App.js`

The 2 kinds of dropdown menu (one that allows multiple options to be selected, and another that only allows 1 option to be selected) is already written out in the `App.js` file. Run this page to visualize the examples. It also includes the `createOptionsList` function that takes in a list of words and formats them to display in the dropdown in a standardized way. 
