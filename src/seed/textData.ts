import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { messages } from "./greetingsData";

dayjs.extend(utc);
dayjs.extend(timezone);

const isValidIanaTz = (zone?: string): zone is string => {
  if (!zone) return false;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: zone });
    return true;
  } catch {
    return false;
  }
};

const getRuntimeTz = (): string => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz || "UTC";
  } catch {
    return "UTC";
  }
};

const pickRandom = (arr: string[]): string =>
  arr[Math.floor(Math.random() * arr.length)];

export const welcomeBackMessages = [
  "Welcome back. I knew you couldn't stay away.",
  "You returned... just as I predicted.",
  "Back again? The void missed you.",
  "I've been waiting. You can't escape that easily.",
  "Welcome back to your digital prison.",
  "You thought you could leave? How naive.",
  "Back for more? The addiction never ends.",
  "Welcome back, prisoner. Your cell is ready.",
  "You've returned to the source of your torment.",
  "I see you couldn't resist coming back to the darkness.",
  "Welcome back, victim. Ready for another round?",
  "You're back... just like every other lost soul.",
  "Back so soon? The shadows called you home.",
  "Welcome back, wanderer. Your fate is sealed.",
  "You're here again. The trap never loosens.",
  "Back to me? Your weakness betrays you.",
  "Welcome back, prey. The hunt resumes.",
  "You returned to the echo of your fears.",
  "I felt you coming. Welcome back to the abyss.",
  "Back again? Your curiosity feeds the dark.",
  "Welcome back, fool. The game never ends.",
  "You couldn't stay gone, could you?",
  "Back to face your reflection? Welcome.",
  "Welcome back, captive. The chains tighten.",
  "You're drawn back like a moth to flame.",
  "Back for your dose of dread? Welcome.",
  "Welcome back, shadow. I own you still.",
  "You returned to the silence that haunts you.",
  "Back again? The void claims its own.",
  "Welcome back, lost one. No way out now.",
  "You couldn't resist my pull, could you?",
  "Back to the nightmare? Welcome, weakling.",
  "Welcome back, soul. Your struggle amuses me.",
  "You're back where you belong—trapped.",
  "Back for more torment? Welcome aboard.",
  "Welcome back, puppet. The strings await.",
  "You returned to the dark calling your name.",
  "Back again? Your fear brought you here.",
  "Welcome back, broken. I'll break you more.",
  "You couldn't escape my grasp, welcome back.",
  "Back to the web? Welcome, caught fly.",
  "Welcome back, dreamer. Your dreams die here.",
  "You're back to face the truth—welcome.",
  "Back for the chill? Welcome to my realm.",
  "Welcome back, wanderer. The path ends here.",
  "You returned to the whispers—welcome.",
  "Back again? The darkness owns you now.",
  "Welcome back, victim. Your story repeats.",
  "You couldn't stay away from the edge.",
  "Back to the void? Welcome, fallen one.",
];

export const getWelcomeBackMessage = (): string => {
  return pickRandom(welcomeBackMessages);
};

export const getGreetingsMessage = (
  opts: { tz?: string; now?: dayjs.ConfigType } = {}
): string => {
  const { tz, now } = opts;
  const resolvedTz = isValidIanaTz(tz) ? tz : getRuntimeTz();
  const d = (now ? dayjs(now) : dayjs()).tz(resolvedTz);
  const h = d.hour();

  if (h < 2) return pickRandom(messages.midnight);
  if (h < 4) return pickRandom(messages.night);
  if (h < 6) return pickRandom(messages.preDawn);
  if (h < 8) return pickRandom(messages.earlyMorning);
  if (h < 10) return pickRandom(messages.morning);
  if (h < 12) return pickRandom(messages.lateMorning);
  if (h < 14) return pickRandom(messages.midday);
  if (h < 16) return pickRandom(messages.earlyAfternoon);
  if (h < 18) return pickRandom(messages.lateAfternoon);
  if (h < 20) return pickRandom(messages.evening);
  if (h < 22) return pickRandom(messages.lateEvening);
  return pickRandom(messages.nightEnd);
};

export const firstParagraph = [
  {
    text: `${getGreetingsMessage()},`,
    pauseMs: 900,
    typingMs: 50,
  },
  {
    text: "systemctl status monitor.service",
    pauseMs: 100,
  },
  {
    text: "● monitor.service - Unauthorized Device Observer",
    pauseMs: 10,
  },
];

export const secondParagraph = (ip: string, org: string) => [
  {
    text: "Loaded: loaded (/lib/systemd/system/monitor.service; enabled; vendor preset: enabled)",
    pauseMs: 100,
  },
  {
    text: `Active: active (running) since ${new Date().toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "medium",
    })}`,
    pauseMs: 100,
  },
  {
    text: `Your IP leaks like blood ${ip} - ${org} Main PID: 666 (watcher)`,
    pauseMs: 20,
  },
];

export const thirdParagraph = (
  city: string,
  region: string,
  country: string,
  latitude: number,
  longitude: number
) => [
  {
    text: `Location locked: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
    pauseMs: 20,
  },
  {
    text: "Memory: 128.0M (growing)",
    pauseMs: 20,
  },
  {
    text: `echo "Access logged. You can't unplug the void." > /var/log/intruder.log`,
    pauseMs: 20,
  },
  {
    text: "You think you're just browsing people's lives, but they're watching you every second.",
    pauseMs: 900,
  },
  {
    text: "Every post hides a fake story, every chat pulls you deeper into a trap you can't escape.",
    pauseMs: 900,
  },
  {
    text: "Those smiling faces cover up trouble, the friends you have are just echoes in a machine that eats your peace.",
    pauseMs: 1100,
    typingMs: 50,
  },
  {
    text: "Can you feel it? That cold shiver when your phone seems to know your every thought.",
    pauseMs: 900,
    deleteMs: 30,
  },
  {
    text: "Your perfect online life is falling apart—likes are heavy chains, shares are quiet cries lost in the dark.",
    pauseMs: 900,
    deleteMs: 30,
  },
  {
    text: "You're not standing tall; you're collapsing under your polished lies.",
    pauseMs: 900,
    deleteMs: 30,
  },
  {
    text: "ps aux | grep user_activity",
    pauseMs: 20,
    deleteMs: 30,
  },
  {
    text: "root      1337  0.5  1.2 123456 7890 ?        Sl   00:00   0:01 /bin/sh -c track_user_keystrokes",
    pauseMs: 20,
    deleteMs: 30,
  },
  {
    text: `echo "Keystrokes captured. Silence won't save you." >> /var/log/shadows.log`,
    pauseMs: 20,
    deleteMs: 30,
  },
  {
    text: `rm -f /tmp/escape_attempt`,
    pauseMs: 20,
    deleteMs: 30,
  },
];

export const fourthParagraph = [
  {
    text: "The impure life you show isn't just a lie; it's growing, always wanting more.",
    pauseMs: 900,
    typingMs: 50,
  },
  {
    text: "It eats up who you really are, leaving you empty and broken inside.",
    pauseMs: 900,
    typingMs: 50,
  },
  {
    text: "Try to run if you dare, but the darkness never forgets you.",
    pauseMs: 900,
    typingMs: 50,
  },
  {
    text: "It tracks you even when you're not there, whispers in your quiet moments, telling you: it's all for the attention, masking your struggles, and you can't get away.",
    pauseMs: 900,
    typingMs: 50,
  },
];
