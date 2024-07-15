type WordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

export default function Word({
  wordToGuess,
  guessedLetters,
  reveal = false,
}: WordProps) {
  return (
    <>
      <div className="flex gap-1 font-bold uppercase font-mono text-7xl">
        {wordToGuess.split("").map((letter, index) => (
          <div key={index} className="border-b-8 border-[#112d55]">
            <div
              className={`${
                guessedLetters.includes(letter) || reveal ? "visible" : "hidden"
              } ${
                !guessedLetters.includes(letter) && reveal
                  ? "text-red-500"
                  : "text-[#112d55]"
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
