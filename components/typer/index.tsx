"use client";
import { useEffect, useMemo } from "react";

const LOAD_DELAY = 800;    // wait 1.2 seconds after dom is fully loaded
const CHAR_DELAY = 30;      // wait 45ms before typing subsequent character
const WORD_DELAY = 1200;    // wait 2.4 seconds before erasing the word
const INTERVAL_DELAY = 100; // wait 200ms before typing the next word
const FINAL_DELAY = 2000;   // wait 2.5 seconds after the last

interface TyperWindow extends Window {
  typerController?: Controller;
}

class Controller {
  carousel: string[];
  isWriting: boolean;
  carouselIndex: number;
  cursorPosition: number;
  pending_step: number;

  play () { 
    // Idea
    // 1. each running step pushes its successor onto the JS event loop, 
    // 2. each 'pending_step' uses block-level scoping to ensure that the previous step is always cleared before the next step is scheduled
    // 3. subsequent steps are deferred asynchronously by 'idle_time' milliseconds, 
    // => 
    // (1) effect never blocks the JS event loop; 
    // (2) detached timers are always cleared before the component unmounts
    
    // clear any timers that are currently running
    if (this.pending_step !== -1)
      clearTimeout(this.pending_step);

    let idle_time: number; 
    const _step = async () => {
      // current step is cleared before the next step is scheduled
      this.pending_step = -1;
      // type the next character or delete the last one
      this.cursorPosition += (this.isWriting) ? 1 : -1;
      // delay is determined by the current position of the cursor
      idle_time = CHAR_DELAY;
      if (this.cursorPosition > this.carousel[this.carouselIndex].length) {
        idle_time = WORD_DELAY;
        this.isWriting = false;
      }
      else if (this.cursorPosition === 0) {
        idle_time = INTERVAL_DELAY;
        this.isWriting = true;
        this.carouselIndex = (this.carouselIndex + 1) % this.carousel.length;
        if (this.carouselIndex === 0) 
          idle_time = FINAL_DELAY
      }
      // get the DOM node to type on
      const dom_node = document.getElementById('typer') as HTMLSpanElement;
      dom_node.innerText = this.carousel[this.carouselIndex].slice(0, this.cursorPosition);
      // setTimeout is used to control typing speed
      if (this.pending_step === -1) {
        // 1. once execution is finished, each step pushes its successor onto the JS event loop,
        // 3. subsequent steps are deferred asynchronously by 'idle_time' milliseconds, 
        this.pending_step = setTimeout(_step, idle_time) as unknown as number; 
      } 
      else {
        console.error('the previous _step was not cleared before the next _step was scheduled.');
      }
    }
    // ensure DOM is loaded before starting the typing effect
    if (window){
      if (document.readyState === "complete")
        this.pending_step = setTimeout(_step, LOAD_DELAY) as unknown as number 
      else
        window.addEventListener(
          "DOMContentLoaded", 
          () => { 
            this.pending_step = setTimeout(_step, LOAD_DELAY) as unknown as number 
          }
        );    
    }
    // if the component is unmounted, THEN CLEAN UP YOUR MESS
    return () => {
      // 2. each 'pending_step' uses block-level scoping to ensure that the previous step is always cleared before the next step is scheduled
      // only positive integers are valid timers
      if (this.pending_step <= 0) return void 0;  
      clearTimeout(this.pending_step);
      this.pending_step = -1; 
    }
  }

  constructor(window: TyperWindow, carousel: string[]) {
    this.isWriting = window?.typerController?.isWriting || true;
    this.carouselIndex = window?.typerController?.carouselIndex || 0;
    this.cursorPosition = window?.typerController?.cursorPosition || 0;
    this.pending_step = window?.typerController?.pending_step || -1; // 
    if (window) window.typerController = this;
    this.carousel = carousel;
  }
}

export function TyperSpan(this: any, { carousel }: { carousel: string[] }) {
  // use effect is useful here to set the setInterval and rendering our function just once :
  const controller = useMemo(
    () => new Controller(this, carousel), [carousel]
  );
  const play = () => controller.play();
  useEffect(play);
  return (
    <span className="inline-block">
      <span className="text-extrabold align-middle" id='typer'></span>      
      <span className="animate-blink font-extrabold text-4xl align-middle">|</span>
    </span>
  )
}