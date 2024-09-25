import React from "react";
import TodoItem from "./TodoItem";
import AddCardButton from "./AddCardButton";
import { useDispatch } from "react-redux";
import { deleteList, editListTitle } from "../redux/todoSlice";
import { MdDelete } from "react-icons/md";

const List = ({ list }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteList(list.id));
  const handleEdit = (e) =>
    dispatch(editListTitle({ id: list.id, title: e.target.value }));

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg m-4 w-64">
      <input
        type="text"
        value={list.title}
        onChange={handleEdit}
        className="font-bold text-xl mb-4 w-full text-center"
      />
      <div className="flex justify-center mb-4">
        <button onClick={handleDelete} className="text-purple-600">
          <MdDelete />
        </button>
      </div>
      <div>
        {list.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <AddCardButton listId={list.id} />
    </div>
  );
};

export default List;
