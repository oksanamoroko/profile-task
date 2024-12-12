const ToggleButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Reverse Order
    </button>
  );

  export default ToggleButton