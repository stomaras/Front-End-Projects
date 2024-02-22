import { useContext } from 'react';
import Button from './UI/Button.tsx';
import { TimersContext, useTimersContext } from './store/timers-context.tsx';

export default function Header() {

  const timersCtx = useTimersContext();



  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={timersCtx.isRunnning ? timersCtx.stopTimers : timersCtx.startTimers}>{timersCtx.isRunnning ? 'Stop':'Start'} Timers</Button>
    </header>
  );
}
