const firebaseAdmin = require("../../config/firebase/firebase.conexion");

const login = async (email: string) => {
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

export { login };
