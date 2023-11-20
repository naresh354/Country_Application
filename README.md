React Country App
This React application showcases a Login page, a Home page with a list of countries, and integration with a country API to retrieve data.

Getting Started
Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/naresh354/Country_Application
Change into the project directory:

bash
Copy code
cd react-country-app
Install dependencies:

bash
Copy code
npm install
Usage
Run the development server:

bash
Copy code
npm start

Features
Login Page
The Login page allows users to sign in.
Home Page
Upon successful sign-in, users are redirected to the Home page.
The Home page displays a list of countries with their flags and regions.
Country data is fetched from the Rest Countries API using a GET request.
Technology Stack
React
Axios for API requests
Material-UI for UI components
Project Structure
lua
Copy code
/src
|-- components
|   |-- Login.js
|   |-- Home.js
|-- features
|   |-- countries
|       |-- countrySlice.js
|       |-- countryApi.js
|-- App.js
|-- index.js
|-- store.js
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.

