import { collection, getDocs, doc, getDoc, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export async function getCollection(collectionName, orderByField = null) {
  const colRef = collection(db, collectionName);
  const q = orderByField
    ? query(colRef, orderBy(orderByField))
    : query(colRef);

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getDocument(collectionName, docId) {
  const docRef = doc(db, collectionName, docId);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return { id: snapshot.id, ...snapshot.data() };
}
