"use client";
import { clear } from "console";
import { useState, useRef, useEffect } from "react";
import { element } from "three/examples/jsm/nodes/Nodes.js";

interface CursorProps {
  carosel: string[];
  charDelay?: number;
  wordDelay?: number;
  cursorText?: "|";
}

interface TyperSpanProps {
  carosel: string[];
}

function TyperSpan({ carosel }: TyperSpanProps) {
  const [c, _] = useState(carosel);
  const typerRef = useRef(null);
  let [caroselIndex, setCaroselIndex] = useState(0);
  let [typerText, settyperText] = useState("");
  let [isTyping, setTyping] = useState(true);

  const index = useRef(0);
  const strokeRef = useRef<ReturnType<typeof setInterval> | null>(null);
  

  // this is the function which display the new text from const string
  const displayString = () => {
    const string = c[caroselIndex];
    settyperText(string.slice(0, index.current));
    index.current++;
    if (index.current > string.length) {
      setTyping(false);      
      if (strokeRef.current)
        clearInterval(strokeRef.current);
    }
  };

  const clearString = () => {
    const string = c[caroselIndex];
    settyperText(string.slice(0, index.current));
    index.current--;
    if (index.current <= 0) {
      setCaroselIndex((caroselIndex + 1) % carosel.length);
      setTyping(true);
      if (strokeRef.current)
        clearInterval(strokeRef.current);
    }
  }
  // fonction which use Math.floor and Math.random to give a random number that will be use
  //in the setInterval parameter ;) :
  const randomSpeed = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // use effect is useful here to set the setInterval and rendering our function just once :
  useEffect(() => {
    if (strokeRef.current) {
      clearInterval(strokeRef.current);
    }
    if (isTyping) {
      console.log("typing");
      strokeRef.current = setInterval(displayString, randomSpeed(80, 100));
    } else {
      console.log("clearing");
      setTimeout(() => {
      strokeRef.current = setInterval(clearString, randomSpeed(40, 80));
      }, 1500);
    }
    return () => {
      clearInterval(strokeRef.current);
    };
  }, [isTyping]);

  return (
    <span>
      <span ref={typerRef}>{typerText}</span>
      <span className="font-extrabold text-2xl">|</span>
    </span>
  );
}

export function Typer({ carosel }: CursorProps) {
  return <TyperSpan carosel={carosel} />;
}
