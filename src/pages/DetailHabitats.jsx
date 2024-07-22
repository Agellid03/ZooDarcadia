import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import "../styles/detailHabitat.css";

const DetailHabitat = () => {
  const { name } = useParams();
  const [habitat, setHabitat] = useState(null);

  useEffect(() => {
    const fetchHabitat = async () => {
      const habitatRef = doc(db, "habitats", name);
      const habitatSnap = await getDoc(habitatRef);

      if (habitatSnap.exists()) {
        const habitatData = habitatSnap.data();
        const storage = getStorage();
        const imageRef = ref(storage, habitatData.imageUrl);
        const url = await getDownloadURL(imageRef);
        setHabitat({ ...habitatData, imageUrl: url });
      } else {
        console.log("No such document!");
      }
    };

    fetchHabitat();
  }, [name]);

  if (!habitat) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail_habitat">
      <h2>{habitat.name}</h2>
      <img src={habitat.imageUrl} alt={habitat.name} />
      <p>{habitat.description}</p>
    </div>
  );
};

export default DetailHabitat;
