import { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";
import Link from "next/link";

export default function Homepage() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const [pieces, setPieces] = useState(10);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  // const [date, setDate] = useState(new Date())
  // const [isUserOn, setUserOn] = useState(false)

  // const onHandleDate = (date) => {
  //   setDate(date)
  // }

  // const checkUserBirthday = () => {
  //   if (date.getMonth() === 0 && date.getDate() === 23) {
  //     setUserOn(true)
  //   }
  // }

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  const onHandleColorChange = (e) => setColor(e.target.value);

  const onHandlePiecesChange = (e) => setPieces(e.target.value);

  const onHandleSquare = (e) => {
    setPosX(e.clientX - pieces / 2 - 20);
    setPosY(e.clientY - pieces / 2 - 20);
  };

  return (
    <div onMouseMove={onHandleSquare} style={{ height: "100vh" }}>
      {/* <Confetti width={width} height={height} colors={[color]} numberOfPieces={pieces} /> */}
      {/* <Calendar value={date} onChange={onHandleDate} locale="it-IT" /> */}
      {/* {isUserOn && <Confetti width={500} height={350} /> */}
      {/* <button onClick={checkUserBirthday}>Ho selezionato compleanno</button> */}
      <input type="color" value={color} onChange={onHandleColorChange} />
      <input
        type="range"
        value={pieces}
        onChange={onHandlePiecesChange}
        max={500}
      />
      <div className="auguri-container">
        <h1>Oggi è il tuo compleanno?</h1>
        <div>
          <Link className="option" href={"/auguri"}>
            Si
          </Link>
          <Link className="option" href={"/no-auguri"}>
            No
          </Link>
        </div>
      </div>

      <div
        style={{
          border: `2px solid ${color}`,
          width: `${pieces}px`,
          height: `${pieces}px`,
          transform: `translate(${posX}px, ${posY}px)`,
        }}
      ></div>
    </div>
  );
}
