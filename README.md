# MedVision+ - Personal AI Health Guard & Medicine Safety Engine

Complete full-stack, AI-powered medical safety application with a web-based landing page, structured medicine information extraction engine, secure allergy conflict warning dashboard, and a standardized Model Context Protocol (MCP) Server.

---

## 📁 Project Structure

```
MedVisionApp/
├── 📂 mcp-server/                  # Model Context Protocol Server
│   ├── 📄 index.js                 # stdio-based MCP entrypoint
│   └── 📄 package.json             # MCP server dependencies
│
├── 📂 frontend/                    # Flask Web Application (Client UI)
│   ├── 📄 app.py                   # Main Flask application with API proxy
│   ├── 📄 requirements.txt         # Python dependencies
│   ├── 📂 templates/               # HTML templates
│   │   └── 📄 index.html          # Landing page template
│   └── 📂 static/                  # Static assets (CSS/JS)
│       ├── 📂 css/style.css       # Main stylesheet
│       └── 📂 js/main.js          # Client UI logic
│
├── 📂 backend/                     # Node.js API Server
│   ├── 📄 server.js               # Express server entry point
│   ├── 📄 package.json            # Node.js dependencies
│   ├── 📄 .env                    # Backend environment variables
│   ├── 📂 routes/                 # API route definitions
│   ├── 📂 controllers/            # Express request handlers
│   ├── 📂 services/               # LLM, pricing, and user services
│   ├── 📂 utils/                  # Input validation & formatting
│   ├── 📂 config/                 # Environment configuration
│   └── 📂 database/               # Local JSON database stores
│
├── 📂 docs/                       # Project Documentation
│   ├── 📄 API.md                  # REST API endpoints documentation
│   └── 📄 KAGGLER_WRITEUP.md      # Hackathon Writeup Submission Report
│
└── 📄 README.md                   # Setup & project details (this file)
```

---

## 🚀 Setup & Run Instructions

### Prerequisites
- Node.js (v16+)
- Python (3.8+)
- Groq API Key & NVIDIA API Key

### 1. Backend API Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create a .env file and add your credentials:
# GROQ_API_KEY=your_groq_api_key_here
# NV_API_KEY=your_nvidia_vision_api_key_here
# PORT=3000

# Start the Express API server
npm start
```
The API server will run on **http://localhost:3000**.

### 2. Frontend Flask Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install python dependencies
pip install -r requirements.txt

# Start the Flask web application
python app.py
```
The client UI will run on **http://localhost:5002**.

### 3. Model Context Protocol (MCP) Server Setup
The MCP server allows external AI agents to securely query MedVision+ tools directly.
```bash
# Navigate to mcp-server directory
cd ../mcp-server

# Install dependencies
npm install

# Start the MCP server (uses stdio transport)
node index.js
```

---

## 🏗️ System Architecture & Workflow

MedVision+ leverages a multi-layer reasoning structure to ensure patients do not ingest active compounds conflicting with their allergies:

```
[ User Uploads Photo / Inputs Drug ]
                │
                ▼
   [ Nvidia Llama-3.2 Vision OCR ]  <-- Extracts raw label text
                │
                ▼
     [ Groq Llama-3.3 LLM ]         <-- Semantic parsing of compounds
                │
                ▼
 [ Allergy Conflict Evaluator ]    <-- Cross-checks user allergy profile
                │
                ▼
 [ Bioequivalent Price Lookup ]     <-- Sorts safe substitutes by cost (INR)
                │
                ▼
  [ UI Alerts & Medication Alarm ] <-- Prompts user and sets reminders
```

---

## 🛡️ Hackathon Evaluation Concept Mapping

MedVision+ actively applies the key concepts taught throughout the agentic development course:

| Key Concept | Implementation Details | Location in Code |
| :--- | :--- | :--- |
| **Model Context Protocol (MCP)** | Implements a stdio transport server exposing `get_medicine_info`, `check_allergy_clash`, and `add_reminder` as reusable tools for AI clients. | [mcp-server/index.js](file:///c:/Users/Kundan/Downloads/MedVisionApp%202/MedVisionApp%202/mcp-server/index.js) |
| **Agent System** | Groq-powered safety engine operates as a medical agent—reasoning about structural drug family groups, generating conflict descriptions, and dynamically ranking safe choices. | [backend/services/groq.service.js](file:///c:/Users/Kundan/Downloads/MedVisionApp%202/MedVisionApp%202/backend/services/groq.service.js) |
| **Security Features** | Standard JWT bearer authorization, password hashing with bcrypt, input sanitation constraints, and local client reminders storage. | [backend/middleware/auth.middleware.js](file:///c:/Users/Kundan/Downloads/MedVisionApp%202/MedVisionApp%202/backend/middleware/auth.middleware.js) |
| **Deployability** | Backend is set up for Render/Docker deployment, immediately running Express port listens to pass health checks during startup sequences. | [backend/server.js](file:///c:/Users/Kundan/Downloads/MedVisionApp%202/MedVisionApp%202/backend/server.js) |

---

## 📝 License
© MedVision+. Advancing healthcare through AI innovation.
