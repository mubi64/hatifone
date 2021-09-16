import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timerDay, setTimerDay] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("janvarey 30, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //  stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDay(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="countdown" data-to="2021-12-31">
        <div className="countdown-block countdown-block-days">
          <div className="countdown-wrap">
            <div className="countdown-counter h1" data-counter-days="">
              {timerDay}
            </div>
            <div className="countdown-title">days</div>
          </div>
        </div>
        <div className="countdown-block countdown-block-hours">
          <div className="countdown-wrap">
            <div className="countdown-counter h1" data-counter-hours="">
              {timerHours}
            </div>
            <div className="countdown-title">hours</div>
          </div>
        </div>
        <div className="countdown-block countdown-block-minutes">
          <div className="countdown-wrap">
            <div className="countdown-counter h1" data-counter-minutes="">
              {timerMinutes}
            </div>
            <div className="countdown-title">minutes</div>
          </div>
        </div>
        <div className="countdown-block countdown-block-seconds">
          <div className="countdown-wrap">
            <div className="countdown-counter h1" data-counter-seconds="">
              {timerSeconds}
            </div>
            <div className="countdown-title">seconds</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
