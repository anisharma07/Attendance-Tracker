import React from "react";
interface ModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setOpen }) => {
  const addSub = () => {
    setOpen(false);
    console.log("Add Subject");
  };
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-[100] inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        onClick={() => setOpen(false)}
        className="absolute top-0 left-0 z-[100] bg-black bg-opacity-50"
      ></div>
      <div className="p-6 rounded-lg shadow-lg w-80 bg-[#1F222B]">
        <h2 className="text-lg font-semibold text-foreground">Add Subject</h2>
        <div className="mt-4">
          <label className="block text-muted-foreground" htmlFor="subject-name">
            Subject Name:
          </label>
          <input
            type="text"
            id="subject-name"
            placeholder="Eg. Data structures"
            className="mt-1 p-2 border border-border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label className="block text-muted-foreground" htmlFor="present">
            Present:
          </label>
          <input
            type="number"
            id="present"
            value="0"
            className="mt-1 p-2 border border-border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-muted-foreground"
            htmlFor="total-classes"
          >
            Total Classes:
          </label>
          <input
            type="number"
            id="total-classes"
            value="0"
            className="mt-1 p-2 border border-border rounded w-full"
          />
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setOpen(false)}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/80 p-2 rounded bg-[#730202]"
          >
            CANCEL
          </button>
          <button
            onClick={addSub}
            className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded bg-[#008315]"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
