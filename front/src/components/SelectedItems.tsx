import "./SelectedItems.css";
import React from "react";
import arrow from "../assets/arrow.svg";
import Icon from "./SelectedItemsIcon";
import type { Dish } from "../App";

interface SelectedItemsProps {
  pickedDishes: Dish[];
  setPickedDishes: React.Dispatch<React.SetStateAction<Dish[]>>;
}

function SelectedItems(props: SelectedItemsProps) {
  const displacementAmount = React.useRef<number>(0);
  const container = React.useRef<HTMLDivElement>(null);

  function makeIcons(array: Dish[]) {
    return array.map((el: Dish) => (
      <Icon key={el.idMeal} data={el} setPickedDishes={props.setPickedDishes} />
    ));
  }

  function calculateTotal(): number {
    return props.pickedDishes.reduce((acc, cur) => {
      return (
        cur.strMeal[3].toUpperCase().charCodeAt(0) +
        cur.strMeal[1].toUpperCase().charCodeAt(0) / 100 +
        acc
      );
    }, 0);
  }

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

  return (
    <>
      <section id="selectionsection">
        <div id="selectionbox">
          <button id="selectionbox-total">
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
