//hangman head 
const head = (<div className=" w-[50px] h-[50px] rounded-[100%] border-4 border-[#A41F13] absolute top-[50px] right-[-22px]"></div>)
//hangman body 
const body = (<div className=" w-[5px] h-[80px] bg-[#A41F13] absolute top-[100px] right-0"></div>)
//hangman right arm
const right_arm = (<div className=" w-[60px] h-[5px] absolute top-[110px] right-[-55px] bg-[#A41F13] rotate-[30deg] origin-bottom-left"></div>)
//hangman left arm 
const left_arm = (<div className=" w-[60px] h-[5px] absolute top-[110px] right-0 bg-[#A41F13] rotate-[-30deg] origin-bottom-right"></div>)
//hangman right leg 
const right_leg = (<div className=" w-[60px] h-[5px] absolute top-[175px] right-[-55px] bg-[#A41F13] rotate-[50deg] origin-bottom-left"></div>)
//hangman left leg
const left_leg = (<div className=" w-[60px] h-[5px] absolute top-[175px] right-0 bg-[#A41F13] rotate-[-50deg] origin-bottom-right"></div>)

// hangman-drawing array 
 const draw_body = [ head, body, right_arm, left_arm, right_leg, left_leg]


type DrawingProps = {
  incorrectLettersLength : number 
}


export default function Drawing( {incorrectLettersLength} : DrawingProps) { 
    
    return (
      <>
       <div className="relative">
        {draw_body.slice(0,incorrectLettersLength)}
        <div className="h-[50px] w-[5px] bg-[#292F36] absolute top-0 right-0"></div>
          <div className="h-[5px] w-[150px] bg-[#292F36] ml-[150px]"></div>
          <div className=" h-[300px] w-[5px] bg-[#292F36] ml-[150px]"></div>
          <div className=" h-[5px] w-[300px] bg-[#292F36]"></div>
       </div>
      </>
    );
  }
