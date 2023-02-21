import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modalSlice";
import "./_index.scss";

type ModaleProps = {
  children: string;
};

const Modale = ({ children }: ModaleProps) => {
  let dispatch = useDispatch();
  let menuRef = useRef();

  useEffect(() => {
    let handler = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!menuRef?.current?.contains(event.target)) {
        dispatch(showModal(false));
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="modal">
      <div ref={menuRef} className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modale;
