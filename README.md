# Portfolio V5

Hello everyone!
Let me introduce myself, I am Tibebu Tesfaye, I would like to share a portfolio website project that I have developed.

Tech Stack used:

- ReactJS
- Tailwind CSS
- AOS
- Firebase
- Framer Motion
- Lucide
- Material UI
- SweetAlert2

Website Link:
<https://www.tbe.com/>

We would appreciate it if you would like to use this project, please include our credit in your use. Thank You! 🙏

## Project Running Tutorial

Here is a simple guide to running this project.

## Preparation

Make sure you have installed:

- **Node.js**

## Steps to Run the Project

1. **Download this project:**

```bash
git clone https://github.com/Tbe24/portfolio-v5.git
```

1. **Install all the requirements:**

```bash
npm install
```

or by

```bash
npm install --legacy-peer-deps
```

1. **Run the project:**

```bash
npm run dev
```

1. **Open in browser:**

Access the application in your browser via the link that appears in the terminal.

## Creating a Production-Ready Build

To create a production-ready build:

1. Run the build command:

```bash
npm run build
```

1. The build files will be stored in the `dist` folder. You can upload this folder to your hosting server.

## Notes

If you have problems running the project, make sure:

- Node.js is installed correctly.
- You are in the correct project folder.
- All requirements are installed without error.

## Firebase Configuration

To configure Firebase in this project, follow these steps:

1. **Add Firebase to Project:**

- Open the [Firebase Console](https://console.firebase.google.com/).
- Create a new project or use an existing project.

1. **Select Firestore Database**

- Create Database

1. **Go to Project Settings**

- Click on the section: ![Screenshot 2024-12-30 214204](https://github.com/user-attachments/assets/43243cad-b414-4dd9-8793-d15c401c82fe)
- Later copy the contents of the firebas config ![image](https://github.com/user-attachments/assets/6d0e158c-1ae0-40c1-8b41-9e53a1c4ccbb)

1. **Go to Rules**

- Change the rules to true

1. Adjust the Collection Structure as shown in the following image
![Screenshot 2025-01-03 001341](https://github.com/user-attachments/assets/38580122-08a4-4499-a8fd-0f253652a239)
![Screenshot 2025-01-03 001410](https://github.com/user-attachments/assets/d563d7ad-f1ab-46ff-8185-640dcebd0363)

2. **Open the firebase.js and firebase-comment.js files**

- Replace the contents of firebaseConfig with your firebase config
