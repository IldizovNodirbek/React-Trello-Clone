import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import AddListButton from "./AddListButton";

const Board = () => {
  const lists = useSelector((state) => state.todos.lists);

  return (
    <div className="flex flex-wrap">
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
      <AddListButton />
    </div>
  );
};

export default Board;
