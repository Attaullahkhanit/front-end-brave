Front End Brave
Front End Brave is a React.js application that utilizes dark and light themes with React MUI for its UI components. The authentication system is powered by Firebase API, allowing users to sign in and sign up securely. New user data is stored in Firebase database for future reference.

Features
Dark and Light Themes: Users can switch between dark and light themes based on their preference.
Authentication: Firebase API is used for user authentication, providing a secure sign in and sign up process.
Toaster Notifications: A toaster library is integrated to display warning, success, and error notifications for API calls.
Main Pages:
Home Page: Displays API data in a table format. Users can search data by name, username, city, gender, and email. Filtering by gender (male, female) is also available. Pagination is implemented using react-js-pagination to show 5 rows per page. Clicking on "View Profile" redirects users to the corresponding public profile page.
Public Profile Page: Shows detailed information of a user based on their ID.
Technologies Used
React.js
React MUI
Firebase API (Authentication and Database)
Toaster Library (Notifications)
react-js-pagination for pagination
Usage
Clone the repository.
Install dependencies with npm install.
Set up Firebase configurations for authentication and database.
Run the application with npm start.
Development
For development purposes, you can use the following commands:

npm start: Start the development server.
npm run build: Build the production-ready bundle.
npm test: Run tests.
Contributions
Contributions to Front End Brave are welcome! Please follow the guidelines mentioned in the CONTRIBUTING.md file.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.