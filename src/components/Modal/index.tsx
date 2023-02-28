import React, { useEffect, useRef } from "react";
import {
  closeLogOut,
  closeNotification,
  closeSidebar,
  showModal,
} from "../../store/modalSlice";
import { useAppDispatch } from "../../hooks/hooksRedux";
import "./_index.scss";

type ModaleProps = {
  children: any;
  className: string;
};

const Modale = ({ children, className }: ModaleProps) => {
  let dispatch = useAppDispatch();
  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (!menuRef?.current?.contains(event.target as Node)) {
        dispatch(showModal(false));
        dispatch(closeLogOut(false));
        dispatch(closeNotification(false));
        dispatch(closeSidebar(false));
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="modal open-sidebar">
      <div ref={menuRef} className={`${className}-modal-content`}>
        {children}
      </div>
    </div>
  );
};

export default Modale;
