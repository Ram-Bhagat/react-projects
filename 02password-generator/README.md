# React + Vite
This is a simple Password Generator component built using React. It allows users to generate random passwords with customizable options such as length, inclusion of numbers, and inclusion of special characters.

# Functionality
The component utilizes React's state management hooks (useState) to maintain the state of password length, whether numbers are allowed, whether special characters are allowed, and the generated password itself.

useState: It's used to manage the state variables like length, allowNum, allowChar, and password.
useRef: It's used to hold a reference to the password input field.
useEffect: It's used to generate a new password whenever there's a change in the length, inclusion of numbers, or inclusion of special characters.
The password generation logic is encapsulated within the passGen function, which is memoized using useCallback to prevent unnecessary re-renders. The generated password is then set using the setPassword function.

Users can copy the generated password to their clipboard by clicking the "Copy" button, which utilizes the navigator.clipboard.writeText method.

# Usage
To use this component, simply import it into your React application and place it within your component tree. The password generator will be rendered, allowing users to interact with it to generate passwords according to their preferences.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
