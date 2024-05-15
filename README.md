# Alternative Product Information System

This project implements an Alternative Product Information System, allowing users to add, update, delete queries about products, view other queries and recommendations, and interact with the system.

## Live Demo

[Live Demo](https://your-website-url.com)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Visually appealing design with pleasing color contrast
- Responsive layout for mobile, tablet, and desktop views
- Private routes for adding, updating, and deleting queries
- Public routes for viewing all queries and recommendations
- Authentication system with JWT token
- Dark/light theme toggling option
- Search functionality based on product name
- Error page (404) for invalid routes

## Technologies Used

- Frontend:
  - HTML/CSS/JavaScript
  - React.js
  - Tailwind CSS
  - Framer Motion
- Backend:
  - Node.js
  - Express.js
  - MongoDB
- Authentication:
  - JWT (JSON Web Tokens)
- Deployment:
  - Firebase (Frontend)
  - Vercel (Backend)

## Usage

1. Register a new account or log in using existing credentials.
2. Explore queries, recommendations, and other features from the navbar.
3. Add, update, or delete queries from the My Queries page.
4. View and interact with all queries and recommendations from the Queries page.
5. Toggle between dark and light themes from the navbar.
6. Enjoy the visually appealing and user-friendly experience of the Alternative Product Information System!

## Installation:

1. Clone the repository:
   ```bash
   https://github.com/programming-hero-web-course-4/B9A10-client-side-smais007
   ```
2. Navigate to the project directory:
   ```bash
   cd B9A10-client-side-smais007
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Getting Started:

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` to view the website.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APIKEY`

`VITE_AUTHDOMAIN`

`VITE_PROJECTID`

`VITE_STORAGEBUCKET`

`VITE_MESSAGINGSENDERID`

`VITE_APPID`

`VITE_GOOGLEAPIKEY`

## Deployment

1. First initialized firebase

```bash
sudo npm install -g firebase-tools
```

2. Login to your firebase consol

```bash
firebase Login
```

3. initialized firebase in this project

```bash
firebase init
```

4. Then Press Space to select features, then Enter to confirm your choices.

   > - Select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`

5. Now enter foollowing command

   > - What do you want to use as your public directory? `dist`
   > - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `yes`
   > - Set up automatic builds and deploys with GitHub? (y/N) `no`

6. Now buld the dist folder

```bash
npm run build
```

7. Finally this time to deploy website in firebase, now enter this command

```bash
firebase deploy
```

## Contact

- For any inquiries or support, please contact [Smais Shawon](https://www.github.com/smais007)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
