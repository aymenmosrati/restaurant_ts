import React, { useEffect, useRef } from "react";
import { showModal } from "../../store/modalSlice";
import { useAppDispatch } from "../../utilities/hooks";
import "./_index.scss";

type ModaleProps = {
  children: any;
};

const Modale = ({ children }: ModaleProps) => {
  let dispatch = useAppDispatch();
  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (!menuRef?.current?.contains(event.target as Node)) {
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
