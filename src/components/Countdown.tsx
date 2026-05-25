import { useEffect, useState } from 'react';

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function compute(target: Date): Parts {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, done: false };
}

interface Props {
  /** ISO string com a data de lançamento. */
  target: string;
}

export function Countdown({ target }: Props) {
  const date = new Date(target);
  const [t, setT] = useState<Parts>(() => compute(date));

  useEffect(() => {
    const id = window.setInterval(() => setT(compute(date)), 1000);
    return () => window.clearInterval(id);
  }, [target]); // eslint-disable-line react-hooks/exhaustive-deps

  if (t.done) {
    return (
      <p className="font-display text-2xl font-bold text-white sm:text-3xl">
        🚀 Estamos no ar!
      </p>
    );
  }

  const items: { v: number; l: string }[] = [
    { v: t.days, l: 'dias' },
    { v: t.hours, l: 'horas' },
    { v: t.minutes, l: 'min' },
    { v: t.seconds, l: 'seg' },
  ];

  return (
    <ul className="grid grid-cols-4 gap-3 sm:gap-4">
      {items.map((it) => (
        <li
          key={it.l}
          className="rounded-2xl border border-white/15 bg-white/8 px-2 py-4 text-center backdrop-blur-md sm:px-4 sm:py-5"
        >
          <span className="block font-display text-3xl font-bold leading-none tracking-tight text-white tabular-nums sm:text-5xl">
            {String(it.v).padStart(2, '0')}
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">
            {it.l}
          </span>
        </li>
      ))}
    </ul>
  );
}
