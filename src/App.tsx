import Jamaika from "component/jamaika";
import "./app.css";
import { ReactNode, useState } from "react";
import { MouseEvent } from "react";
import Dice from "component/Dice";

function App() {
  const [Application, setApp] = useState<string>("");

  function changeApp(app: string): void {
    setApp(app);
  }
  switch (Application) {
    case "jamaika":
      return (
        <AppWrapper changeApp={changeApp}>
          <Jamaika />
        </AppWrapper>
      );
    case "dice":
      return (
        <AppWrapper changeApp={changeApp}>
          <DiceWrapper />
        </AppWrapper>
      );
    default:
      return <AppWrapper changeApp={changeApp}></AppWrapper>;
  }
}

function DiceWrapper() {
  const [Second, setSecond] = useState<number | undefined>(undefined);

  function start() {
    setSecond(2);
  }
  function done() {
    setSecond(undefined);
  }

  return (
    <div className="mb-2">
      <Dice seconds={Second} done={done} />
      <button className="button" onClick={start}>
        start
      </button>
    </div>
  );
}

function AppWrapper({
  changeApp,
  children = "利用したいアプリをクリックして下さい",
}: {
  children?: ReactNode;
  changeApp: (app: string) => void;
}): JSX.Element {
  function change(e: MouseEvent<HTMLButtonElement>): void {
    changeApp(e.currentTarget.value);
  }
  return (
    <>
      <div>{children}</div>
      <div>
        <button onClick={change} value={"jamaika"}>
          ジャマイカ
        </button>
        <button onClick={change} value={"dice"}>
          サイコロ
        </button>
      </div>
    </>
  );
}

export default App;
