import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Hasif() {
  return (
    <React.Fragment>
      <h2>This is created by Hasif</h2>
    </React.Fragment>
  );
}

function Pradeepan() {
  return (
    <React.Fragment>
      <h2>This is created by Pradeepan</h2>
    </React.Fragment>
  );
}

function Prashanth() {
  return (
    <React.Fragment>
      <h2>This is created by Prashanth</h2>
    </React.Fragment>
  );
}

class AppClass extends React.Component {
  render() {
    return (
      <>
        <h1>React class component</h1>
        <h1>These are Functional Component</h1>
        <Hasif />
        <Pradeepan />
        <Prashanth />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>
);
