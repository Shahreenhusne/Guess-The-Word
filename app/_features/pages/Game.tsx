"use client";
import { useCallback, useEffect, useState, useRef } from "react";

// files

import Drawing from "../components/Drawing";
import Word from "../components/Word";
import Keyboard from "../components/Keyboard";
import { fetchRandomWord } from "../api/api";

export default function Game() {
  // the word which the user has to guess.
  const [wordToGuess, setWordToGuess] = useState<string>("");
  // array of letters that a users has select to choose the  word.
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  // returns the array of characters from guessedletters which are not included in wordToGuess.
  const incorrctLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isMounted = useRef(true);
  const isLoser = incorrctLetters.length >= 6;
  const isWinner = wordToGuess
    .split(" ")
    .every((letter) => guessedLetters.includes(letter));

  //functions
  const addGuessLetterFun = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return; 
      // isLoser  and isWinner to prevent a user to press any key from keyboard after a session.
      setGuessedLetters((cureentLetters) => [...cureentLetters, letter]);
    },
    [guessedLetters ,isLoser,isWinner]
  );

  //useEffcts
  useEffect(() => {
    const getRandomWords = async () => {
      try {
        const word = await fetchRandomWord();
        setWordToGuess(word);
      } catch (error) {
        console.error("Error fetching random word:", error);
      }
    };

    if (isMounted.current) {
      getRandomWords();
    }

    isMounted.current = false;
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessLetterFun(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);
  // The dependency array [guessedLetters] means that React will run the effect after the initial render and whenever guessedLetters changes between renders.
  console.log(wordToGuess);
  return (
    <>
      <div className=" flex flex-col gap-8 items-center my-2 mobile:my-10 mx-auto max-h-full  max-w-[1200px]">
        <div className=" text-4xl text-center text-[#112d55] ">
          {isWinner && "You have won!!!...-Refresh to try again"}
          {isLoser && "Nice try!!..-Refresh to try again"}
        </div>
        <Drawing incorrectLettersLength={incorrctLetters.length} />
        <Word wordToGuess={wordToGuess} guessedLetters={guessedLetters} reveal={isLoser} />
        <div className=" self-stretch">
          <Keyboard
            activeLetter={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrctLetters}
            addGuessLetter={addGuessLetterFun}
            disabled={isWinner || isLoser}
          />
        </div>
      </div>
    </>
  );
}
