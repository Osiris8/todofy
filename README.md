# 🧩 Todofy – A Complete Backend API with Next.js, Drizzle, and Neon Database

**Todofy** is a robust RESTful API for a task management (Todo) application, built with modern tools from the JavaScript ecosystem. It provides a scalable, well-documented, and testable backend for managing todos, deployed seamlessly on **Vercel**. The goal is to deliver a clean, maintainable architecture that powers a task management app with ease.

🌐 **Live API**: [todofy-omega.vercel.app](https://todofy-omega.vercel.app)  
📽️ **Video Demo**: [Todofy API Walkthrough](https://www.youtube.com/watch?v=_JIx9qX6g9k)

---

## ✨ Features

- 🚀 Fast and scalable API built with **Next.js** API routes.
- 🗄️ Efficient data management with **Drizzle ORM** and **Neon Database** (PostgreSQL).
- 🎨 Frontend-ready integration with **Tailwind CSS** and **Daisy UI** for styling (if a frontend is added).
- 🧪 Easy API testing with **Postman**.
- ☁️ Seamless deployment on **Vercel**.

---

## 🚀 Getting Started

Follow these steps to set up and run the Todofy backend locally.

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js** (16.x or higher)
- **npm** or **yarn** (package manager)
- **Git**
- **Postman** (optional, for API testing)
- A **Neon Database** account ([neon.tech](https://neon.tech))
- A **Vercel** account for deployment ([vercel.com](https://vercel.com))

### 2. Clone the Repository

```bash
git clone https://github.com/yourusername/todofy.git
cd todofy
```

### 3. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

If no `package.json` exists, install the core dependencies:

```bash
npm install next drizzle-orm @neondatabase/serverless tailwindcss daisyui
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root to store sensitive configuration:

```bash
touch .env.local  # On Windows: echo. > .env.local
```

Open the `.env.local` file and add the following environment variable, replacing the placeholder with your actual value:

```bash
DATABASE_URL="YOUR_DATABASE_URL"
```

#### How to Obtain the Environment Variable:

- **DATABASE_URL**: Get this from your Neon Database dashboard (e.g., `postgresql://user:password@host:port/dbname`). Ensure it’s compatible with Neon’s serverless PostgreSQL.

### 5. Run the Backend Locally

Start the Next.js development server:

```bash
npm run dev
```

The backend will run on `http://localhost:3000`. You can verify it’s working by accessing an endpoint (e.g., `/api/todo`) using Postman or a browser.

### 6. Deploy to Vercel

To deploy the API to Vercel:

1. Push your repository to GitHub.
2. Connect your repository to Vercel via the Vercel dashboard.
3. Set the `DATABASE_URL` environment variable in Vercel’s project settings.
4. Deploy the project. The API will be available at a URL like `https://todofy-omega.vercel.app`.

---

## 🧪 Testing with Postman

To test the API endpoints, use **Postman** to send requests to the deployed API (`https://todofy-omega.vercel.app`) or locally (`http://localhost:3000`). Below are the key endpoints for managing todos.

### 1. Create a Todo

- **Method**: POST
- **URL**: `https://todofy-omega.vercel.app/api/todo`
- **Body** (JSON):
  ```json
  {
    "text": "Hello World"
  }
  ```
- **Response**: Returns the created todo with an ID and details.

### 2. Retrieve All Todos

- **Method**: GET
- **URL**: `https://todofy-omega.vercel.app/api/todo`
- **Response**: Returns a list of all todos.

### 3. Update a Todo

- **Method**: PATCH
- **URL**: `https://todofy-omega.vercel.app/api/todo/your-todo-list-id`
- **Body** (JSON):
  ```json
  {
    "text": "Update my todo list with my todo list ID"
  }
  ```
- **Response**: Returns the updated todo. Replace `your-todo-list-id` with the actual todo ID.

### 4. Toggle Todo Completion

- **Method**: PATCH
- **URL**: `https://todofy-omega.vercel.app/api/todo/toggle/your-todo-list-id`
- **Response**: Toggles the completion status of the todo. Replace `your-todo-list-id` with the actual todo ID.

### 5. Delete a Todo

- **Method**: DELETE
- **URL**: `https://todofy-omega.vercel.app/api/todo/your-todo-list-id`
- **Response**: Confirms the todo is deleted. Replace `your-todo-list-id` with the actual todo ID.

### Notes

- Replace `your-todo-list-id` with the actual ID of the todo (obtained from the POST or GET response).
- For local testing, use `http://localhost:3000` instead of the Vercel URL.

---

## 📚 Tech Stack

- **Framework**: Next.js (API Routes)
- **ORM**: Drizzle ORM
- **Database**: Neon Database (PostgreSQL)
- **API Testing**: Postman
- **Styling**: Tailwind CSS, Daisy UI
- **Deployment**: Vercel
- **Language**: JavaScript/TypeScript

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## 📬 Contact

Have questions or suggestions? Connect on [X](https://x.com/migan_osiris).

---

⭐ **Star this repo if you find it useful!**
