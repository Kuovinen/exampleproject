import "./Header.css";
function Header() {
  return (
    <>
      <div id="headerspace">
        <div id="brand">
          <div id="logobox">
            <img id="logo" src="/logo.svg" alt="" />
          </div>
          <div className="title">Fork & Folly</div>
        </div>
        {/*<button id="hdrorder">Order</button>*/}
      </div>
    </>
  );
}

export default Header;
