
const keys =  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

type KeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessLetter: (letter: string) => void;
  disabled?: boolean
};
export default function Keyboard({
  activeLetter,
  inactiveLetters,
  addGuessLetter,
  disabled= false                               
}: KeyboardProps) {
  return (
    <>
      {/* grid-cols-13 is defined in tailwind.config */}
      <div className=" grid grid-cols-13 gap-2">
        {keys.map((key) => {
          const isActive = activeLetter.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              className={`w-[100%] border-2 border-[#112d55] rounded-2xl text-3xl uppercase p-[1rem] font-bold text-[#112d55]   ${
                isActive ? "bg-[#ac4b47]" : ""
              } ${isInactive ? "opacity-50" : ""}`}
              key={key}
              onClick={() => addGuessLetter(key)}
              disabled={isActive || isInactive || disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
    </>
  );
}

