import "./Item.css";

interface itemProps {
  title: string;
  cover: string;
}

function Item(props: itemProps) {
  function textToNumber(value: string): number {
    return value.toUpperCase().charCodeAt(0);
  }
  function makePrice(text: string): string {
    return textToNumber(text[3]) + "." + textToNumber(text[1]) + "€";
  }

  return (
    <>
      <button className="item">
        <div className="itemtitle">{props.title}</div>
        <div className="itemimg">
          <img src={props.cover} alt="" />
        </div>
        <div className="itemprice">{makePrice(props.title)}</div>
      </button>
    </>
  );
}

export default Item;
