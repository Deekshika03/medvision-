# MedVision+ - Professional Project Structure

## 📁 Project Organization

```
MedVisionApp/
├── 📂 frontend/                    # Flask Web Application
│   ├── 📄 app.py                   # Main Flask application
│   ├── 📄 requirements.txt         # Python dependencies
│   ├── 📂 templates/               # HTML templates
│   │   └── 📄 index.html          # Landing page template
│   └── 📂 static/                  # Static assets
│       ├── 📂 css/                 # Stylesheets
│       │   └── 📄 style.css       # Main stylesheet
│       └── 📂 js/                  # JavaScript files
│           └── 📄 main.js         # Frontend logic
│
├── 📂 backend/                     # Node.js API Server
│   ├── 📄 server.js               # Express server entry point
│   ├── 📄 package.json            # Node.js dependencies
│   ├── 📄 .env                    # Environment variables
│   ├── 📂 routes/                 # API route definitions
│   │   └── 📄 medicine.routes.js  # Medicine API routes
│   ├── 📂 controllers/            # Request handlers
│   │   └── 📄 medicine.controller.js
│   ├── 📂 services/               # Business logic
│   │   ├── 📄 medicine.service.js # Medicine data service
│   │   ├── 📄 groq.service.js     # AI/LLM integration
│   │   └── 📄 price.service.js    # Pricing service
│   ├── 📂 utils/                  # Utility functions
│   │   ├── 📄 validator.js        # Input validation
│   │   └── 📄 formatter.js        # Response formatting
│   ├── 📂 config/                 # Configuration files
│   │   └── 📄 env.config.js       # Environment config
│   └── 📂 database/               # Mock data storage
│       └── 📄 mock.data.js        # Sample data
│
├── 📂 docs/                       # Documentation
│   └── 📄 API.md                  # API documentation
│
└── 📄 README.md                   # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- Python (3.8+)
- GROQ API Key

### 1. Backend Setup
```bash
cd MedVisionApp/backend
npm install
# Add your GROQ API key to .env file
npm start
```

### 2. Frontend Setup
```bash
cd MedVisionApp/frontend
pip install -r requirements.txt
python app.py
```

### 3. Access Application
- **Frontend**: http://localhost:5002
- **Backend API**: http://localhost:3000

## 🏗️ Architecture

### Frontend (Flask)
- **Framework**: Python Flask
- **Purpose**: Landing page and user interface
- **Features**: Medicine search modal, responsive design
- **Port**: 5002

### Backend (Node.js)
- **Framework**: Express.js
- **Purpose**: API server for medicine information
- **Features**: AI-powered medicine data, RESTful API
- **Port**: 3000

## 🔧 Configuration

### Environment Variables
```env
# backend/.env
GROQ_API_KEY=your_groq_api_key_here
PORT=3000
```

## 📊 Features

- ✅ Professional directory structure
- ✅ Modular architecture
- ✅ Clean separation of concerns
- ✅ Comprehensive documentation
- ✅ Easy deployment setup
- ✅ Scalable codebase

## 🛠️ Development

### Adding New Features
1. **Backend**: Add routes in `routes/`, controllers in `controllers/`, services in `services/`
2. **Frontend**: Update templates in `templates/`, styles in `static/css/`, scripts in `static/js/`

### Code Organization
- **Routes**: Handle HTTP requests
- **Controllers**: Process business logic
- **Services**: External integrations (AI, databases)
- **Utils**: Helper functions
- **Config**: Environment and app configuration

## 📝 License
© MedVision+. Advancing healthcare through AI innovation.