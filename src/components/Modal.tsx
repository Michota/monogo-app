import { XIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import styles from "./styles/Modal.module.css";

interface ModalControls {
  isModalOpen: boolean;
  onModalClose?: () => void;
}

function Modal({ children, onModalClose, isModalOpen = true }: PropsWithChildren<ModalControls>) {
  if (!isModalOpen) {
    return;
  }

  return createPortal(<ModalContent children={children} onModalClose={onModalClose} />, document.body);
}

function ModalContent({ children, onModalClose }: PropsWithChildren<Omit<ModalControls, "isModalOpen">>) {
  return (
    <>
      <div className={styles.modalOverlay} onClick={onModalClose} />
      <div className={styles.modalContainer}>
        <div className={styles.modalBody}>
          <header className={styles.modalHeader}>
            {/* Do not allow to close modal if has no open/close state control action */}
            {onModalClose && <XIcon className={styles.modalCloseButton} onClick={onModalClose} />}
          </header>
          <div className={styles.modalBodyContent}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
