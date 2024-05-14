import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import s from "./index.module.css";
import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(45deg);
  }
`;

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-20px);
  }
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#0D0C1D")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(-20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  div:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "translate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "scale(0.1)" : "scale(1)")};
  }

  div:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "translate(0)")};
  }
`;


const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  background: #EDF7FA;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #FF6464;
    }
  }
`;

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  const node = useRef();


  useOnClickOutside(node, () => setOpen(false));

  const toggleMenu = () => {
    setOpen(!open);
  };
  const closeMenuAndNavigate = (path) => {
  setOpen(false);
  navigate(path); 
  };

  


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [open]);


  return (
    <header>
      {windowWidth <= 600 && (
        <StyledBurger open={open} onClick={toggleMenu} ref={node}>
            <div />
            <div />
            <div />
        </StyledBurger>
        )}
        <StyledMenu open={open} ref={node}>

        <NavLink to="/" onClick={() => closeMenuAndNavigate("/")}>
        <span role="img" aria-label="home">
            🏘
        </span>
        Home
        </NavLink>
        <NavLink to="/blogs" onClick={() => closeMenuAndNavigate("/blogs")}>
        <span role="img" aria-label="blogs">
            💁🏻‍♂️
        </span>
        Blog
        </NavLink>
        <NavLink to="/works" onClick={() => closeMenuAndNavigate("/works")}>
        <span role="img" aria-label="works">
            💻
        </span>
        Works
        </NavLink>
        <NavLink to="/contacts" onClick={() => closeMenuAndNavigate("/contact")}>
        <span role="img" aria-label="contacts">
            📩
        </span>
        Contacts
        </NavLink>


      </StyledMenu>
      {windowWidth > 600 && (
        <nav className={`${s.header_nav} ${open ? s.active : ""}`}>
          <NavLink to="/" className={location.pathname === "/" ? s.active : ""} style={({ isActive }) => ({ color: isActive ? '#FF6464' : 'black' })}>Home</NavLink>
          <NavLink to="/blogs" className={location.pathname === "/blog" ? s.active : ""} style={({ isActive }) => ({ color: isActive ? '#FF6464' : 'black' })}>Blog</NavLink>
          <NavLink to="/works" className={location.pathname === "/works" ? s.active : ""} style={({ isActive }) => ({ color: isActive ? '#FF6464' : 'black' })}>Works</NavLink>
          <NavLink to="/contacts" className={location.pathname === "/contact" ? s.active : ""} style={({ isActive }) => ({ color: isActive ? '#FF6464' : 'black' })}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}
