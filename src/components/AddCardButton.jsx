import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddCardButton = ({ listId }) => {
  const dispatch = useDispatch();

  const handleAddTodo = () => dispatch(addTodo({ listId, text: "New Todo" }));

  return (
    <button onClick={handleAddTodo} className="text-gray-600 mt-2">
      + Add a Card
    </button>
  );
};

export default AddCardButton;
