import { useCallback, useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = useCallback(() => {
    intervalRef.current && window.clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <p>HookTimer - {timer}</p>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};
