import React from "react";

//Stateless Functional Component

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <p className="navbar-brand">
        Products{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </p>
    </nav>
  );
};

/*
Quando fizer um componente sem state, igual esse, você pode usar o exemplo acima para facilitar e ter menos problemas no futuro.

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
          <p className="navbar-brand">
            Products{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </p>
        </nav>
      );
  }
}
*/
export default Navbar;
