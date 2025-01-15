import React from "react";

interface MyDialogProps {
  dialogId: string;
  title?: string;
  children?: React.ReactNode;
  showBtnCancel?: boolean;
  cancelBtnText?: string;
  confirmBtnText?: string;
  showBtnConfirm?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
}

export const MyDialog = ({
  dialogId,
  title,
  children,
  showBtnCancel = true,
  cancelBtnText = "Đóng",
  confirmBtnText = "Tạo mới",
  showBtnConfirm = true,
  onClose,
  onSubmit,
}: MyDialogProps) => {
  return (
    <dialog id={dialogId} className="modal">
      <div className="modal-box w-3/5 max-w-4xl">
        <h3 className="font-bold text-lg">{title}</h3>
        <div>{children}</div>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex gap-2">
              {showBtnCancel && (
                <button onClick={onClose} className="btn btn-neutral">
                  {cancelBtnText}
                </button>
              )}
              {showBtnConfirm && (
                <button
                  onClick={onSubmit}
                  className="btn btn-primary"
                  type="submit"
                >
                  {confirmBtnText}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};
