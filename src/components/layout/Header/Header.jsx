import "./Header.css";

import Logo from "./assets/Logo.png";
import NavLogo from "./assets/NavLogo.png";

import { useState } from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <header className="header">
        <Link to="/home">
          <img className="logo" src={Logo} alt="Logo Header" />
        </Link>

        <button onClick={toggleMenu} className="Header-button">
          <picture>
            <img src={NavLogo} alt="Logo Hamburguer" />
          </picture>
        </button>

        <nav className={`Header-nav ${menu ? "isActive" : ""}`}>
          <section className="navigation">
            <Link to="/products">
              <button>Inicio</button>
            </Link>

            <Link to="/help">
              <button>Sobre Nosotros</button>
            </Link>

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Planes</DropdownToggle>
              <DropdownMenu>
                <DropdownItem className="dropDown_plans">Familiar</DropdownItem>
                <DropdownItem className="dropDown_plans">
                  Individual
                </DropdownItem>
                <DropdownItem className="dropDown_plans">
                  Empresarial
                </DropdownItem>
                <DropdownItem className="dropDown_plans">Mascotas</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
            <Link to="/info">
              <button>Cobertura</button>
            </Link>
          </section>
        </nav>
      </header>
    </>
  );
};
