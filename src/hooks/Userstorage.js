import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { projectStorage } from "../firebase/config";

function Userstorage(file)
{
    const [url,setUrl]=useState("")
    useEffect(() => {
        const storageRef=projectStorage.ref(`${file.name}`);
        const collectionRef=projectFirestore.collection("Todo")
      return () => {
      };
    }, []);
    
}