import { useState } from "react";
import { ipValidator } from "../utils/ipValidator";

export function Input({ setIpAddress }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setIpAddress(value);
    setValue("");
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="lg:min-w-[564px] lg:w-[30%] w-[85vw] sm:px-0 relative mb-8 md:mb-12 mt-2"
    >
      {error && (
        <label
          htmlFor="ip-input"
          className="absolute xl:mt-5 font-[500] text-red-500"
        >
          Wrong IP Address
        </label>
      )}
      <input
        name="ip-input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => {
          setError(!ipValidator(value));
        }}
        className={`lg:min-w-[500px] lg:w-[90%] w-[90%] md:w-[90%] text-md lg:text-xl p-4 lg:my-6 mb-12 bg-white rounded-l-2xl focus:outline-none ${
          error && "border-1 border-red-500"
        }`}
      />
      <button
        className="lg:min-w-[64px] lg:w-[10%] w-16 md:w-[10%] flex items-center justify-center text-white text-3xl font-[700] lg:my-6 mb-12  p-4 absolute right-0 top-0 bottom-0 bg-gray-500 rounded-r-2xl hover:cursor-pointer hover:bg-gray-600"
        disabled={error}
      >
        {">"}
      </button>
    </form>
  );
}
