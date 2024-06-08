const firebaseAdmin = require("../../config/firebase/firebase.conexion");
import { firestore } from "firebase-admin";

const signup = async (data: any) => {
  data.created_at = firestore.Timestamp.fromDate(new Date());

  try {
    await firebaseAdmin.firestore().collection("users").add(data);
    return true;
  } catch (error) {
    throw error;
  }
};

export { signup };
