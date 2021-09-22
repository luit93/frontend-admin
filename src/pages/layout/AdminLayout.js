import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SideBarMenu from "../../components/sidebar/SideBarMenu";
const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <aside className="left">
        <SideBarMenu />
      </aside>
      <aside className="right">
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </aside>
    </div>
  );
};

export default AdminLayout;
