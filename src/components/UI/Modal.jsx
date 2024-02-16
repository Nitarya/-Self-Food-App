import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
export default function Modal({ children, open, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      dialog.current.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
    document.getElementById("modal")
  );
}
