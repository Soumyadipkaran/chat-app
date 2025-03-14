# 🚀 Chat App

A real-time chat application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.io** for bidirectional communication. This app supports user authentication, image uploads, multiple themes, and group chats.

## ✨ Features

- 🔒 **User Authentication & Authorization:** Uses **JWT (JSON Web Token)** and **cookies** for secure authentication.
- 💬 **Real-time Messaging:** Implements **Socket.io** for instant two-way communication.
- 🖼️ **Image Uploads:** Utilizes **Cloudinary** for storing user-uploaded images.
- 🗄️ **Database:** Uses **MongoDB Atlas** for scalable cloud storage.
- 🎨 **Multiple Themes:** Users can switch between different UI themes.
- ⚡ **State Management:** Uses **Zustand** for efficient client-side state management.
- 🔗 **API Calls:** Uses **Axios** for handling API requests.

## 🛠️ Tech Stack

### Backend:
- 🟢 **Node.js** (Runtime environment)
- ⚡ **Express.js** (Framework for API & server)
- 🗄️ **MongoDB Atlas** (Cloud-based NoSQL database)
- 🔄 **Socket.io** (Real-time bidirectional connection)
- ☁️ **Cloudinary** (Image storage & management)
- 🔑 **JWT & Cookies** (Authentication & authorization)

### Frontend:
- ⚛️ **React.js** (User interface library)
- 🏪 **Zustand** (State management)
- 🔄 **Axios** (API requests)
- 🌐 **Socket.io-client** (Handles WebSocket connection with the backend)
- 🎨 **Multiple Themes** (Customizable UI for different user preferences)

## ⚙️ Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **MongoDB Atlas** set up.

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/Soumyadipkaran/chat-app.git
cd chat-app/backend

# Install dependencies
npm install

# Create a .env file and configure variables
PORT=5001
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development

# Start the backend server
npm start
```

### Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Start the frontend application
npm run dev
```

## 📌 Usage
1. 🔑 Register or log in using your credentials.
2. 🖼️ Upload a profile picture (stored using Cloudinary).
3. 💬 Send messages in real time using WebSockets.
4. 🎨 Switch between different UI themes.
5. 📁 Manage your conversations and chats seamlessly.

## 🖼️ Preview
Here are some preview images of the application:

![Image](https://github.com/user-attachments/assets/8efb96b2-b447-4d2b-912f-bf1c3926a62a)
![Image](https://github.com/user-attachments/assets/67326a2e-844c-4c6e-869f-b60cc442536a)
![Image](https://github.com/user-attachments/assets/ce16b919-7218-4468-82ea-60c998c1bd13)
![Image](https://github.com/user-attachments/assets/ca22fb07-3c4c-431f-90ac-c09145f11ce9)
![Image](https://github.com/user-attachments/assets/181266b5-9c29-4eab-ba92-fd9ba3f69f7f)

## 🔮 Future Enhancements
- 📞 Voice & Video Calls
- 🔔 Push Notifications
- 💖 Message Reactions & Read Receipts
- 🎭 Enhanced UI Animations & Dark Mode Improvements

### 💡 Developed by Soumyadip Karan

