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
      const {
        title,
        date,
        category,
        updated_at,
        description,
        isCompleted,
        created_at,
      } = doc.data();
      todos.push({
        id: doc.id,
        title,
        description,
        date,
        isCompleted,
        category,
        updated_at,
        created_at,
      });
    });
    return todos.sort((a, b) => b.created_at - a.created_at);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addTodo = async (
  title: string,
  description: string,
  category: string,
  date: string
) => {
  try {
    await setDoc(doc(db, 'todos', Math.random().toString().split('.')[1]), {
      title,
      description,
      category,
      date,
      isCompleted: false,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (
  id: string,
  title: string,
  description: string,
  category: string
) => {
  try {
    await setDoc(
      doc(db, 'todos', id),
      {
        title,
        description,
        category,
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

export const updateTodoComplete = async (id: string, isCompleted?: boolean) => {
  try {
    await setDoc(
      doc(db, 'todos', id),
      {
        isCompleted: !isCompleted,
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
