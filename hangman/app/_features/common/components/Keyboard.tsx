
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


export default function Keyboard () {
    return (
        <>
        {/* grid-cols-13 is defined in tailwind.config */}
        <div className=" grid grid-cols-13 gap-2">
          {keys.map((key) => {
            return  <div className=" w-[100%] border-2 border-[#292F36] rounded-lg text-3xl uppercase p-[1rem] font-bold text-neutral-800" key={key}>{key}</div>
          })}
        </div>
        </>
    )
}

