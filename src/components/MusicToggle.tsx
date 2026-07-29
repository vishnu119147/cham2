import { useEffect, useRef, useState } from 'react';
import { Music2, Music2 as Mute } from 'lucide-react';

const MELODY_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export function MusicToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fallbackRef = useRef<{ stop: () => void } | null>(null);

  const createAudio = () => {
    const audio = new Audio(MELODY_URL);
    audio.loop = true;
    audio.volume = 0.16;
    audio.preload = 'auto';
    audioRef.current = audio;
    return audio;
  };

  const stopFallback = () => {
    fallbackRef.current?.stop();
    fallbackRef.current = null;
  };

  const startFallback = () => {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new Ctx();
    const master = ctx.createGain();
    master.gain.setValueAtTime(0, ctx.currentTime);
    master.connect(ctx.destination);
    master.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 0.4);

    const freqs = [130.81, 196.0, 261.63, 329.63, 392.0];
    const oscs = freqs.map((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 === 0 ? 'sine' : 'triangle';
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.18 / freqs.length;
      o.connect(g).connect(master);
      o.start();
      return o;
    });

    fallbackRef.current = {
      stop: () => {
        master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
        setTimeout(() => {
          oscs.forEach((o) => {
            try {
              o.stop();
            } catch {
              /* already stopped */
            }
          });
          ctx.close().catch(() => {});
        }, 900);
      },
    };
  };

  const toggle = () => {
    if (on) {
      audioRef.current?.pause();
      stopFallback();
      setOn(false);
      return;
    }

    const audio = audioRef.current ?? createAudio();
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          stopFallback();
          setOn(true);
        })
        .catch(() => {
          startFallback();
          setOn(true);
        });
    } else {
      stopFallback();
      setOn(true);
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
      stopFallback();
    };
  }, []);

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? 'Pause melody' : 'Play melody'}
      className="group flex items-center gap-2 rounded-full border border-roseblush-300/50 bg-cream-50/80 px-4 py-2 text-sm font-medium text-ink-800 shadow-sm backdrop-blur transition-all hover:scale-105 hover:border-roseblush-400 hover:bg-cream-100"
    >
      {on ? (
        <Music2 className="h-4 w-4 text-roseblush-600 animate-soft-pulse" />
      ) : (
        <Mute className="h-4 w-4 text-ink-700/60" />
      )}
      <span className="hidden sm:inline">{on ? 'Music on' : 'Play music'}</span>
    </button>
  );
}
