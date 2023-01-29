import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../services/firebase";
import { showNotification } from "../../helpers/utils/notification";

const Sidebar = () => {
  const logout = () => {
    signOut(auth).then(() => {
      showNotification("Logged out successfully!", "success");
      window.location.reload();
      window.location.href = "/";
    });
  };

  const pages = [
    {
      title: "Dashboard",
      icon: "lni lni-dashboard mr-2",
      link: "/admin/dashboard",
    },
    {
      title: "Post New Service",
      icon: "lni lni-files mr-2",
      link: "/admin/jobs/new",
    },
    {
      title: "Manage Services",
      icon: "lni lni-add-files mr-2",
      link: "/admin/jobs",
    },
    {
      title: "Manage Users",
      icon: "lni lni-users mr-2",
      link: "/admin/users",
    },
    {
      title: "Manage Bookings",
      icon: "lni lni-briefcase mr-2",
      link: "/admin/bookings",
    },
    // {
    //   title: "Messages",
    //   icon: "lni lni-envelope mr-2",
    //   link: "/admin/messages",
    // },
    {
      title: "Log Out",
      icon: "lni lni-power-switch mr-2",
      onclick: logout,
    },
  ];

  return (
    <div className="collapse" id="MobNav">
      <div className="dashboard-nav">
        <div className="dashboard-inner">
          <ul data-submenu-title="Main Navigation">
            {pages.map((page, index) => (
              <li key={index}>
                {page.onclick ? (
                  <NavLink to="#" onClick={page.onclick}>
                    <i className={`${page.icon} mr-2`}></i>
                    {page.title}
                  </NavLink>
                ) : (
                  <NavLink to={page.link}>
                    <i className={`${page.icon} mr-2`}></i>
                    {page.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
