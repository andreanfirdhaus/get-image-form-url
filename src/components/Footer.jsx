import React from "react";
import { NavLink } from "react-router-dom";
import { PiGraduationCapFill, PiUsersThreeFill } from "react-icons/pi";

function Footer() {
    return (
        <footer>
            <div className="fixed bottom-2 left-0 w-full">
                <div className="flex justify-center">
                    <ul className="menu menu-sm menu-horizontal bg-base-200 rounded-box gap-2">
                        <li>
                            <NavLink to="/">
                                <PiUsersThreeFill size={23} />
                                Classmates
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/graduated">
                                <PiGraduationCapFill size={23} />
                                Graduates
                                <span className="badge badge-sm badge-success"></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
