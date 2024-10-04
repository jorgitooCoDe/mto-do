import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCalendarDay,
  faCalendarDays,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import useModal from "../atom/useModal";

const Nav: React.FC = () => {
  const addTaskModal = useModal();

  return (
    <nav className="w-72 h-screen flex-col justify-between fixed bg-mto_blue shadow-md">
      <div className="h-full">

        <div className="flex justify-center py-10 shadow-sm pr-4">
          <svg className="h-12 w-12 text-mto_pink select-none" fill="none" viewBox="0 0 24 24">
            <FontAwesomeIcon icon={faAddressBook} />
          </svg>
          <div className="pl-2">
            <p className="text-2xl font-bold text-white select-none">M-TO</p>
            <span className="text-sm font-bold block text-white select-none">DO</span>
          </div>
        </div>

        <div className="pl-10">
          <ul className="space-y-8 pt-10">
            <li className="flex space-x-4 items-center  cursor-pointer">
              <svg className="h-6 w-6 text-mto_pink hover:text-mto_sky_blue hover:transition-colors">
                <FontAwesomeIcon icon={faPlusCircle} />
              </svg>
              <a onClick={addTaskModal.openModal} className="text-white hover:text-mto_sky_blue transition-colors">Añadir Tarea</a>
            </li>
            <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
              <svg className="h-6 w-6 text-mto_pink hover:text-mto_sky_blue hover:transition-colors">
                <FontAwesomeIcon icon={faCalendarDay} />
              </svg>
              <a href="#" className="text-white hover:text-mto_sky_blue transition-colors">Hoy</a>
            </li>
            <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
              <svg className="h-6 w-6 text-mto_pink hover:text-mto_sky_blue hover:transition-colors">
                <FontAwesomeIcon icon={faCalendarDays} />
              </svg>
              <a href="#" className="text-white hover:text-mto_sky_blue transition-colors">Próximo</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
