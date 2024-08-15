"use client";
import { createContext } from "react";

export interface ContextProps {
  isMenuOpen: boolean;
  isModalOpen: boolean;
  modalOption: string;
  toggleSideMenu: () => void;
  toggleModal: (modalOption: string) => void;
  closeModal: () => void;
}

export const UiContext = createContext({} as ContextProps);
