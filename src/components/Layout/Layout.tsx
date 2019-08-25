import * as React from 'react';
import './Layout.css';

interface Props {
}

const Layout: React.SFC<Props> = ({ children }) => {
  return (
    <div className="page-container">
      {children}
    </div>
  )
};

export default Layout;
