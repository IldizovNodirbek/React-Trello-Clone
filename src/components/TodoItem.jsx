import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/todoSlice";
import { MdEdit, MdDelete } from "react-icons/md";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDelete = () => dispatch(deleteTodo(todo.id));

  const handleEdit = () => {
    dispatch(editTodo({ id: todo.id, text: editText }));
    setIsEditing(false); 
  };

  return (
    <div className="flex flex-col my-2">
      {isEditing ? (
        <div className="flex flex-col">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-[5px] rounded-lg mb-2"
          />
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={todo.text}
            readOnly
            className="border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-[5px] rounded-lg"
          />
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-gray-400 flex items-center"
            >
              <MdEdit />
            </button>
            <button
              onClick={handleDelete}
              className="text-red-500 flex items-center"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
