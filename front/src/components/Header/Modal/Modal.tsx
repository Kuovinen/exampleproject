import "./Modal.css";
import React from "react";
import type { Dish } from "../../../App";

interface ModalProps {
  serverData: { _id: string; payload: Dish[] }[];
  getData: () => Promise<void>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal(props: ModalProps) {
  async function sendDeleteReq(id: string) {
    const responce = await fetch(`http://localhost:3000/data/${id}`, {
      method: "DELETE",
    });
    const result = await responce.json();
    console.log("Delete result:", result);
    props.getData();
  }
  function makeList() {
    return props.serverData.map((doc) => (
      <li key={doc._id}>
        <ul>
          {doc.payload.map((item) => (
            <li key={item.strMeal}>
              <span>{item.strMeal}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            sendDeleteReq(doc._id);
          }}
        >
          delete
        </button>
      </li>
    ));
  }

  return (
    <>
      <div id="modalBackground">
        <div id="modal">
          <h4>
            <span>LIST OF ORDERS</span>
            <button
              onClick={() => {
                props.setModalVisible(false);
              }}
            >
              X
            </button>
          </h4>
          <ul>{makeList()}</ul>
        </div>
      </div>
    </>
  );
}

export default Modal;
