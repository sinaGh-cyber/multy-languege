/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLanguage } from './context';
// import { useContext } from 'react';
// import { createContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

export default function Navbar() {
  const { language, changeLanguage, words } = useLanguage();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" href="#">
          {words.home}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {words.events}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {words.aboutUs}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {words.contactUs}
        </a>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          {words.language}
        </a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                if (language === 'English') changeLanguage();
              }}
            >
              فارسی
            </a>
          </li>
          <li className="nav-item">
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                if (language !== 'English') changeLanguage();
              }}
            >
              English
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
