import "./Header.css";
import React from "react";
import Modal from "./Modal/Modal";
import type { Dish } from "../../App";

interface HeaderProps {
  serverData: { _id: string; payload: Dish[] }[];
  getData: () => Promise<void>;
}

function Header(props: HeaderProps) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <div id="headerspace">
        {modalVisible && (
          <Modal
            serverData={props.serverData}
            getData={props.getData}
            setModalVisible={setModalVisible}
          />
        )}
        <div id="brand">
          <div id="logobox">
            <img id="logo" src="/logo.svg" alt="" />
          </div>
          <div className="title">Fork & Folly</div>
        </div>
        <button
          id="hdrorder"
          onClick={() => {
            setModalVisible(true);
          }}
        >
          All OrderS
        </button>
      </div>
    </>
  );
}

export default Header;
