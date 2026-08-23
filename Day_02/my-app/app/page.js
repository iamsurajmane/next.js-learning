"use client"
import { useState } from "react";

export default function Home() {
  const [count,setCount] = useState(0)
  return (
    <div>
      i am a component {count}
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  );
}
