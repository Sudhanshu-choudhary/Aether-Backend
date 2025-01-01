# Aether

Aether is a next-generation AI assistant designed to enhance your productivity and simplify your daily tasks. With its dark-themed interface and powerful AI capabilities, Aether provides a futuristic, intuitive, and customizable experience for users.

## Features

- **Voice & Text Interaction**: Communicate effortlessly using natural language inputs, either through voice commands or text.
- **Personalized Dashboard**: Customize your interface with widgets, adding or removing features based on your preferences.
- **Task Scheduling & Notifications**: Stay organized with automated task scheduling and timely reminders.
- **Email Management**: Receive summarized insights of your emails and securely respond to them with ease.
- **Secure Authentication**: OAuth 2.0 and JWT-based security ensure your data remains safe.
- **Resource Optimization**: Intelligent backend design activates only required features, minimizing resource usage.
- **Cross-Platform Availability**: Access Aether on the web or as a desktop app powered by Electron.

## Architecture

Aether is built using a microservices architecture for scalability and efficiency:

- **Backend Services**:
  - **Node.js (ESM)**: Primary backend services.
  - **FastAPI**: Used for natural language classification and advanced AI features.
  - **MongoDB**: Serves as the database for user and assistant data.
- **Frontend**:
  - React-based, featuring modular widgets for dynamic user interfaces.
- **Desktop App**:
  - Built with Electron for cross-platform support.

## Installation

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- MongoDB
- Docker (optional, for containerized setup)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/aether.git
   cd aether
   ```

2. **Install Dependencies**:
   - For backend services:
     ```bash
     cd services/service-name
     npm install
     ```
   - For the gateway:
     ```bash
     cd gateway
     npm install
     ```

3. **Set Up Environment Variables**:
   - Create a `.env` file for each service (e.g., `services/service-name/.env`):
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/aether
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the Services**:
   - Use `npm run dev` for individual services, or start all services concurrently from the root folder:
     ```bash
     npm run start
     ```

5. **Run the Frontend**:
   - Navigate to the frontend folder (if applicable) and start the development server:
     ```bash
     cd frontend
     npm install
     npm run dev
     ```

6. **Run the Desktop App**:
   - Build and run the Electron app:
     ```bash
     cd desktop
     npm install
     npm start
     ```

## Usage

1. Access the Aether dashboard through the web app or desktop app.
2. Configure your widgets and preferences from the settings menu.
3. Use voice or text input to interact with Aether and manage tasks, emails, and more.

## Contributing

We welcome contributions to make Aether even better! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License

Aether is licensed under the [MIT License](LICENSE).

## Contact

For support or inquiries:
- **Email**: support@aether.com
- **GitHub**: [Sudhanshu-choudhary](https://github.com/Sudhanshu-choudhary/aether)