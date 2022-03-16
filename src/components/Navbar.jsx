import "./Navbar.css"
import {Link} from 'react-router-dom'

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/"><h2 id="header-link-home">Home</h2></Link>
      <Link to="/about"><h2 id="header-link-about">About</h2></Link>
      <Link to="/movies"><h2 id="header-link-movies">Movies</h2></Link>
    </div>
  )
};
