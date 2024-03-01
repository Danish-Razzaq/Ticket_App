import { faHome, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" flex justify-between bg-nav p-4 ">
      <div className="flex items-center space-x-4 ">
        <Link href={"/"}>
          <span title="Home">
            <FontAwesomeIcon icon={faHome} className="icon" />
          </span>
        </Link>
        <Link href={"/TicketPage/new"}>
          <span title="Create New Ticket">
            <FontAwesomeIcon icon={faTicket} className="icon" />
          </span>
        </Link>
      </div>
      <div>
        <p className="text-default-text cursor-pointer" title="User-Email">
          <FontAwesomeIcon icon={faUser} size={"2x"} /> Dani@gmail.com
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
