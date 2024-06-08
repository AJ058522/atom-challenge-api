const firebaseAdmin = require("../../config/firebase/firebase.conexion");
import { firestore } from "firebase-admin";
import { v4 as uuidv4 } from "uuid";

const signup = async (data: any) => {
  data.userId = uuidv4();
  data.created_at = firestore.Timestamp.fromDate(new Date());

  try {
    await firebaseAdmin.firestore().collection("users").add(data);
    return true;
  } catch (error) {
    throw error;
  }
};

export { signup };
