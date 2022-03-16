import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "movies",
    link: "/movies",
    id: "header-link-movies",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div style={{backgroundColor:"grey",height:"40px"}}>
{links.map(({title,link},index)=>{
  return (    
    <NavLink
      key={index}
      link={link}>      
      {title}
    </NavLink>   
  );
})}
</div>


  ); 
  
};
