import React from "react";
import { useDispatch } from "react-redux";
import { addList } from "../redux/todoSlice";

const AddListButton = () => {
  const dispatch = useDispatch();

  const handleAddList = () => dispatch(addList("New List"));

  return (
    <button
      onClick={handleAddList}
      className="bg-white bg-opacity-20 backdrop-blur-md text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-30 transition-all duration-300"
    >
      + Add a List
    </button>
  );
};

export default AddListButton;
