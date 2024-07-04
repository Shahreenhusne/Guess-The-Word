"use client";
import { useCallback, useEffect, useState } from "react";

// files
import wordList from "./ListOfWords.json";
import Drawing from "./_features/common/components/Drawing";
import Word from "./_features/common/components/Word";
import Keyboard from "./_features/common/components/Keyboard";

export default function Home() {
  // the word which the user has to guess.
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  });
  // array of letters that a users has select to choose the  word.
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // returns the array of characters from guessedletters which are not included in wordToGuess.
  const incorrctLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessLetterFun = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((cureentLetters) => [...cureentLetters, letter]);
    },
    [guessedLetters]
  );

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

  return (
    <>
      <div className=" flex flex-col gap-8 items-center my-2 mobile:my-10 mx-auto max-h-full  max-w-[1200px]">
        <div className=" text-4xl text-center text-[#112d55] ">Lose or Win</div>
        <Drawing incorrectLettersLength={incorrctLetters.length} />
        <Word wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
        <div className=" self-stretch">
          <Keyboard
            activeLetter={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrctLetters}
            addGuessLetter={addGuessLetterFun}
          />
        </div>
      </div>
    </>
  );
}
