# ACES Website Project

Welcome to the ACES (Association of Computer Science and Engineering Students) website repository. This project is built using **React (Vite)** for the frontend and **Express.js** for the backend.

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** installed on your machine.

### Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd Aces
    ```

2.  **Install Frontend Dependencies**:
    ```bash
    cd frontend
    npm install
    cd ..
    ```

3.  **Install Backend Dependencies**:
    ```bash
    cd backend
    npm install
    cd ..
    ```

## 🛠️ How to Run

You need to run the **Frontend** and **Backend** servers simultaneously. Open **two separate terminal** windows/tabs.

**Terminal 1: Backend**
```bash
cd backend
npm run dev
# Server will start on http://localhost:5000
```

**Terminal 2: Frontend**
```bash
cd frontend
npm run dev
# App will run on http://localhost:5173 (or similar)
```

## ⚠️ Precautions (MUST READ)

*   **DO NOT** upload `node_modules`. This is automatically handled by the `.gitignore` file, but double-check you aren't forcing them.
*   **DO NOT** upload `.env` files containing secret keys.
*   **Always pull** the latest changes from the `main` branch before starting your work to avoid conflicts.
    ```bash
    git checkout main
    git pull origin main
    ```
*   **Formatting**: Try to maintain consistent code formatting.

## 🌿 Branching Strategy

We follow a strict naming convention for branches to keep things organized. **Do not work directly on the `main` branch.**

**Naming Format:** `<your-name>/<feature-name>`

**Examples:**
*   `john/events-page-fix`
*   `sara/navbar-styling`
*   `alex/backend-api-routes`

### Workflow:
1.  Create your branch: `git checkout -b afnash/new-feature`
2.  Make your changes.
3.  Push your branch: `git push origin afnash/new-feature`
4.  Create a **Pull Request (PR)** to merge into `main`.

Happy Coding! 🚀
