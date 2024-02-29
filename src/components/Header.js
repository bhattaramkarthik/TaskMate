import { useEffect, useState } from 'react';
import './header.css';

function Header(){

   const [theme,setTheme] = useState(localStorage.getItem('theme') || "backgroundWhite");

   useEffect(() => {
      document.documentElement.removeAttribute("class");
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme',theme);
   },[theme]);

   return(
       <header>
         <div className = "headerTitle">
            <span>TaskMate</span>
         </div>
         <div className = "changeTheme">
            <div className = "color blue">
            <span className = "pointer" onClick={() => setTheme('backgroundBlue')}>Blue</span>
            </div>
            <div className = "color grey">
            <span className = "pointer" onClick={() => setTheme('backgroundGrey')}>Grey</span>
            </div>
            <div className = "color white">
            <span className = "pointer" onClick={() => setTheme('backgroundWhite')}>White</span>
            </div> 
         </div>
       </header>
   )
}

export default Header;