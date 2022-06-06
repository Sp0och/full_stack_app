import Button from "./Button";

function Header() {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className="list-header">
      <h1 className="header-element">Task Tracker</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </div>
  );
}

export default Header;
