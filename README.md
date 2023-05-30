# React Event Router Project

This project is a React application that showcases event data using React Router for client-side routing and dynamic rendering. It interacts with a Node.js backend to fetch and manage event data.

## Project Overview

The React Event Router project demonstrates the following features:

- Multiple pages with client-side routing using React Router
- Displaying event data dynamically based on the selected route
- Navigation menu for easy page navigation
- Route parameters for displaying specific event details based on URL
- Integration with a custom Node.js backend for fetching and managing event data

## Installation

To run the project locally, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/Joulence/react-course-learning-app-8
   ```

2. Navigate to the project directory:

   ```
   cd react-course-learning-app-8/frontend
   ```
   and
   ```
   cd react-course-learning-app-8/backend
   ```

3. Install the dependencies in both folders:

   ```
   npm install
   ```

4. Start the development servers in both folders:

   ```
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

5. Set up and run your Node.js backend server. Make sure to follow the installation and setup instructions provided in your Node.js backend repository.

## Usage

Once the application and backend server are running, you can explore the different pages and navigate through them using the navigation menu.

The main components of the application are:

- `Home`: The landing page of the application, displaying a list of events.
- `EventDetails`: A page that shows detailed information about a specific event. The event ID is passed as a route parameter.
- `NewEvent`: A page that allows users to add a new event.
- `EditEvent`: A page that allows users to edit an existing event. The event ID is passed as a route parameter.

The application interacts with your custom Node.js backend to fetch and manage event data. Make sure your backend server provides the necessary API endpoints for retrieving, adding, and editing events.

Feel free to modify the existing components or create new ones to further enhance your project.

## Resources

- [React Router Documentation](https://reactrouter.com/)
- [React Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## Acknowledgments

Special thanks to the developers and maintainers of React Router and Node.js for providing the necessary tools to build this project.

## Conclusion

The React Event Router project with your custom Node.js backend is a great example of a full-stack application using React for the frontend and Node.js for the backend. It showcases the power of client-side routing, dynamic rendering, and data management. Enjoy building and extending your project further!