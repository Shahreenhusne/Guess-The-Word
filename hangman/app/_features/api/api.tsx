// /app/api/api.tsx

import axios from "axios";

// Function to fetch a random English word
export const fetchRandomWord = async () => {
  try {
    const response = await axios.get(
      "https://api.wordnik.com/v4/words.json/randomWord",
      {
        params: {
          api_key: "neuekdqth1ey07nlfk2g19tne2r6ck8a9op67fab3qzohna97",
          hasDictionaryDef: true,
          minLength: 3, // Adjust as needed
          maxLength: 10, // Adjust as needed
          includePartOfSpeech: "noun,verb,adjective", // Adjust as needed
        },
      }
    );

    if (response.data && response.data.word) {
      return response.data.word;
    } else {
      throw new Error("Unable to fetch word");
    }
  } catch (error) {
    console.error("Error fetching word:", error);
    throw error;
  }
};
