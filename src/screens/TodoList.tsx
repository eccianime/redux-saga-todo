import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../redux/todo/actions";

const TodoList: () => JSX.Element = () => {
  const { data, loading } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const [todoId, setTodoId] = useState<string | undefined>(undefined);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const handleCreateOrEdit = () => {
    if (todoId) {
      dispatch(updateTodo(todoId, todoText));
      setTodoId(undefined);
    } else {
      dispatch(addTodo(todoText));
    }
    setTodoText("");
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
    setTodoId(undefined);
    setTodoText("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Todo:</Text>
        <TextInput
          style={styles.input}
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleCreateOrEdit}>
          <Text style={styles.addButtonText}>{todoId ? "Edit" : "Add"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {loading && <ActivityIndicator color="red" size={30} />}
        {data.map((todo) => (
          <View key={todo.id} style={styles.listItem}>
            <Text style={styles.listItemText}>{todo.text}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(todo.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => {
                setTodoId(todo.id);
                setTodoText(todo.text);
              }}
            >
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "lightgray",
    padding: 10,
    marginLeft: 10,
  },
  addButtonText: {
    fontSize: 18,
  },
  listContainer: {
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginTop: 10,
    backgroundColor: "lightgray",
  },
  listItemText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 18,
  },
  updateButton: {
    backgroundColor: "blue",
    padding: 10,
    marginLeft: 10,
  },
  updateButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default TodoList;
