"use client";
import React, { FC, useReducer } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
  isMenuOpen: boolean;
  isModalOpen: boolean;
  modalOption: string;
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Ui_INITIAL_STATE: UiState = {
  isMenuOpen: false,
  isModalOpen: false,
  modalOption: "",
};

const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "UI-ToggleMenu" });
  };

  const toggleModal = (modalOption: string) => {
    dispatch({ type: "UI-ToggleModal", payload: modalOption });
  };

  const closeModal = () => {
    dispatch({ type: "UI-CloseModal" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSideMenu,
        toggleModal,
        closeModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
