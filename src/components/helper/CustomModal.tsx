import React, { FC } from "react";
import "./CustomModal.css";
import { BsCheck2Circle, BsExclamationCircle } from "react-icons/bs";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  submissionResult: "success" | "error" | null;
  children?: React.ReactNode;
}

const CustomModal: FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  submissionResult,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{title}</h2>
              <button onClick={onClose}>&times;</button>
            </div>
            <div className="iconWrapper">
              {submissionResult === "success" ? (
                <BsCheck2Circle size={80} color={"green"} />
              ) : submissionResult === "error" ? (
                <BsExclamationCircle size={80} color={"red"} />
              ) : null}
            </div>
            <div className="modal-content">{children}</div>
            <div className="modal-footer">
                <button onClick={onClose}>ОК</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
