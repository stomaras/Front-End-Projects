import { useTimersContext } from "./store/timers-context";
import Timer from "./Timer";

export default function Timers() {

  const {timers} = useTimersContext();

  return <ul>
    {timers.map((timer) => {
      return (<li>
        <Timer name={timer.name} duration={timer.duration}/>
      </li>
      )
    })}
  </ul>;
}
