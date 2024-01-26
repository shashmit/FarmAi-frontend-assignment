export default function Button({ but, setButType }) {
  const handleOnClick = () => {
    setButType(true);
  };

  return (
    <div>
      <button
        disabled={but}
        onClick={handleOnClick}
        className="border-2 bg-transparent p-3 border-black rounded-lg"
      >
        Add Field
      </button>
    </div>
  );
}
