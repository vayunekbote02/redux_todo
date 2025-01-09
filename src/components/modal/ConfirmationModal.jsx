export const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className={`fixed inset-0 flex items-center justify-center bg-black ${
        message === "all notes" ? "bg-opacity-70" : "bg-opacity-40"
      }`}
      onClick={handleOutsideClick}
    >
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-xl">
          Are you sure you want to delete {message}?
        </h2>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
