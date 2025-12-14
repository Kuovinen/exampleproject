import "./SelectedItems.css";
import React from "react";
import arrow from "../../assets/arrow.svg";
import Icon from "./SelectedItemsIcon/SelectedItemsIcon";
import type { Dish } from "../../App";

interface SelectedItemsProps {
  pickedDishes: Dish[];
  setPickedDishes: React.Dispatch<React.SetStateAction<Dish[]>>;
  getData: () => Promise<void>;
}

function SelectedItems(props: SelectedItemsProps) {
  const displacementAmount = React.useRef<number>(0);
  const container = React.useRef<HTMLDivElement>(null);
  //bottom row selected food items for ordering:
  function makeIcons(array: Dish[]) {
    return array.map((el: Dish) => (
      <Icon key={el.idMeal} data={el} setPickedDishes={props.setPickedDishes} />
    ));
  }
  //total price
  function calculateTotal(): number {
    return props.pickedDishes.reduce((acc, cur) => {
      return (
        cur.strMeal[3].toUpperCase().charCodeAt(0) +
        cur.strMeal[1].toUpperCase().charCodeAt(0) / 100 +
        acc
      );
    }, 0);
  }
  //see icons hiddedn from view:
  function moveLeft() {
    //if not viewing the last item, allow movement left
    if (container.current) {
      displacementAmount.current =
        Math.abs(displacementAmount.current) / 8 < props.pickedDishes.length - 4
          ? (displacementAmount.current -= 8)
          : displacementAmount.current;
      container.current.style.left = displacementAmount.current + "rem";
    }
  }
  function moveRight() {
    //if not viewing first item, allow momvement rihgt
    if (container.current) {
      displacementAmount.current =
        displacementAmount.current < 0
          ? (displacementAmount.current += 8)
          : displacementAmount.current;
      container.current.style.left = displacementAmount.current + "rem";
    }
  }
  async function pushData(data: Dish[]) {
    const res = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //DATA
      body: JSON.stringify({
        payload: data,
      }),
    });
    const response = await res.json();
    console.log("Response from server:", response);
    props.getData();
  }

  return (
    <>
      <section id="selectionsection">
        <div id="selectionbox">
          <button
            id="selectionbox-total"
            onClick={() => {
              pushData(props.pickedDishes);
            }}
          >
            <span>
              Order:{" "}
              <span data-test="orderPrice">{calculateTotal().toFixed(2)}</span>{" "}
              €
            </span>
          </button>

          <div id="selectionbox-bar"></div>

          <button
            id="arrowL"
            onClick={() => {
              moveLeft();
            }}
          >
            <img src={arrow} alt="" />
          </button>

          <div id="selectedcontent">
            <div data-test="selectedcontent" ref={container} id="scontainer">
              {makeIcons(props.pickedDishes)}
            </div>
          </div>

          <button
            id="arrowR"
            onClick={() => {
              moveRight();
            }}
          >
            <img src={arrow} alt="" />
          </button>
        </div>
      </section>
    </>
  );
}

export default SelectedItems;
