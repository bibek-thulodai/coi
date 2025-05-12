import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export const ModalHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-b">
    <h2 className="text-lg font-bold">{children}</h2>
  </div>
);

export const ModalBody = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

export const ModalFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-t">{children}</div>
);
