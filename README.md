# Employee Registration App
![Logo/Screenshot](https://us.123rf.com/450wm/pshonka/pshonka2206/pshonka220600039/187246942-badge-outline-flat-icon-workspace-sign-graph-symbol-for-your-web-site-design-logo-app-ui.jpg?ver=6)

The Employee Registration App allows users to manage employee records. Users can sign up and sign in to access the application, where they can add, view, edit, and delete employee information. The app provides fields for employee details such as name, email, status, and notes. It was built to facilitate easy management of employee data and enhance workflow efficiency in a corporate environment.

This app is built using Node.js and Express, with an interactive front-end rendered using EJS templates.

## Getting Started

- **Deployed App Link:** [Your Deployed App Link Here] (https://github.com/abbas22013/EmployeeRegistration)(https://abbas22013.github.io/EmployeeRegistration/)

## Table of Contents
- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Removing Git and Creating Your Own Repo](#removing-git-and-creating-your-own-repo)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS or later)
- [MongoDB](https://www.mongodb.com/) (make sure it's running)
- [Git](https://git-scm.com/) (for cloning the repository)

## Clone the Repository

To clone this repository, open your terminal and run:

```bash
git clone https://github.com/SEB-1-Bahrain/instructor-men-auth.git men-stack-starter-template
```

## Installation
Navigate into the cloned directory:
```bash
cd men-stack-starter-template
```

Then, install the necessary dependencies:

```bash
npm i
```

## Environment Setup
```plaintext
MONGODB_URI=atlas_db_uri
SESSION_SECRET=your_secret_key
SALT_ROUNDS=10
```
Replace `atlas_db_uri` with your desired database name and `your_secret_key` with a secure key.

## Removing Git and Creating Your Own Repo
To remove the existing Git history and create your own repository:

1. Remove the existing .git folder:
  ```bash
  rm -rf .git
  ```
2. Initialize a new Git repository:
  ```bash
  git init
  ```
3. Add all files to the new repository:
  ```bash
  git add .
  ```
4. Commit the changes
   ```bash
   git commit -m "Initial commit"
   ``` 
5. Create a new repository on GitHub (or any other platform) and follow the instructions to push your local repository.
  Make a new repository on [GitHub](https://github.com/) named `<your-project-name>`
  Now link your local project to your remote GitHub repo:
  ```bash
  git remote add origin https://github.com/<github-username>/men-stack-relating-data-lab-cookbook.git
  git push origin main
  ```

> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the `<` and `>`) in the URL above.

## Running the application
```bash
npm run dev
```

## Features
- User registration and login with session management
- Basic CRUD operations
- Modular file structure
- Example routes and controllers
- Basic user model setup
- Middleware for templates and authorization
- Basic authentication flow

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Happy Coding!

## Attributions
- Express - Web framework for Node.js used to build the server-side.
- EJS - Templating engine used to render dynamic HTML views.
- MongoDB & Mongoose - Used for storing employee data.
- Bootstrap - Used for front-end styling.
For any libraries or resources used that require attribution, be sure to list them here.

## Technologies Used
- JavaScript - Core language for app - logic and functionality.
- Node.js - Runtime environment for running JavaScript on the server.
- Express.js - Web framework used to create the back-end of the app.
- MongoDB - Database used to store employee data.
- EJS - Templating engine used for rendering dynamic HTML pages.
- Bootstrap - Used for responsive and modern front-end design.
dotenv - Used for environment variable management.
## Next Steps
### Planned Enhancements:
- Admin Panel: Add a section for admin users to manage the system-wide settings and see an overview of all employee records.
- Employee Search: Implement a search bar that will allow users to filter employees by name, email, or status.
- User Roles: Add different user roles (Admin, Manager, Employee) with specific permissions to control access levels to different pages.
- Employee Dashboard: Create a dashboard where employees can view only their details and not other users' data.
