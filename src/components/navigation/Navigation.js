import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/info">
          Info page
        </NavLink>
        <NavLink to="/interacvtive">Interactive</NavLink>
      </nav>
    </>
  );
};

export default Navigation;
