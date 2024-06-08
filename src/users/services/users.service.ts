const firebaseAdmin = require("../../config/firebase/firebase.conexion");
import { firestore } from "firebase-admin";
import { v4 as uuidv4 } from "uuid";

const createUserService = async (data: any) => {
  const users = await getUserByEmail(data.email);
  if (users.length > 0) {
    return false;
  }

  data.userId = uuidv4();
  data.created_at = firestore.Timestamp.fromDate(new Date());

  try {
    await firebaseAdmin.firestore().collection("users").add(data);
    return true;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email: string) => {
  try {
    const documentos = await firebaseAdmin
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((querySnapshot: { empty: any; docs: any[] }) => {
        if (!querySnapshot.empty) {
          return querySnapshot.docs.map((doc) => doc.data());
        } else {
          return [];
        }
      });

    return documentos;
  } catch (error) {
    throw error;
  }
};

export { createUserService, getUserByEmail };
