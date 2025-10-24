import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: December 31, 2024, 23:59:59
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="DIAS" />
      <span className="text-3xl font-bold text-primary">:</span>
      <TimeUnit value={timeLeft.hours} label="HORAS" />
      <span className="text-3xl font-bold text-primary">:</span>
      <TimeUnit value={timeLeft.minutes} label="MIN" />
      <span className="text-3xl font-bold text-primary">:</span>
      <TimeUnit value={timeLeft.seconds} label="SEG" />
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-card border-2 border-primary rounded-lg p-4 min-w-[80px] shadow-lg">
      <span className="text-4xl font-bold text-primary">{String(value).padStart(2, "0")}</span>
    </div>
    <span className="text-xs font-semibold text-muted-foreground mt-2">{label}</span>
  </div>
);
