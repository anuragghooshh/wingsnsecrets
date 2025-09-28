import ConsoleLoader from "../components/ConsoleLoader";
import Typewriter from "../components/Typewriter";
import React from "react";
import {
  firstParagraph,
  fourthParagraph,
  secondParagraph,
  thirdParagraph,
} from "../seed/textData";
import { TerminalButton } from "../components/TerminalButton";
import FlipImageDialog from "@/components/FlipImageDialog";

const Homepage = () => {
  const [typingDone, setTypingDone] = React.useState({
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    p5: false,
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

  const className = "text-xs md:text-sm lg:text-base";
  const textClassName = "text-danger-red font-mono";
  const lineClassName = "text-danger-red font-mono";
  const cursor = <span className="h-3 lg:h-4 w-2 block ml-1 bg-danger-red" />;

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
    <div className="p-4 md:p-8 lg:p-10 h-full flex flex-col relative z-20">
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
        />
      )}

      {typingDone.p4 && (
        <Typewriter
          mode="stack" // 👈 key line
          className={`${className} mt-5`}
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
            setTypingDone((prev) => ({ ...prev, p5: true }));
          }}
          startDelay={6000}
        />
      )}

      <FlipImageDialog
        frontSrc="/images/advice.webp"
        backSrc="/images/hint_.webp"
        altFront="Advice"
        altBack="Hint"
        trigger={
          typingDone.p5 ? (
            <TerminalButton
              size="lg"
              className="border-none w-fit text-xs md:text-sm lg:text-base text-danger-red"
              scanlines={false}
              variant="terminal"
              glitch={false}
              title="See more"
            >
              Click here to see more
            </TerminalButton>
          ) : null
        }
      />
    </div>
  );
};

export default Homepage;
