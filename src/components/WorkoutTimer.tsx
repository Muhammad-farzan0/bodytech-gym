"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Plus, Minus } from "lucide-react";

const PRESETS = [30, 60, 90, 120];

export default function WorkoutTimer() {
  const [duration, setDuration] = useState(60);
  const [remaining, setRemaining] = useState(60);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            setRunning(false);
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const progress = remaining / duration;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const circumference = 2 * Math.PI * 54;

  function setNewDuration(sec: number) {
    setDuration(sec);
    setRemaining(sec);
    setRunning(false);
  }

  function adjust(delta: number) {
    const next = Math.max(10, duration + delta);
    setNewDuration(next);
  }

  return (
    <div className="panel mx-auto max-w-sm p-8 text-center">
      <span className="eyebrow">Rest Timer</span>
      <h3 className="mt-2 text-2xl text-paper">Between-Set Countdown</h3>

      <div className="relative mx-auto mt-8 h-40 w-40">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="currentColor"
            className="text-line/25"
            strokeWidth="8"
          />
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="url(#timerGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset: circumference * (1 - progress) }}
            transition={{ duration: 0.4, ease: "linear" }}
          />
          <defs>
            <linearGradient id="timerGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8FDA1E" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-3xl text-paper">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => adjust(-10)}
          aria-label="Decrease 10 seconds"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-line/50 text-muted hover:border-coral hover:text-coral"
        >
          <Minus size={16} />
        </button>
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          aria-label={running ? "Pause timer" : "Start timer"}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-aurora-gradient text-canvas"
        >
          {running ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        </button>
        <button
          type="button"
          onClick={() => setNewDuration(duration)}
          aria-label="Reset timer"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-line/50 text-muted hover:border-coral hover:text-coral"
        >
          <RotateCcw size={16} />
        </button>
        <button
          type="button"
          onClick={() => adjust(10)}
          aria-label="Increase 10 seconds"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-line/50 text-muted hover:border-coral hover:text-coral"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setNewDuration(p)}
            className={`rounded-sm border px-3 py-1.5 font-mono text-xs transition-colors ${
              duration === p
                ? "border-coral text-coral"
                : "border-line/40 text-muted hover:border-line"
            }`}
          >
            {p}s
          </button>
        ))}
      </div>
    </div>
  );
}
