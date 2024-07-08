
type WordProps = {
    wordToGuess : string 
    guessedLetters : string[]
}

export default function Word ({wordToGuess, guessedLetters} : WordProps) {
    
   
    return (
      <>
        <div className="flex gap-1 font-bold uppercase font-mono text-7xl">
          {wordToGuess.split("").map((letter, index) => (
            <div key={index} className="border-b-8 border-[#112d55]">
              <div
                className={` text-[#112d55] ${
                  guessedLetters.includes(letter) ? "visible" : "hidden"
                }`}
              >
                {letter}
              </div>
            </div>
          ))}
        </div>
      </>
    );
}


