import React from 'react';
import { Link, useMatch } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);
  return (
    <Link to={to} style={{ color: match ? 'green' : 'red' }} {...props}>
      {children}
    </Link>
  );
}

export default CustomLink;
