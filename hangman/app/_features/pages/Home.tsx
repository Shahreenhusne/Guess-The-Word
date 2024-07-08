"use client";
import { useCallback, useEffect, useState } from "react";

// files
import Game from "./Game"
import Loader from "../components/Loader";

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true); //state for the loader

     useEffect(() => {
       // Simulate loading
       setTimeout(() => {
         setIsLoading(false);
       }, 25*100); // Adjust the duration as needed
     }, []);

  return (
      <>
          
          <div>
              {isLoading ? <Loader /> : <Game />}
          </div>   
     </>
  );
}
