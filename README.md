<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# 🧑‍💼 Job Board Backend (Node.js + Express + MongoDB)

This is the backend API for the Mini Job Board Application. It provides RESTful endpoints to manage job listings, including creating, fetching, updating, and soft-deleting jobs.

---

## 🚀 Base URL
http://localhost:3334/api/jobs


> If deployed (e.g., on Render), replace with your live API base URL.

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (MongoDB Atlas)**
- **Mongoose**
- **Joi (for validation)**
- **CORS + dotenv**

---

## 📂 Folder Structure



server/
├── config/ # Database connection
│ └── db.js
├── controller/ # Route handler logic
│ └── jobController.js
├── routes/ # API routes
│ └── jobRoutes.js
├── model/ # Mongoose schema
│ └── jobModel.js
├── middleware/ # Validation middleware
│ └── validateJob.js
├── services/ # Service layer
│ └── jobService.js
├── utils/ # Reusable helpers
│ ├── response.js
│ └── constants.js
├── .env # Environment variables
├── server.js # Entry point




---

## 🧪 API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/jobs`           | Get all jobs             |
| GET    | `/api/jobs/:id`       | Get job by ID            |
| POST   | `/api/jobs`           | Create a new job         |
| PUT    | `/api/jobs/:id`       | Update job by ID         |
| DELETE | `/api/jobs/:id`       | Soft delete job by ID    |

---

## 🧾 Job Schema (Mongoose)

```js
{
  title: String,
  company: String,
  type: 'Full-time' | 'Part-time',
  location: String,
  description: String,
  isDeleted: Boolean,
  createdAt: Date
}

✅ Validation (Joi)
Fields required for POST/PUT:

title (string, min 2)

company (string, min 2)

type ("Full-time" or "Part-time")

location (optional)

description (string, min 5)
>>>>>>> 90b7ae1f9869b3086a802e094addeb7b44fec206
