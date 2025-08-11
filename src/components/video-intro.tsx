"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  src?: string;
  poster?: string;
  ttlDays?: number; // how long to remember the intro was seen
  onlyOnHome?: boolean;
};

const DONT_SHOW_KEY = "intro:dontShow";

export default function VideoIntro({
  src = "/intro.mp4",
  poster = "/images/hero-fabric.png",
  ttlDays = 7,
  onlyOnHome = true,
}: Props) {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [deferredSkipVisible, setDeferredSkipVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Decide early whether we should show the intro
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect "Reduce Motion"
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setShow(false);
      return;
    }

    // Respect Save-Data
    // @ts-expect-error Optional NetworkInformation
    const saveData = navigator?.connection?.saveData;
    if (saveData) {
      setShow(false);
      return;
    }

    if (onlyOnHome && window.location?.pathname !== "/") {
      setShow(false);
      return;
    }

    // Don't show if user opted out
    const dontShow = localStorage.getItem(DONT_SHOW_KEY) === "true";
    if (dontShow) {
      setShow(false);
      return;
    }

    // If session already saw it, skip (but TTL still applies next time)
    const sessionSeen = sessionStorage.getItem("hasSeenIntro") === "true";
    if (sessionSeen) {
      setShow(false);
      return;
    }

    setShow(true);

    // Show skip after a moment to avoid accidental taps
    const t = window.setTimeout(() => setDeferredSkipVisible(true), 600);
    return () => window.clearTimeout(t);
  }, [onlyOnHome]);

  // Progress updates
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => {
      if (video.duration && Number.isFinite(video.duration)) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };
    const onCanPlay = () => setReady(true);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("canplay", onCanPlay);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("canplay", onCanPlay);
    };
  }, [show]);

  const handleHide = (persist = true) => {
    setFadeOut(true);
    window.setTimeout(() => {
      if (persist) {
        sessionStorage.setItem("hasSeenIntro", "true");
      }
      setShow(false);
    }, 420);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem(DONT_SHOW_KEY, "true");
    handleHide(true);
  };

  // Keyboard shortcuts
  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleHide(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  const bgTo = useMemo(() => "var(--background, #ffffff)", []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-label="Intro"
      aria-modal="true"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => handleHide(true)}
        className="w-full h-full object-cover"
      />

      {/* Brand overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-12">
        <div className="rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-white/90 text-xs">
          Press S or Esc to skip
        </div>
      </div>

      {/* Controls */}
      <div className="absolute right-4 top-4 flex items-center gap-2">
        {deferredSkipVisible && (
          <button
            onClick={() => handleHide(true)}
            className="rounded-md bg-white/60 text-foreground/90 px-3 py-1 text-sm hover:bg-white transition"
          >
            Skip
          </button>
        )}
        <button
          onClick={handleDontShowAgain}
          className="rounded-md bg-white/60 text-foreground/90 px-3 py-1 text-sm hover:bg-white transition"
          title="Don't show again"
        >
          Don’t show again
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-white/10">
        <div
          className="h-full bg-[var(--primary,#0c4377)] transition-[width] duration-200 ease-linear"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>

      {/* End fade to theme background */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(60% 60% at 50% 50%, ${bgTo} 0%, ${bgTo} 35%, rgba(255,255,255,0) 100%)`,
        }}
      />
    </div>
  );
}
