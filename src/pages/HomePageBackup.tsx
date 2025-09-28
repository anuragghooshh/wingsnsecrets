import ConsoleLoader from "../components/ConsoleLoader";
import Typewriter from "../components/Typewriter";
import React from "react";
import {
  firstParagraph,
  fourthParagraph,
  secondParagraph,
  thirdParagraph,
} from "../seed/textData";

const Homepage = () => {
  const [typingDone, setTypingDone] = React.useState({
    p1: false,
    p2: false,
    p3: false,
    p4: false,
  });

  const [loading, setLoading] = React.useState({
    l1: false,
    l2: false,
    l3: false,
  });

  const [ipAddress, setIpAddress] = React.useState<{
    ip: {
      ip: string;
      city: string;
      region: string;
      country: string;
      latitude: string;
      longitude: string;
      org: string;
    };
    loading: boolean;
  } | null>({
    ip: {
      ip: "",
      city: "",
      region: "",
      country: "",
      latitude: "",
      longitude: "",
      org: "",
    },
    loading: false,
  });

  const className = "text-xs md:text-sm lg:text-base font-medium";
  const textClassName = "text-danger-red font-mono";
  const lineClassName = "text-danger-red font-mono";
  const cursor = <span className="h-3 lg:h-4 w-2 block ml-1 bg-danger-red" />;

  // Post-flow staged effects state
  const [stage, setStage] = React.useState<
    | "idle"
    | "overload"
    | "intrusion"
    | "feedback"
    | "tease"
    | "lockdown"
    | "final"
  >("idle");
  const [ui, setUi] = React.useState({
    freeze: false,
    showErrorBanner: false,
    scrollFlicker: false,
    showPopup: false,
    popupChoice: "",
    dim: false,
    clock: "",
    showClock: false,
    showMapFlash: false,
    shake: false,
    showDarkRoom: false,
    showCrash: false,
    blockNav: false,
  });
  const [postLines, setPostLines] = React.useState<string[]>([]);
  const [typingBuffer, setTypingBuffer] = React.useState("");
  const addLine = (t: string) => setPostLines((p) => [...p, t]);

  // Fast/dev mode to compress long delays
  const isFast = React.useMemo(() => {
    try {
      const url = new URL(window.location.href);
      const sp = url.searchParams;
      if (sp.get("fast") === "1" || sp.get("dev") === "1") return true;
    } catch {
      // ignore URL parse issues
    }
    const meta = import.meta as unknown as { env?: { DEV?: boolean } };
    return meta?.env?.DEV ?? false;
  }, []);
  const S = React.useCallback((ms: number) => (isFast ? Math.max(150, Math.floor(ms * 0.05)) : ms), [isFast]);

  const typeOut = React.useCallback(
    (text: string, speed = (isFast ? 10 : 20)) =>
      new Promise<void>((resolve) => {
        let i = 0;
        setTypingBuffer("");
        const id = setInterval(() => {
          i += 1;
          setTypingBuffer(text.slice(0, i));
          if (i >= text.length) {
            clearInterval(id);
            setPostLines((p) => [...p, text]);
            setTypingBuffer("");
            resolve();
          }
        }, speed);
      }),
    [isFast]
  );

  // Helpers
  const partialIp = React.useMemo(() => {
    const ip = ipAddress?.ip.ip || "192.168.0.1";
    const parts = ip.split(".");
    return `${parts[0] || 192}.${parts[1] || 168}.x.x`;
  }, [ipAddress]);

  // Block back/refresh briefly
  React.useEffect(() => {
    if (!ui.blockNav) return;
    const beforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    const popState = () => {
      history.pushState(null, document.title, window.location.href);
    };
    window.addEventListener("beforeunload", beforeUnload);
    window.addEventListener("popstate", popState);
    history.pushState(null, document.title, window.location.href);
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key.toLowerCase() === "r") || e.key === "F5") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", down, { capture: true });
    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
      window.removeEventListener("popstate", popState);
      window.removeEventListener(
        "keydown",
        down as unknown as EventListenerOrEventListenerObject,
        { capture: true }
      );
    };
  }, [ui.blockNav]);

  // Sequence triggers after typingDone.p4
  React.useEffect(() => {
    if (!typingDone.p4) return;
    setStage("overload");

    // Stage timings relative to p4 completion
    const t: number[] = [];

    // Overload at 45s
    t.push(
      window.setTimeout(async () => {
        await typeOut("Your system strains under my gaze. Prepare for collapse.");
        setUi((u) => ({ ...u, freeze: true }));
        setTimeout(() => setUi((u) => ({ ...u, freeze: false, showErrorBanner: true })), 2000);
        // subtle scroll flicker
        const flicker = () => {
          const y = window.scrollY;
          window.scrollTo({ top: y + 40, behavior: "smooth" });
          setTimeout(() => window.scrollTo({ top: y, behavior: "smooth" }), 350);
        };
        flicker();
      }, S(45_000))
    );

    // Intrusion at 1m15s after overload (75s)
    t.push(
      window.setTimeout(async () => {
        setStage("intrusion");
        await typeOut(`Your IP leaks like blood. I trace it now: ${partialIp}.`);
  addLine(`Scanning: . . <span class="blink-fast">x.x</span>`);
        setUi((u) => ({ ...u, showPopup: true }));
        // Auto close popup after 5s as Denied then append line
        setTimeout(() => {
          setUi((u) => ({ ...u, showPopup: false, popupChoice: "Denied" }));
          typeOut("Too late. I’m inside.");
        }, S(5000));
      }, S(45_000 + 75_000))
    );

    // Feedback at 2m after intrusion (120s)
    t.push(
      window.setTimeout(async () => {
        setStage("feedback");
        const noise = (-30 - Math.floor(Math.random() * 35)).toString();
        await typeOut("Your microphone hums. I hear your breath.");
        await typeOut(`Audio Input: ${noise}dB detected.`);
        setUi((u) => ({ ...u, dim: true }));
        setTimeout(() => setUi((u) => ({ ...u, dim: false })), S(3000));
      }, S(45_000 + 75_000 + 120_000))
    );

    // Tease at 2m45s after feedback (165s)
    t.push(
      window.setTimeout(async () => {
        setStage("tease");
        const now = new Date();
        const nowStr = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
        const distorted = new Date(now.getTime() + 60_000).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
        await typeOut(`Your coordinates whisper: Near a river, ${nowStr}. Anurag Ghosh marks you.`);
        setUi((u) => ({ ...u, clock: nowStr + " IST", showClock: true }));
        setTimeout(() => setUi((u) => ({ ...u, clock: distorted + " IST" })), 1000);
        setTimeout(() => setUi((u) => ({ ...u, showClock: false })), 2200);
        setUi((u) => ({ ...u, showMapFlash: true }));
        setTimeout(() => setUi((u) => ({ ...u, showMapFlash: false })), 500);
      }, S(45_000 + 75_000 + 120_000 + 165_000))
    );

    // Lockdown at 3m30s after tease (210s)
    t.push(
      window.setTimeout(() => {
        setStage("lockdown");
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?~`";
        const start = Date.now();
        const dumpInterval = setInterval(() => {
          if (Date.now() - start > S(3000)) {
            clearInterval(dumpInterval);
            typeOut("System locked. Anurag Ghosh owns you now. Pray the power holds.");
            setUi((u) => ({ ...u, blockNav: true }));
            setTimeout(() => setUi((u) => ({ ...u, blockNav: false })), S(10_000));
            setTimeout(() => {
              typeOut("Released… for now. But I’ll return when you sleep.");
            }, S(10_000));
            return;
          }
          const line = Array.from({ length: 80 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
          setPostLines((p) => [...p, `<span class="garbled">${line}</span>`]);
        }, 60);
      }, S(45_000 + 75_000 + 120_000 + 165_000 + 210_000))
    );

    // Final at 4m after lockdown (240s)
    t.push(
      window.setTimeout(async () => {
        setStage("final");
        setUi((u) => ({ ...u, shake: true }));
        setTimeout(() => setUi((u) => ({ ...u, shake: false })), S(2000));
        await typeOut("Your camera blinks. I see your fear.");
        setUi((u) => ({ ...u, showDarkRoom: true }));
        setTimeout(() => setUi((u) => ({ ...u, showDarkRoom: false })), 300);
        // Faux alert modal
        setUi((u) => ({ ...u, showPopup: true }));
      }, S(45_000 + 75_000 + 120_000 + 165_000 + 210_000 + 240_000))
    );

    return () => t.forEach((id) => clearTimeout(id));
  }, [typingDone.p4, partialIp, typeOut, S]);

  const fetchIpAddress = async () => {
    setIpAddress((prev) =>
      prev
        ? { ...prev, loading: true }
        : {
            ip: {
              ip: "",
              city: "",
              region: "",
              country: "",
              latitude: "",
              longitude: "",
              org: "",
            },
            loading: true,
          }
    );
    try {
      const response = await fetch("https://ipapi.co/json/", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setIpAddress({ ip: data, loading: false });
    } catch (error) {
      console.error("Error fetching IP address:", error);
      setIpAddress({
        ip: {
          ip: error instanceof Error ? error.message : "Failed to fetch IP",
          city: "",
          region: "",
          country: "",
          latitude: "",
          longitude: "",
          org: "",
        },
        loading: false,
      });
    }
  };

  return (
  <div className={`p-4 md:p-8 lg:p-10 h-full flex flex-col relative z-20 ${ui.shake ? "shake-strong" : ""} ${ui.freeze ? "freeze-2s" : ""}`}>
      <Typewriter
        mode="stack" // 👈 key line
        className={className}
        textClassName={textClassName}
        lineClassName={lineClassName}
        cursorClassName="text-cyan-300"
        hideCursorOnComplete={true} // NEW: hide cursor when done
        words={firstParagraph}
        typingSpeed={10}
        pauseBetween={900}
        cursor={cursor}
        cursorBlinkRate={900}
        onLoopComplete={(i) => console.log("Loop", i)}
        loop={false}
        onFinish={() => {
          setTypingDone((prev) => ({ ...prev, p1: true }));
        }}
      />

      {typingDone.p1 && (
        <ConsoleLoader
          variant="dots"
          label="loading"
          className="text-danger-red"
          durationMs={2500}
          onFinish={() => {
            setLoading((prev) => ({ ...prev, l1: true }));
            fetchIpAddress();
          }}
          freezeOnStop={false}
        />
      )}

      {loading.l1 && !ipAddress?.loading && (
        <Typewriter
          mode="stack"
          className={className}
          textClassName={textClassName}
          lineClassName={lineClassName}
          cursorClassName="text-cyan-300"
          hideCursorOnComplete={true}
          words={secondParagraph(
            ipAddress?.ip.ip || "",
            ipAddress?.ip.org || ""
          )}
          typingSpeed={10}
          pauseBetween={900}
          cursor={cursor}
          cursorBlinkRate={900}
          onLoopComplete={(i) => console.log("Loop", i)}
          loop={false}
          onFinish={() => {
            setTypingDone((prev) => ({ ...prev, p2: true }));
          }}
        />
      )}
      {typingDone.p2 && (
        <ConsoleLoader
          variant="spinner"
          label="loading"
          className="text-danger-red"
          durationMs={3000}
          onFinish={() => {
            setLoading((prev) => ({ ...prev, l2: true }));
          }}
          freezeOnStop={false}
        />
      )}

      {loading.l2 && (
        <Typewriter
          mode="stack" // 👈 key line
          className={className}
          textClassName={textClassName}
          lineClassName={lineClassName}
          cursorClassName="text-cyan-300"
          words={thirdParagraph(
            ipAddress?.ip.city || "",
            ipAddress?.ip.region || "",
            ipAddress?.ip.country || "",
            Number(ipAddress?.ip.latitude || 0),
            Number(ipAddress?.ip.longitude || 0)
          )}
          typingSpeed={10}
          pauseBetween={900}
          cursor={cursor}
          cursorBlinkRate={900}
          hideCursorOnComplete={false}
          loop={false}
          onFinish={() => {
            setTypingDone((prev) => ({ ...prev, p3: true }));
          }}
        />
      )}
      {/* window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; */}
      {typingDone.p3 && (
        <Typewriter
          mode="stack" // 👈 key line
          className={className}
          textClassName={textClassName}
          lineClassName={lineClassName}
          cursorClassName="text-cyan-300"
          words={fourthParagraph}
          typingSpeed={30}
          pauseBetween={900}
          cursor={cursor}
          cursorBlinkRate={900}
          onLoopComplete={(i) => console.log("Loop", i)}
          loop={false}
          onFinish={() => {
            setTypingDone((prev) => ({ ...prev, p4: true }));
          }}
          hideCursorOnComplete={false}
        />
      )}

      {typingDone.p4 && (
        <Typewriter
          mode="stack" // 👈 key line
          className={className}
          textClassName={textClassName}
          lineClassName={lineClassName}
          cursorClassName="text-cyan-300"
          words={[
            {
              text: "You thought it was over? I'm still here.",
              pauseMs: 900,
              typingMs: 50,
            },
          ]}
          typingSpeed={30}
          pauseBetween={900}
          cursor={cursor}
          cursorBlinkRate={900}
          onLoopComplete={(i) => console.log("Loop", i)}
          loop={false}
          onFinish={() => {
            setTypingDone((prev) => ({ ...prev, p4: true }));
          }}
          hideCursorOnComplete={false}
          startDelay={6000}
        />
      )}

      {(postLines.length > 0 || typingBuffer) && (
        <div className="mt-4 text-danger-red font-mono text-xs md:text-sm lg:text-base">
          {postLines.map((l, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: l }} />
          ))}
          {typingBuffer && <div>{typingBuffer}</div>}
        </div>
      )}

      {ui.showErrorBanner && (
        <div className="error-banner">CPU Usage: 99% – Critical Error #404: Entity Detected.</div>
      )}

      {ui.dim && <div className="dim-overlay" />}

      {ui.showClock && <div className="clock-overlay">{ui.clock}</div>}

      {ui.showMapFlash && <div className="map-flash" />}

      {ui.showDarkRoom && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80">
          <img src="/images/dark-room.svg" alt="dark room" className="w-[70vw] max-w-[700px] opacity-90" />
        </div>
      )}

      {/* Popup modal */}
      {ui.showPopup && stage !== "final" && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">Network Activity</div>
            <div className="modal-body">Unauthorized Connection Attempt – Allow/Deny?</div>
            <div className="modal-footer">
              <button className="btn">Allow</button>
              <button className="btn danger">Deny</button>
            </div>
          </div>
        </div>
      )}

      {/* Final faux alert */}
      {ui.showPopup && stage === "final" && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">Critical Update Required</div>
            <div className="modal-body">Click OK to survive.</div>
            <div className="modal-footer">
              <button
                className="btn primary"
                onClick={() => {
                  setUi((u) => ({ ...u, showPopup: false }));
                  window.location.reload();
                }}
              >OK</button>
            </div>
          </div>
        </div>
      )}

      {/* Crash screen if ignored for 10s */}
      {stage === "final" && ui.showPopup && (
        <FinalCrashWatcher
          timeoutMs={S(10_000)}
          onTimeout={() => setUi((u) => ({ ...u, showPopup: false, showCrash: true }))}
        />
      )}

      {ui.showCrash && (
        <div className="crash-screen">System Failure. Entity Persists.</div>
      )}
    </div>
  );
};

// A helper component to trigger a timeout when mounted
const FinalCrashWatcher: React.FC<{ onTimeout: () => void; timeoutMs?: number }> = ({ onTimeout, timeoutMs }) => {
  React.useEffect(() => {
    const id = setTimeout(() => onTimeout(), timeoutMs ?? 10_000);
    return () => clearTimeout(id);
  }, [onTimeout, timeoutMs]);
  return null;
};

export default Homepage;
