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
