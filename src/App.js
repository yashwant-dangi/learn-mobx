import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class Timer {
  secondPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

const myTimer = new Timer();

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.

const TimerView = observer(({ timer }) => {
  console.log("🚀 ~ file: App.js ~ line 23 ~ TimerView ~ timer", timer);
  return <span> Seconds passed: {timer.secondsPassed}</span>;
});

setInterval(() => {
  myTimer.increaseTimer();
}, 1000);

function App() {
  return (
    <>
      <h1>hey mobx</h1>
      <TimerView timer={myTimer}></TimerView>
    </>
  );
}

export default App;
