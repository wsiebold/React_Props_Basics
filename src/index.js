import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <section className="style-grid">
      <div className="style-1">
        <h2>{props.name}</h2>
        <img src={props.img} alt="ian" />
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </section>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Ian"
      img="https://consequence.net/wp-content/uploads/2020/05/Ian-Anderson.jpg?resize=1031,580"
      tel="+123 456 789"
      email="ian@jtull.com"
    />
    <Card
      name="Martin"
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Martin_Barre_2013.jpg/1280px-Martin_Barre_2013.jpg"
      tel="+123 456 789"
      email="martin@jtull.com"
    />
  </div>,
  document.getElementById("root")
);
