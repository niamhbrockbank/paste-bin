import { IPaste } from "../Interfaces/Interfaces";
import axios from "axios";

export const getAllPaste = async (
  setPasteArray: React.Dispatch<React.SetStateAction<IPaste[]>>
): Promise<void> => {
  const pasteResponse = await axios.get(
    "https://paste-bin-nb.onrender.com/pastes"
  );
  const pasteData: IPaste[] = pasteResponse.data;
  setPasteArray(pasteData);
};
