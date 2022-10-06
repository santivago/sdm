import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore/lite";
import { db } from "../firebaseConfig";
import { defineStore } from "pinia";

export const useDatabaseStore = defineStore("database", {
  state: () => ({
    documents: [],
    loadingDoc: false,
  }),
  actions: {
    async getCorsi() {
      if (this.documents.length !== 0) {
        return;
      }
      this.loadingDoc = true;
      try {
        const q = query(collection(db, "corsi"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          this.documents.push({
            id: doc.id,
            ...doc.data(),
            //date: doc.data().dataInizio.toDate(),
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingDoc = false;
      }
    },
    async addCorsi(dataFine, dataInizio, maxUtenti, nome) {
      try {
        const objetoDoc = {
          nome: nome,
          dataInizio: dataInizio,
          dataFine: dataFine,
          maxUtenti: Number(maxUtenti),
        };
        const docRef = await addDoc(collection(db, "corsi"), objetoDoc);
        this.documents.push({
          ...objetoDoc,
          id: docRef.id,
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
    async deleteCorsi(id) {
      try {
        const docRef = doc(db, "corsi", id);
        await deleteDoc(docRef);
        this.documents = this.documents.filter((item) => item.id !== id);
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
    async updateCorso(id, dataFine, dataInizio, maxUtenti, nome) {
      try {
        const docRef = doc(db, "corsi", id);
        await updateDoc(docRef, {
          dataFine: dataFine,
          dataInizio: dataInizio,
          maxUtenti: Number(maxUtenti),
          nome: nome,
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },
});
