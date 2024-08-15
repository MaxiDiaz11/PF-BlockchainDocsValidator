"use client";
import React, { FC, useContext } from "react";
import { Modal, Box } from "@mui/material";
import { UiContext } from "@/app/context";
import { ModalReqDocContent } from "./ModalReqDocContent";

interface ModalContentProps {
  children: JSX.Element | JSX.Element[];
}

export const ModalComponent: FC<ModalContentProps> = ({ children }) => {
  const { toggleModal, isModalOpen, modalOption } = useContext(UiContext);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    width: 400,
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 10,
    p: 4,
  };

  return (
    <div>
      <Modal open={isModalOpen} onClose={toggleModal}>
        <Box sx={style}>
          {modalOption === "requestDoc" ? (
            <ModalReqDocContent />
          ) : (
            <Box>{children}</Box>
          )}
        </Box>
      </Modal>
    </div>
  );
};
