"use client";

import { useEffect } from "react";

// catches a render error anywhere below the root layout so one broken component
// shows this instead of a white screen
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // no logging service wired up, so at least leave a trace in the console
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-accent flex items-center gap-3 font-mono text-sm tracking-wider uppercase">
        <span aria-hidden="true" className="bg-accent h-px w-8 shrink-0" />
        Something broke
      </p>

      <h1 className="text-text mt-5 text-[2.5rem] leading-[1] font-bold sm:text-[3.25rem]">
        That did not load
        <span className="text-accent">.</span>
      </h1>

      <p className="text-muted mt-5 max-w-md text-lg leading-relaxed">
        A part of the page failed to render. Trying again usually clears it.
      </p>

      <button
        type="button"
        onClick={reset}
        className="bg-accent text-contrast hover:bg-accent-deep focus-visible:outline-accent mt-10 rounded-lg px-7 py-4 text-base font-medium shadow-[0_10px_30px_-12px_var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Try again
      </button>
    </main>
  );
}
