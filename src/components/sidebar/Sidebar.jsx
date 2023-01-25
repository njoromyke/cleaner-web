import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
      title: "Manage Jobs",
      icon: "lni lni-add-files mr-2",
      link: "/admin/jobs",
    },
    {
      title: "Manage Applicants",
      icon: "lni lni-briefcase mr-2",
      link: "/admin/applicants",
    },
    {
      title: "Bookmark Resumes",
      icon: "lni lni-bookmark mr-2",
      link: "/admin/bookmarks",
    },
    {
      title: "Packages",
      icon: "lni lni-mastercard mr-2",
      link: "/admin/packages",
    },
    {
      title: "Messages",
      icon: "lni lni-envelope mr-2",
      link: "/admin/messages",
    },

    {
      title: "My Profile",
      icon: "lni lni-user mr-2",
      link: "/admin/profile",
    },
    {
      title: "Change Password",
      icon: "lni lni-lock-alt mr-2",
      link: "/admin/change-password",
    },
    {
      title: "Delete Account",
      icon: "lni lni-trash-can mr-2",
      link: "/admin/delete-account",
    },
    {
      title: "Log Out",
      icon: "lni lni-power-switch mr-2",
      link: "/admin/logout",
    },
  ];

  return (
    <div className="collapse" id="MobNav">
      <div className="dashboard-nav">
        <div className="dashboard-inner">
          <ul data-submenu-title="Main Navigation">
            {pages.map((page, index) => (
              <li>
                <NavLink to={page.link}>
                  <i className={`${page.icon} mr-2`}></i>
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
