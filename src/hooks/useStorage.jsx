import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp
} from "../firebase/config";

const useStorage = file => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //refferences
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images"); // ref đến collection trong Firestore có collection là images không

    storageRef.put(file).on(
      // 4 tham số , ts 1 event string , tham số 2 Observer , tham số 3 error , tham số 4 complete
      "state_changed",
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      error => setError(error),
      async () => {
        const url = await storageRef.getDownloadURL(); // Promise => lấy url Sau khi đã upload lên storage của FireBase
        const createdAt = timestamp(); // Timestamp từ Firestore
        collectionRef.add({ url, createdAt }); // adđ Field
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
