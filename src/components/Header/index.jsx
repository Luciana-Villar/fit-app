import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <Link className="logo" to="/">
          Fit App
        </Link>
        <div className="header-right">
          <Link className="home" to="/">
            Home
          </Link>
          <Link className="ingred" to="/ingredients">
            Ingredients
          </Link>
          <a className="meals" href="#meals">
            Meals
          </a>
        </div>
      </div>

      {/* <form>
        <label htmlFor="fooditem">Food Item:</label>
        <br />
        <input id="fooditem-input" type="text" className="fooditem" />
        <br />
        <label htmlFor="foodtype">Food Type:</label>
        <br />
        <input
          id="foodtype-input"
          type="text"
          className="foodtype"
          list="foodtype-list"
        />
        <br />
        <datalist id="foodtype-list">
          <option value="Animal Protein" />
          <option value="Vegetable Protein" />
          <option value="Carbohydrate" />
          <option value="Green Vegetable" />
          <option value="Other Vegetable" />
          <option value="Fruit" />
          <option value="Nuts" />
        </datalist>
      </form>

      <button onClick="createIngred()">Create</button> */}
    </div>
  );
}

export default Header;
