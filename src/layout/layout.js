import React from 'react';
import './Layout.scss';

import Toolbar from '../components/Navigation/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer';
import Footer from '../components/UI/Footer/Footer';

const Layout = (props) => (
  <>
    <Toolbar />
    
    <main className="main-content">
      {props.children}
    </main>
    
  </>
);

export default Layout;