import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc, getDocs, query, where } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACKkGLnDaZZzZOppCMoq1PFhl1eOqa9c0",
  authDomain: "portfolio-tbe.firebaseapp.com",
  projectId: "portfolio-tbe",
  storageBucket: "portfolio-tbe.firebasestorage.app",
  messagingSenderId: "671582741653",
  appId: "1:671582741653:web:4e8b92c5a0a1be31f8279c",
  measurementId: "G-BW811LE6W4",
};


// Initialize with a unique name
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const addProjects = async () => {
  const projects = [
    {
      id: "1",
      name: "APPLE",
      description: "A React-based portfolio showcasing my work.",
      image: "/Portfolio/10004.jpg",
      githubLink: "https://github.com/Tbe24/Apple-React",
      liveDemo: "https://github.com/Tbe24/Apple-React",
    },
    {
      id: "2",
      name: "NETFLIX",
      description:
        "Netflix movie watching site made by React, tmdb-movies-api.",
      image: "/Portfolio/10003.jpg",
      githubLink: "https://github.com/Tbe24/netflix-clone-2024",
      liveDemo: "https://tbe24.github.io/netflix-clone-2024/",
    },
    {
      id: "3",
      name: "AMAZON",
      description:
        "Amazon e-commerce website built with React, Node.js, Firebase.",
      image: "/Portfolio/10002.jpg",
      githubLink: "https://github.com/Tbe24/amazon-clone-2024",
      liveDemo: "https://tbe24.github.io/amazon-clone-2024/",
    },
    {
      id: "4",
      name: "EVANGADI_FORUM",
      description: "Community educational Q&A site.",
      image: "/Portfolio/10001.jpg",
      githubLink: "https://github.com/codermiki/evangadi-forum",
      liveDemo: "https://evangadi-forum-group-2-4-2024.netlify.app",
    },
  ];

  try {
    const collectionRef = collection(db, "projects");

    for (const project of projects) {
      const q = query(collectionRef, where("name", "==", project.name));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collectionRef, project);
        console.log(`Project added: ${project.name}`);
      } else {
       // console.log(`Project already exists: ${project.name}`);
      }
    }
    //console.log("All projects added successfully!");
  } catch (error) {
    console.error("Error adding projects: ", error);
  }
};

// Call the function once
addProjects();

export { db, storage, collection, addDoc };
