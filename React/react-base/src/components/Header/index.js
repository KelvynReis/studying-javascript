import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome to={24} />
      </Link>
      <Link to="/">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
