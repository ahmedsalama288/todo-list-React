import React from "react";
import Background from "./Background";
import Header from "./Header";
import Input from "./Input";
import Item from "./Item";
import Options from "./Options";

function Main() {
  // [#] Create State To Save The Changes In Moods
  const [isDark, setIsDark] = React.useState(false);

  // [#] Get The Saved List From LocalStorage
  const loStoList = localStorage.getItem("todo");

  // [#] Create State To Save The Items List
  const [todoList, setTodoList] = React.useState(
    () => JSON.parse(loStoList) || []
  );

  // [#] Update isDone Prop In todoList
  function updateIsDone(itemId) {
    setTodoList((prevArr) => {
      return prevArr.map((todo) => {
        return todo.id === itemId ? { ...todo, isDone: !todo.isDone } : todo;
      });
    });
  }

  // [#] Delete The Item In The TodoList
  function deleteItem(itemId) {
    setTodoList((prevArr) => {
      return prevArr.filter((todo) => {
        return todo.id !== itemId;
      });
    });
  }

  // [#] Display All Items
  function displayAll() {
    setTodoList((prevArr) => {
      return prevArr.map((todo) => ({ ...todo, display: true }));
    });
  }

  // [#] Display The Active Items
  function displayActive() {
    setTodoList((prevArr) => {
      return prevArr.map((todo) => {
        return todo.isDone
          ? { ...todo, display: false }
          : { ...todo, display: true };
      });
    });
  }

  // [#] Display Completed Items
  function displayCompleted() {
    setTodoList((prevArr) => {
      return prevArr.map((todo) => {
        return todo.isDone
          ? { ...todo, display: true }
          : { ...todo, display: false };
      });
    });
  }

  // [#] Clear Completed Items
  function clearCompleted() {
    setTodoList((prevArr) => {
      return prevArr.filter((todo) => {
        return todo.isDone === false;
      });
    });
    displayAll();
  }

  // [#] Create The Items List
  const items = todoList.map((todo) => {
    if (todo.display) {
      return (
        <Item
          key={todo.id}
          value={todo.value}
          id={todo.id}
          isDone={todo.isDone}
          updateIsDone={updateIsDone}
          deleteItem={deleteItem}
        />
      );
    }
    return null;
  });

  // [#] To Know If Is Only One List Item
  const isOnlyOneli = items.every((item) => item === null);

  React.useEffect(() => {
    // [#] When The todoList State Change => Save The ToDo List In Localstorage
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <main className={`${isDark ? "dark-mode": ""}`}>
      <Background isDark={isDark} background="desLight" />
      <section className="container">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Input setTodoList={setTodoList} />
        <ul
          className={`${isDark ? "dark-mode" : ""} ${
            isOnlyOneli ? "only-one-li" : ""
          }`}
        >
          {items}
          <Options
            displayAll={displayAll}
            displayActive={displayActive}
            displayCompleted={displayCompleted}
            clearCompleted={clearCompleted}
            itemsNums={todoList.length}
          />
        </ul>
      </section>
    </main>
  );
}

export default Main;
