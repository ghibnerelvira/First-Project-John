import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import s from './index.module.css'


export default function Footer() {
  return (
    <footer>
        <section className={s.footer}>
        <div>
            <a href="https://www.facebook.com/deinefacebookseite" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/deininstagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/deintwitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/deinlinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

            <p>Copyright &copy; 2020 All rights reserved</p>
        </section>
    </footer>
  );
}
