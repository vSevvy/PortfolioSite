"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

const storageKey = "portfolio-cookie-notice-v1";
const changeEvent = "portfolio-cookie-notice-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(storageKey) !== "acknowledged";
  } catch {
    return true;
  }
}

export default function PrivacyNotice() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const [dismissedWithoutStorage, setDismissedWithoutStorage] = useState(false);

  function updateNotice(acknowledged: boolean) {
    setDismissedWithoutStorage(false);
    try {
      if (acknowledged) window.localStorage.setItem(storageKey, "acknowledged");
      else window.localStorage.removeItem(storageKey);
    } catch {
      setDismissedWithoutStorage(acknowledged);
    }
    window.dispatchEvent(new Event(changeEvent));
  }

  return (
    <>
      <footer className="border-t border-border px-6 py-6 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Evan McCullough</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="underline underline-offset-4">Privacy &amp; cookies</Link>
            <button type="button" onClick={() => updateNotice(false)} className="underline underline-offset-4">
              Cookie information
            </button>
          </div>
        </div>
      </footer>
      {visible && !dismissedWithoutStorage && (
        <section aria-labelledby="cookie-notice-title" className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background p-5 shadow-lg md:p-6">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-2">
              <h2 id="cookie-notice-title" className="font-semibold text-primary">Your privacy &amp; cookies</h2>
              <p className="text-sm text-muted-foreground">
                This portfolio does not use analytics or advertising cookies. We use local storage only to remember that you have acknowledged this notice.
                {" "}<Link href="/privacy" className="underline underline-offset-4">Read the privacy and cookie statement</Link>.
              </p>
            </div>
            <button type="button" onClick={() => updateNotice(true)} className="btn-primary shrink-0">Got it</button>
          </div>
        </section>
      )}
    </>
  );
}
