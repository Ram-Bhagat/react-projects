# React + Vite
# Background Changer Component

## Overview
This is a simple React component that allows users to change the background color dynamically by clicking on different colored buttons. It demonstrates the usage of React state to manage the background color.

## Features
- Dynamically changes the background color.
- Provides a set of colored buttons for color selection.
- Uses React state to manage the background color.

## How State is Used
The `BgChanger` component utilizes React's `useState` hook to manage the background color. It maintains a piece of state called `backgroundColor`, which holds the current background color. When a user clicks on a colored button, the `onClick` event handler updates the `backgroundColor` state with the selected color, triggering a re-render of the component with the updated background color.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
