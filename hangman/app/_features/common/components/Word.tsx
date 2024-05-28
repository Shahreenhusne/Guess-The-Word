
type WordProps = {
    wordToGuess : string 
    guessedLetters : string[]
}

export default function Word ({wordToGuess, guessedLetters} : WordProps) {
    
   
    return(
        <>
        <div className="flex gap-1 font-bold uppercase font-mono text-7xl">
         {wordToGuess.split("").map((letter, index) => (
              <span className=" border-b-8 border-black">
                <span>
                   {letter}
                </span>
              </span>
         ))}
        </div>
        </>
    )
}

// className={`flex-1 text-center text-xl p-4 font-lato  cursor-pointer ${selectedBHK === option ? 'bg-gray-300' : ''}`}

