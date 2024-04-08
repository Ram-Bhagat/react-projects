# React + Vite
A straightforward Currency Converter web application developed with React. It enables users to effortlessly convert currency values from one currency to another, leveraging up-to-date exchange rates.

# Components:
App Component: Manages both state and UI rendering.
InputBox Component: A reusable component responsible for rendering input fields for amount and currency selection.
useCurrencyInfo Hook: A custom hook designed to fetch exchange rate information from an external API. It serves as a convenient way to obtain the latest exchange rates based on selected currencies, making use of useState and useEffect hooks for efficient state management
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
