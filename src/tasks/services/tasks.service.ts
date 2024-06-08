const firebaseAdmin = require("../../config/firebase/firebase.conexion");
import { firestore } from "firebase-admin";
import { v4 as uuidv4 } from "uuid";

const createTaskService = async (data: any) => {
  data.created_at = firestore.Timestamp.fromDate(new Date());
  data.status = "pending";

  try {
    await firebaseAdmin.firestore().collection("tasks").add(data);
    return true;
  } catch (error) {
    throw error;
  }
};

const updateTaskService = async (data: any, taskId: string) => {
  data.updated_at = firestore.Timestamp.fromDate(new Date());

  try {
    await firebaseAdmin
      .firestore()
      .collection("tasks")
      .doc(taskId)
      .update(data);
    return true;
  } catch (error) {
    throw error;
  }
};

const getOneTaskService = async (taskId: string) => {
  try {
    const documento = await firebaseAdmin
      .firestore()
      .collection("tasks")
      .doc(taskId)
      .get()
      .then((doc: { exists: any; id: any; data: () => any }) => {
        if (doc.exists) {
          let data = doc.data();
          data.taskId = doc.id;
          return data;
        } else {
          return null;
        }
      });
    return documento;
  } catch (error) {
    return [];
    throw error;
  }
};

const getAllTasksService = async (userId: string) => {
  try {
    const documentos = await firebaseAdmin
      .firestore()
      .collection("tasks")
      .where("userId", "==", userId)
      .get()
      .then((querySnapshot: { empty: any; docs: any[] }) => {
        if (!querySnapshot.empty) {
          return querySnapshot.docs.map((doc) => {
            let data = doc.data();
            data.taskId = doc.id;
            return data;
          });
        } else {
          return [];
        }
      });

    return documentos;
  } catch (error) {
    throw error;
  }
};

const deleteOneTaskService = async (taskId: string) => {
  try {
    return await firebaseAdmin
      .firestore()
      .collection("tasks")
      .doc(taskId)
      .delete();
  } catch (error) {
    throw error;
  }
};

export {
  createTaskService,
  updateTaskService,
  getOneTaskService,
  getAllTasksService,
  deleteOneTaskService,
};
