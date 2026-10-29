import { X } from "lucide-react";
import "./SuperiorModal.css";
import { motion } from "motion/react";

// Toast-style modal: shows a message and a close button
// `type` selects the style: "error" or anything else (success)
export default function SuperiorModal({ children, onClose, type }) {
  return (
    // Slides in from the right and fades; `exit` runs when AnimatePresence unmounts it
    <motion.div
      className={type === "error" ? "error-div" : "sucess-div"}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.3 }}
    >
      {/* Message text passed by the parent */}
      <p>{children}</p>

      {/* Close button; the parent clears the message in `onClose` */}
      <div className="close-button-div">
        <button className="close-button" type="button" onClick={onClose}>
          <X className="x-icon" />
        </button>
      </div>
    </motion.div>
  );
}
