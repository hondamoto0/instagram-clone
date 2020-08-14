import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = collection => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection) // ref đến collection trong Firestore
      .orderBy("createdAt", "desc") // sắp xếp theo order
      .onSnapshot(snap => {
        // observer
        let documents = [];
        snap.forEach(doc => {
          // theo dõi doc , doc.data => get tất cả dữ liệu
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);
  return { docs };
};

export default useFirestore;
