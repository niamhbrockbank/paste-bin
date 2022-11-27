import axios from "axios";

export const deletePaste = async (paste_id: number): Promise<void> => {
  await axios.delete(
    `https://paste-bin-nb.onrender.com/pastes/${paste_id}`
  );
};
