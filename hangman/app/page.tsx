'use client';
import { useState } from "react";

// files
import wordList from "./ListOfWords.json";
import Drawing from "./_features/common/components/Drawing";
import Word from "./_features/common/components/Word";
import Keyboard from "./_features/common/components/Keyboard";

export default function Home() { 
  // the word which the user has to guess.
  const [wordToGuess, setWordToGuess] = useState (() => {
     return wordList[Math.floor(Math.random() * wordList.length)]
  })

  // array of letters that a users has select to choose the guess word.
  const [guessedLetters, setGuessedLetters] = useState <string[]>([])


  // returns the array of the from guessedletters which are not included in wordToGuess list.
  const incorrctLetters = guessedLetters.filter (
    letter => !wordToGuess.includes(letter)
  )         
  
  console.log(incorrctLetters)
  return (
    <>
      <div className=" flex flex-col gap-8 items-center my-0 mx-auto max-w-[1200px]">
          <div className=" text-4xl text-center">
               Lose or Win
          </div>
          <Drawing incorrectLettersLength = {incorrctLetters.length} />
          <Word wordToGuess = {wordToGuess} guessedLetters= {guessedLetters}/>
          <div className=" self-stretch">
            <Keyboard/>

          </div>
         
      </div>
    </>
  );
}
