# Todo App – CI/CD Pipeline (DSO101 Assignment III)

A simple Node.js REST API for managing todos, containerized with Docker and deployed via a full CI/CD pipeline using GitHub Actions, DockerHub, and Render.com.

---

## Live Deployment

🔗 [Render Deployment Link](https://your-app.onrender.com) ← *Replace with your actual URL*

---

## Project Structure

```
todo-app/
├── app.js                        # Express app
├── index.js                      # Entry point
├── app.test.js                   # Jest tests
├── package.json
├── Dockerfile
├── .gitignore
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Actions CI/CD workflow
```

---

## API Endpoints

| Method | Endpoint     | Description       |
|--------|-------------|-------------------|
| GET    | /todos      | Get all todos     |
| POST   | /todos      | Create a new todo |
| DELETE | /todos/:id  | Delete a todo     |

---

## Steps Taken

1. **Created the Node.js app** using Express with basic CRUD endpoints for todos.
2. **Wrote Jest tests** using Supertest to verify the API routes.
3. **Created a Dockerfile** using `node:20-alpine`, which installs dependencies, runs tests, and starts the server.
4. **Tested Docker locally** by building and running the container.
5. **Pushed code to GitHub** in a public repository.
6. **Set up DockerHub** – created a public repository for the image.
7. **Added GitHub Secrets**:
   - `DOCKERHUB_USERNAME` – DockerHub username
   - `DOCKERHUB_TOKEN` – DockerHub access token
   - `RENDER_DEPLOY_HOOK_URL` – Render webhook URL for auto-deployment
8. **Created GitHub Actions workflow** (`.github/workflows/deploy.yml`) to automate build, push, and deploy on every push to `main`.
9. **Deployed on Render.com** using "Deploy from existing image" option pointing to DockerHub.

---

## Challenges Faced

- **Render does not auto-pull new Docker images** – Had to use Render's deploy webhook URL and call it from GitHub Actions using `curl`.
- **Jest test cleanup** – Needed `--forceExit` flag to prevent Jest from hanging after tests complete.
- **Docker layer caching** – Understanding how `COPY package*.json ./` before `COPY . .` speeds up builds.

---

## Learning Outcomes

- Understood the full CI/CD pipeline: code → build → test → push → deploy.
- Learned how GitHub Actions workflows are structured using YAML.
- Learned how to securely store credentials using GitHub Secrets.
- Gained hands-on experience containerizing a Node.js app with Docker.
- Understood how Render.com works with Docker images from DockerHub.

---

## Screenshots

> Add your screenshots below:

### GitHub Actions – Successful Workflow
![GitHub Actions]()

### DockerHub – Image Pushed
![DockerHub]()

### Render.com – Live Deployment
![Render]()

---

## Running Locally

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start the server
npm start
```

### Using Docker

```bash
docker build -t todo-app .
docker run -p 3000:3000 todo-app
```

Then visit: http://localhost:3000/todos