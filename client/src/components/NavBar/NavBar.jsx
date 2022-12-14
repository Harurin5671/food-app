import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import img from "../../image/icons8-plus-80.png";

export default function NavBar({setCurrentPage}) {
  return (
    <div className={style.navContainer__navbar}>
      <SearchBar setCurrentPage={setCurrentPage}/>
      <div className={style.btn_create}>
        <Link to="/create">
          <img className={style.img} src={img} alt="" />
        </Link>
        <p className={style.p}>Create a Recipe</p>
      </div>
    </div>
  );
}
