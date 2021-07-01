import { Dialog, DialogContent } from "@material-ui/core";
import React from "react";
import Logo from "./Logo";

const Popup = ({ setOpen, open }) => {
  const handleEntering = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      disableEscapeKeyDown
      maxWidth="xs"
      PaperProps={{ style: { width: `100%` } }}
      onClose={handleClose}
      onEntering={handleEntering}
      open={open}
    >
      <DialogContent>
        <div className="confirmTransaction dark:bg-dark-700  grid grid-cols-1 items-center py-12 text-center">
          <div className="mb-14 flex items-center justify-center">
            <div className="animate-bounce">
              <Logo width={80} />
            </div>
          </div>
          <div className="dark:text-white text-lg text-center w-full">
            Waiting transaction confirm ...
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
