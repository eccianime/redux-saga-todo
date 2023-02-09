import {
  getDocs,
  query,
  collection,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { Todo } from "../redux/todo/types";

export const getTodos = async () => {
  try {
    const querySnapshot = await getDocs(query(collection(db, "todos")));
    const todos: Todo[] = [];
    querySnapshot.forEach((doc) => {
      const { text } = doc.data();
      todos.push({
        id: doc.id,
        text,
      });
    });
    return todos;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addTodo = async (text: string) => {
  try {
    await setDoc(doc(db, "todos", Math.random().toString().split(".")[1]), {
      text,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id: string, text: string) => {
  try {
    await setDoc(
      doc(db, "todos", id),
      {
        text,
      },
      {
        merge: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await deleteDoc(doc(db, "todos", id));
  } catch (error) {
    console.log(error);
  }
};
