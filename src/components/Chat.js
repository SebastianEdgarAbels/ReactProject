import React from "react";
import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";

function Chat() {
  console.log("db :>> ", db);

  const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "Chat"));
    querySnapshot.forEach((doc) => {
      console.log("doc :>> ", doc);
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  return (
    <div>
      <h2>Chat</h2>
    </div>
  );
}

export default Chat;
