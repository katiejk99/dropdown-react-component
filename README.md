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

## Dropdown Functionalities

1. **Single vs Multiple Selections**: Make sure to toggle the `multiSelect` variable to allow for either single or multiple option selection.

   - `multiSelect={true}`: makes the dropdown allow multiple option selection. There are additional functionalities to select and deselect all options. 
   - `multiSelect={false}`: makes the dropdown only allow 1 selection at a time.
  
  There are examples of both in `App.js`. 
  
2. **Search Function**: The Dropdown Menu component includes a basic search feature that allows users to search for options within the provided list. Users can type in a search query, and the component will highlight options that match the search query.

   **Limitations:**
   - The search function currently supports searching for one option at a time. You cannot search for multiple options simultaneously.
   - The search function does not work when one option has already been selected. If an option is selected, you will need to clear it to use the search feature effectively.
  
   These limitations may be addressed in future updates to the component, but they are important to keep in mind when using the component in its current state.

## Example in `App.js`

The 2 kinds of dropdown menu (one that allows multiple options to be selected, and another that only allows 1 option to be selected) is already written out in the `App.js` file. Run this page to visualize the examples. It also includes the `createOptionsList` function that takes in a list of words and formats them to display in the dropdown in a standardized way. 
