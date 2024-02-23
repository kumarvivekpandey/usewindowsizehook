import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function useWindowSize() {
  const [windowsize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowsize;
}
export default function App() {
  const { width, height } = useWindowSize();
  return (
    <>
      <h1>Window Width: {width}</h1>
      <h1>Window Height: {height}</h1>
      <img
        src="https://wallpapercave.com/wp/wp3913837.png"
        style={{ width: `${width - 80}px` }}
      />
    </>
  );
}
