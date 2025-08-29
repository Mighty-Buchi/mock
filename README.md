# React Demo App – Technical Interview Task
## Overview
This project is a simple React demo application built as part of a technical interview task. It demonstrates best practices with React functional components, state management, API integration, and clean UI design.

The application contains three main pages:

+ ### Login Page - Phone number input with validation and login button.
+ ### Main Page - List view with search functionality.
+ ### Detail Page - Displays detailed information for a selected item.


   ## view live-preview
  https://mock-pearl-one.vercel.app/

## Features

- Phone Number Login with validation (required field, starts with country code).
<img width="575" height="236" alt="image" src="https://github.com/user-attachments/assets/d8349280-95f3-40cd-8e3e-7fb47d72670f" />


- API Integration using JSONPlaceholder
- Searchable List View – dynamically filters items as the user types.
 <img width="692" height="518" alt="image" src="https://github.com/user-attachments/assets/ff2b0742-3a65-4654-99f4-fc6b30f1009d" />

- Detail Page with item-specific data and navigation back to the main list.
 <img width="715" height="551" alt="image" src="https://github.com/user-attachments/assets/a58646ef-7220-495b-85b5-0bc82f38f15c" />

- Responsive Design using modern UI practices
 <img width="430" height="357" alt="image" src="https://github.com/user-attachments/assets/850fb4ce-7b6a-4e41-9c32-e17f260c9b24" />




## Tech Stack
- React with functional components
- React Hooks & Context API for state management
- CSS
- Axios / Fetch for API calls

## Notes

Testing setup was considered but not implemented in this version.

The project follows modular folder structure (components, pages, services).

Code is clean, easy to extend, and ready for integration with further features.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
