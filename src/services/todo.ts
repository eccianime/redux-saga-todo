import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Todo } from '../redux/todo/types';

export const getTodos = async (date?: string) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, 'todos'), where('date', '==', date))
    );
    const todos: Todo[] = [];
    querySnapshot.forEach((doc) => {
      const { text, date, icon, color, created_at, updated_at } = doc.data();
      todos.push({
        id: doc.id,
        text,
        date,
        icon,
        color,
        created_at,
        updated_at,
      });
    });
    return todos.sort(
      (a, b) => b.updated_at - a.updated_at || b.created_at - a.created_at
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addTodo = async (
  text: string,
  icon: string,
  color: string,
  date: string
) => {
  try {
    await setDoc(doc(db, 'todos', Math.random().toString().split('.')[1]), {
      text,
      icon,
      color,
      date,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (
  id: string,
  text: string,
  icon: string,
  color: string
) => {
  try {
    await setDoc(
      doc(db, 'todos', id),
      {
        text,
        icon,
        color,
        updated_at: new Date().getTime(),
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
    await deleteDoc(doc(db, 'todos', id));
  } catch (error) {
    console.log(error);
  }
};
