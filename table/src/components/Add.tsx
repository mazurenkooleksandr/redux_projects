import { useState, ChangeEvent, MouseEvent } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson } from "../store/features/personSlice";

const Add = () => {
  const dispatch = useAppDispatch();
  const [personName, setPersonName] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonName(e.target.value);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addPerson({ name: personName }));
  };

  return (
    <form className="border rounded-md p-2 shadow-md m-2">
      <label htmlFor="personName">Person Name:</label>
      <input
        id="personName"
        className="border rounded-md p-2 mx-2"
        onChange={handleInputChange}
      />
      <button
        onClick={handleSubmit}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
