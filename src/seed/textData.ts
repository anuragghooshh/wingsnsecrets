import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { messages } from "./greetingsData";

// Data
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
  "You're back where you belong,trapped.",
  "Back for more torment? Welcome aboard.",
  "Welcome back, puppet. The strings await.",
  "You returned to the dark calling your name.",
  "Back again? Your fear brought you here.",
  "Welcome back, broken. I'll break you more.",
  "You couldn't escape my grasp, welcome back.",
  "Back to the web? Welcome, caught fly.",
  "Welcome back, dreamer. Your dreams die here.",
  "You're back to face the truth,welcome.",
  "Back for the chill? Welcome to my realm.",
  "Welcome back, wanderer. The path ends here.",
  "You returned to the whispers,welcome.",
  "Back again? The darkness owns you now.",
  "Welcome back, victim. Your story repeats.",
  "You couldn't stay away from the edge.",
  "Back to the void? Welcome, fallen one.",
];

export const secondParagraphVariants = (ip: string, org: string) => {
  return {
    activeSince: [
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
      `Active: active (running) since ${new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "medium",
      })}`,
    ],
    ipLeak: [
      `Your IP leaks like blood ${ip} - ${org} Main PID: 666 (watcher)`,
      `Your IP bleeds out here ${ip} - ${org} Main PID: 666 (watcher)`,
      `IP exposed: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `You're wide open: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `This is leaking: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Trace found: ${ip} - ${org}; Main PID: 666 (watcher)`,
      `Blood from a vein: ${ip} - ${org} , PID 666 (watcher)`,
      `IP: ${ip} , Org: ${org} , Main PID: 666 (watcher)`,
      `Silent leak: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Exposed endpoint: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Your address spills: ${ip} (${org}). Main PID: 666 (watcher)`,
      `Open wound: ${ip} - ${org}, Main PID: 666 (watcher)`,
      `We see ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Record: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Detected: ${ip} - ${org} , Main PID: 666 (watcher)`,
      `Found: ${ip} - ${org} , Main PID: 666 (watcher)`,
      `Address: ${ip} | Org: ${org} | PID: 666 (watcher)`,
      `Leak: ${ip} (${org}) , Main PID: 666 (watcher)`,
      `We pulled ${ip} (${org}). Main PID: 666 (watcher)`,
      `Your IP is bleeding: ${ip} - ${org}. PID 666 (watcher)`,
      `Open socket: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Public: ${ip} , ${org}. Main PID: 666 (watcher)`,
      `Trace: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Recorded: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Exposure: ${ip} (${org}) , PID 666 (watcher)`,
      `Network leak: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Address found: ${ip} / ${org} , PID 666 (watcher)`,
      `Signature: ${ip} - ${org}. Main PID: 666 (watcher)`,
      `Endpoint visible: ${ip} (${org}) , PID 666 (watcher)`,
    ],
  };
};

export const thirdParagraphVariants = (
  city: string,
  region: string,
  country: string,
  latitude: number,
  longitude: number
) => {
  return {
    locationLocked: [
      `Location locked: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Coordinates fixed: ${latitude}, ${longitude} , ${city}, ${region}, ${country}`,
      `Pin dropped: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Position: ${city}, ${region}, ${country} (${latitude}, ${longitude}) locked`,
      `We have you: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `You've been located: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Found: ${city}, ${region}, ${country} at ${latitude}, ${longitude}`,
      `Marked: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Logged position,${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Geo: ${city}, ${region}, ${country} (${latitude}, ${longitude}) locked`,
      `Coordinates captured: ${latitude}, ${longitude} , ${city}`,
      `Site: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `You are here: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Active lock: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Location anchor set: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Tracking point: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Place recorded: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
      `Locale: ${city}, ${region}, ${country} (${latitude}, ${longitude}) , locked`,
      `Geo locked: ${city} (${latitude}, ${longitude}), ${region}, ${country}`,
      `Marked location: ${city}, ${region}, ${country} (${latitude}, ${longitude})`,
    ],
    memory: [
      "Memory: 128.0M (growing)",
      "Memory usage: 128.0M (expanding)",
      "RAM: 128.0M , ramping",
      "Memory: ~128.0M (increasing)",
      "Allocated memory: 128.0M (growing)",
      "Heap: 128.0M (growing)",
      "Resident memory: 128.0M (growing)",
      "Memory footprint: 128.0M (in flux)",
      "Memory: 128M and climbing",
      "Memory: 128.0M (rising)",
      "Memory: ~128M (growing)",
      "Memory: 128.0M (creeping up)",
      "Memory: 128.0M (burgeoning)",
      "Memory: 128.0M (slowly swelling)",
      "Memory: 128.0M (creeping)",
      "Memory: 128.0M (not stopping)",
      "Memory reserve: 128.0M (growing)",
      "Memory: 128M (quietly growing)",
      "Memory: 128.0M (expanding)",
      "Memory: 128.0M (incrementing)",
    ],
    accessLogEcho: [
      `echo "Access logged. You can't unplug the void." > /var/log/intruder.log`,
      `echo "Access recorded. There is no unplugging." > /var/log/intruder.log`,
      `echo "Entry noted. The void remains attached." > /var/log/intruder.log`,
      `echo "Your access has been logged. The quiet won't help." > /var/log/intruder.log`,
      `echo "Access logged. Silence won't eject you." > /var/log/intruder.log`,
      `echo "Access logged. There is no off switch." > /var/log/intruder.log`,
      `echo "Logged: access , unplugging won't help." > /var/log/intruder.log`,
      `echo "Access captured. You remain tied to the feed." > /var/log/intruder.log`,
      `echo "Access saved. The void keeps a tab." > /var/log/intruder.log`,
      `echo "Access logged. You can't pull the plug on this." > /var/log/intruder.log`,
      `echo "Access logged. The socket's still live." > /var/log/intruder.log`,
      `echo "Access logged. The silence is a lie." > /var/log/intruder.log`,
      `echo "Access logged. There is no unplugging the noise." > /var/log/intruder.log`,
      `echo "Access logged. You'll feel it even when you close your eyes." > /var/log/intruder.log`,
      `echo "Access logged. The void remembers." > /var/log/intruder.log`,
      `echo "Access logged. Grasping the plug won't end it." > /var/log/intruder.log`,
      `echo "Access logged. The void has your signature." > /var/log/intruder.log`,
      `echo "Access logged. You stay threaded to the noise." > /var/log/intruder.log`,
      `echo "Access logged. There's no clean break." > /var/log/intruder.log`,
      `echo "Access logged. The feed keeps a record." > /var/log/intruder.log`,
      `echo "Access logged. You can't unplug the feeling." > /var/log/intruder.log`,
    ],
    browsingLine1: [
      "You think you're just browsing people's lives, but they're watching you every second.",
      "You scroll at will, yet someone watches you at every pause.",
      "You press next like it's safe , strangers mark your hesitations.",
      "You skim lives thinking it's harmless; the eyes record what you skip.",
      "You think it's innocent surfing , but someone reads your pauses.",
      "You browse others and forget you're a subject in another feed.",
      "You watch them; don't forget they're watching you back.",
      "When you scroll, tiny watchers mark every hesitation.",
      "You call it browsing; the machine calls it observation.",
      "You swap profiles while a watcher catalogs your heartbeat.",
      "You think it's casual; it's catalogued and stored.",
      "You click their lives and leave your prints on their ledgers.",
      "You browse for comfort; someone else logs your appetite.",
      "You think it's voyeurism; it's mutual surveillance.",
      "You skim 'til late; someone else counts each blink.",
      "You browse and believe in anonymity , that belief is fading.",
      "You think it's harmless; the watchers disagree.",
      "You scroll while distant eyes trace your rhythm.",
      "You flip through lives while someone flips through you.",
      "You think it's private; it's a mirrored stage.",
      "You think it's a look , someone else is taking notes.",
      "You scroll for escape; the net draws a map of you.",
      "You roam profiles, unaware of the cameras on your own face.",
      "You browse without thought; each move is a recorded signature.",
      "You drift through feeds; someone else anchors your presence.",
    ],
    browsingLine2: [
      "Every post hides a fake story, every chat pulls you deeper into a trap you can't escape.",
      "Each post dresses a lie; each reply tugs you closer to the snare.",
      "Every share is a lure; every message nudges you inward.",
      "Under each highlight there's a script; the chats are the actors' cues.",
      "Posts braid fiction; chats tighten the cord around you.",
      "Every story is edited, every chat a thread pulling tighter.",
      "Posts promise truth but deliver hooks; chats lead you along them.",
      "Every update is a mask, every DM a soft nudge into the dark.",
      "Feeds whisper false homes; conversations steer you toward them.",
      "Every like is bait; every comment is a step deeper.",
      "Posts are traps dressed as truth; chats are the trapdoors.",
      "Every headline spins a tale; every reply reels you in.",
      "The feed sells safety while it builds your confinement.",
      "Every post is a small deceit; each chat is another shackle.",
      "Post by post, chat by chat , you're guided into their net.",
      "Stories fabricate, chats cement your place under the light.",
      "Every post is a curated lie; every chat cements the narrative.",
      "Every post plants a seed of doubt; every chat waters it.",
      "Posts conceal; chats ensnare.",
      "Each post is a mask; each chat is the hand that fits it.",
      "The feed fabricates; the conversation locks it in.",
      "Every post is half-true; every chat completes the lie.",
      "Posts pull your story apart; chats reassemble it into something else.",
      "Every post is staged; every chat invites you into the stage.",
      "You read a lie and respond , the lie grows with you.",
    ],
    facesLine: [
      "Those smiling faces cover up trouble, the friends you have are just echoes in a machine that eats your peace.",
      "Smiles hide fractures; friendships get flattened into echoes that hollow you.",
      "Their smiles are screens; your friends are echoes fed into a hungry device.",
      "Behind every cheerful frame there's a shade that swallows peace.",
      "Those grin-filled squares are a wall , every friend inside is an echo.",
      "Smiling avatars mask unrest; the platform eats the quiet you traded.",
      "The smiles are wallpaper; your real edges get erased elsewhere.",
      "Faces beam in pixels while the real things rot at the edges.",
      "They smile and the silence between you grows deeper.",
      "Smiles are the currency; your calm is the cost.",
      "What looks like friendship is often only an echo in a loud room.",
      "Those happy letters and faces strip your peace into data.",
      "Smiles hide the cracks you don't want to admit to yourself.",
      "Faces laugh on screen while the ache widens under your ribs.",
      "They smile; the machine records and eats the rest of you.",
      "The happy snapshots keep your doubts in the dark.",
      "Smiling faces are thin masks over messy lives.",
      "Friends become echoes , familiar but hollow at the center.",
      "Their smiles feel friendly until you realize they're curated.",
      "Those smiling squares steal the texture from real closeness.",
      "Faces beam; your quiet gets mined into noise.",
      "They smile and your peace is counted as another metric.",
      "The smiles are loud; your truth becomes quieter.",
      "Friends' faces blur into echoes that keep you restless.",
      "Those smiles tune out the part of you that needs help.",
    ],
    canYouFeelIt: [
      "Can you feel it? That cold shiver when your phone seems to know your every thought.",
      "Do you feel that prickle , the phone reading your silence like a book?",
      "Do you feel the chill when your device answers before you ask?",
      "Feel that small cold? It's the device finishing your sentences.",
      "You know that shiver , when the screen guesses your next move?",
      "That creeping chill when suggestions fit too well , you feel it, right?",
      "A tiny shiver runs up your spine when your phone is almost psychic.",
      "That uncanny chill , your device echoing thoughts you hadn't typed.",
      "You feel it: a cold recognition when your feed predicts you.",
      "When your phone seems to think for you, do you feel the chill?",
      "That cold nudge in the gut when the app knows you better than you do.",
      "You sense it , the small freeze when the screen preempts you.",
      "That shiver of being read, even when you haven't spoken.",
      "That prickly whisper of being known by a screen.",
      "A cold little shock when the device seems to be inside your head.",
      "You feel the chill; your phone knows the answer before you do.",
      "That shiver when predictions feel too intimate to be accidental.",
      "You notice it: the device echoing your private thought like gossip.",
      "That cold awareness , your device learning you too well.",
      "That shudder when the app calls what you were thinking.",
      "You feel it: the phone preempting your hush.",
      "A cold brush when the screen mirrors your inner voice.",
      "When the device finishes your sentence, you feel the freeze.",
      "That small dread when suggestions know the path in your mind.",
      "You feel a chill; the phone's gaze follows your thoughts.",
    ],
    perfectLife: [
      "Your perfect online life is falling apart; you keep running from the mess of reality, chasing comfort in strangers' eyes.",
      "The curated life cracks; you flee real pain for likes that weigh you down, shares that echo false warmth.",
      "That polished feed is a brittle shell; you hide in it to escape the noise inside your own head.",
      "Your glossy timeline unravels; you run to it when life feels too heavy, but reactions clank like chains.",
      "The 'perfect' posts tighten a net; you run there for attention when the silence gets unbearable.",
      "Likes stack on you like stones; you hide beneath them, mistaking them for comfort.",
      "Your perfect profile is a paper mask; you retreat behind it to avoid the sting of reality.",
      "The curated glow is flaking; you keep repainting it to forget how dark it feels outside the screen.",
      "You wear perfection online and hide behind it, pretending the likes can replace real closeness.",
      "Your highlight reel is fraying; you run to it again, seeking warmth that never reaches your skin.",
      "Likes decorate a cage; you built it to escape the noise of living, but now you can't breathe inside it.",
      "Your online perfection is a script; you recite it to drown out the ache that no one claps for.",
      "Likes patter like rain on a thin roof; you listen for comfort, but reality still leaks through.",
      "Your online life looks fine until the weight of attention bends it and you keep hiding there anyway.",
      "Perfection online is a costume; you wear it to flee your reflection, hoping applause can quiet it.",
      "That shiny life is a brittle thing; you keep polishing it to avoid facing the cracks underneath.",
      "Your curated self trembles under the weight of likes; you post again to escape the stillness that follows.",
      "The perfect feed hides the fracture lines; you scroll faster to forget how lonely you've become.",
      "Likes seem kind until they become bars; you built them while running from the rawness of being real.",
      "Your spotless profile is just louder noise; you use it to drown out the truths you can't sit with.",
      "Likes round the edges off what is real; you smooth them to avoid the sting of your own thoughts.",
      "The 'perfect' life is a stage; you run there because the real world stopped applauding.",
      "Each like is a tiny anchor; you drift there seeking safety from a life you no longer feel part of.",
      "Your shared life keeps you visible and you keep escaping into it because real closeness hurts.",
      "The perfect image masks the hollow; you run there again, trying to fill what real life won't touch.",
    ],

    collapsingLine: [
      "You're not standing tall; you're collapsing under your polished lies.",
      "You appear upright but you're bending under the weight of the façade.",
      "You look steady while the gloss chips away and you cave in.",
      "You stand on paper legs , every lie chips the support.",
      "You hold a pose while the ground under you softens.",
      "From the outside you stand; on the inside you're crumpling.",
      "You're propped up by pixels and it's starting to fail.",
      "You wear confidence, but the seams are pulling.",
      "You look tall online; real life is sagging beneath the pose.",
      "You're propped by likes; when they fade, you sag.",
      "You're upright for the camera, collapsing privately.",
      "You carry the image and it carries you to the ground.",
      "You stand against the picture while the truth pulls you down.",
      "You hold a smile while the inner frame buckles.",
      "You pose tall as the inner scaffolding gives way.",
      "You're balanced on curated props that are unsteady.",
      "Externally fine, internally fraying.",
      "You're upright in the photo; behind it you're folding.",
      "You look composed; the truth is cracking you open.",
      "You keep standing only because the feed tells you to.",
      "You're not solid , you're held by the attention you get.",
      "You hold a straight back for strangers while your core bends.",
      "You keep smiling while your insides cave inch by inch.",
      "You seem steady even as the ground shifts beneath you.",
    ],
    keystrokesEcho: [
      `echo "Keystrokes captured. Silence won't save you." >> /var/log/shadows.log`,
      `echo "Keys logged. Quiet won't hide you." >> /var/log/shadows.log`,
      `echo "Keystrokes recorded. Hiding won't help." >> /var/log/shadows.log`,
      `echo "Input captured. Silence doesn't erase it." >> /var/log/shadows.log`,
      `echo "Keystrokes captured. The log keeps your trace." >> /var/log/shadows.log`,
      `echo "Typing recorded. Silence won't save you." >> /var/log/shadows.log`,
      `echo "Keystrokes saved. Quiet won't help." >> /var/log/shadows.log`,
      `echo "Keys captured. The log remembers." >> /var/log/shadows.log`,
      `echo "Input logged. No silence erases it." >> /var/log/shadows.log`,
      `echo "Keystrokes stored. Hiding is illusion." >> /var/log/shadows.log`,
      `echo "Keystrokes captured. We keep the proof." >> /var/log/shadows.log`,
      `echo "Typing captured. Your hush doesn't vanish it." >> /var/log/shadows.log`,
      `echo "Keystrokes captured. There is no safe silence." >> /var/log/shadows.log`,
      `echo "Keys logged. The quiet is a thin veil." >> /var/log/shadows.log`,
      `echo "Keystrokes saved. Silence isn't a shield." >> /var/log/shadows.log`,
      `echo "Keystrokes captured. Your silence is recorded too." >> /var/log/shadows.log`,
      `echo "Keystrokes captured. You remain traceable." >> /var/log/shadows.log`,
      `echo "Keystrokes recorded. The log won't forget." >> /var/log/shadows.log`,
      `echo "Typing logged. Quiet won't scrub history." >> /var/log/shadows.log`,
      `echo "Keystrokes captured. Nothing vanishes." >> /var/log/shadows.log`,
      `echo "Keystrokes captured. Silence is not protection." >> /var/log/shadows.log`,
    ],
  };
};

export const fourthParagraphVariants = {
  line1: [
    "The impure life you show isn't just a lie; it's growing, always wanting more.",
    "The version of you you post eats little pieces of who you are.",
    "The persona online keeps asking for more until it consumes the real you.",
    "The glossy life you sell expands until it leaves you hollow.",
    "Your staged life demands more attention and slowly takes the rest of you.",
    "That curated self keeps growing like an appetite that never fills.",
    "The image you feed the world eats at your inside, growing hungry.",
    "The persona wants more applause and takes pieces to feed itself.",
    "The 'impure' life you present swells and asks for more of your hours.",
    "What you show feeds itself and keeps asking for another part of you.",
    "The image you maintain grows and grows until you feel smaller.",
    "Each shared fragment feeds a hunger that never sates itself.",
    "The life on display multiplies, hollowing out what's left of you.",
    "The mask you wear keeps demanding new parts of your truth.",
    "The fake life grows like a debt you can't repay.",
    "The public self wants more and slowly vacuums your inside.",
    "What you project becomes a living thing that keeps eating.",
    "The curated persona is alive and always asking for more offerings.",
    "The polished life is a parasite , it grows and takes.",
    "The version of you online expands until it leaves nothing real.",
    "The staged life feeds and multiplies while you shrink back.",
    "The image you sell becomes monstrous, hungry for more.",
    "That false life keeps growing, requiring pieces of you.",
    "Your broadcasted self is insatiable and quietly eroding the real.",
    "The impure life grows like a shadow that swallows light.",
  ],
  line2: [
    "It eats up who you really are, leaving you empty and broken inside.",
    "It gnaws at your edges until there's little left that feels like you.",
    "Piece by piece, it strips away the quiet center of who you are.",
    "It consumes your private pieces until you feel hollow.",
    "What remains after the show is a smaller, cracked version of you.",
    "It chews through your realness and leaves a brittle shell.",
    "The more you perform, the less of you is left standing inside.",
    "It erases small truths until you're a brittle outline.",
    "It hollows you out until the echo is all that answers.",
    "Your core gets eaten slowly until you barely recognize yourself.",
    "It pulls your insides into the light and leaves them raw.",
    "It trims away the messy parts that made you whole.",
    "Eventually, the show devours the person who started it.",
    "It strips the layers that kept your heart private.",
    "It takes your substance and leaves the painted finish.",
    "It leaves an empty shell wearing your smile.",
    "It feeds until there is a fragile, broken remainder.",
    "It eats the real you and leaves behind a hollow actor.",
    "It strips you down to a husk and calls it a profile.",
    "It consumes your quiet and trades it for hollow applause.",
    "It chews through authenticity until only simulation remains.",
    "It turns your inside into something thin and fragile.",
    "It eats the depth until only a shallow surface remains.",
    "It leaves you cracked and quieter than before.",
  ],
  line3: [
    "Try to run if you dare, but the darkness never forgets you.",
    "You can try to escape, yet the shadows keep a tab.",
    "Run if you must; the quiet will still know your name.",
    "Try to step away , the silence keeps pulling you back.",
    "You think leaving helps, but the trace remains in the dark.",
    "Even absence is noticed; the darkness keeps your file.",
    "You attempt to vanish; the shadow holds the receipt.",
    "You can hide for a while; the darkness keeps score.",
    "Try to unplug; the memory follows the cable back to you.",
    "Even when you run, the dark remembers the paths you took.",
    "You flee and the echo stays behind like a name on a wall.",
    "You can leave the stage; the archive still plays your scene.",
    "Run if you have to; the darkness won't let go of the thread.",
    "Even in fleeing, the machine maps your steps.",
    "Try to step off the grid; something still marks the place you stood.",
    "You may escape view, but the echo of you stays coded.",
    "Leave if you want; the log keeps your shadow on file.",
    "You run and the darkness simply waits in your old room.",
    "Try to disappear; the record keeps a copy of your exit.",
    "You can run, but the trace will follow where you walked.",
    "Try to get away; the dark keeps every small footprint.",
    "Run and the silence will still mention your name.",
    "You may try to flee; the dark archives your path.",
    "Run if you dare , the dark keeps all the tickets.",
    "Even if you run, the darkness files another note about you.",
  ],
  line4: [
    "It tracks you even when you're not there, whispers in your quiet moments, telling you: it's all for the attention, masking your struggles, and you can't get away.",
    "It follows when you're absent and nudges you with quiet reminders that it's all performance.",
    "Even when you sleep, it keeps notes and hums that your life is for the audience.",
    "It leaves soft calls in empty rooms , reminding you this was for attention, not solace.",
    "You hear its whisper in stillness: your pain made palatable for views.",
    "It hums softly in your quiet; a voice saying your struggles are content.",
    "It catalogs your silence and calls it material for eyes.",
    "Even in solitude it speaks: 'this is for the crowd, keep the show.'",
    "It keeps a running commentary in your quiet moments, shaping you to perform.",
    "When it's quiet, the device whispers that everything is for display.",
    "It leaves traces in the hush, to remind you why you curated your pain.",
    "It murmurs in stillness that your hardest pieces are content fodder.",
    "You feel a small nudging in private , it wants your struggle as spectacle.",
    "It shapes your silence into lines for an invisible audience.",
    "Even away from the screen, the machine rewrites your quiet into a show.",
    "It follows the gaps and turns private cracks into shareable pieces.",
    "It tracks, whispers, and convinces you the stage is all that matters.",
    "In empty hours it keeps a soft tally and asks for more.",
    "It sounds in your quiet, telling you your pain is marketable.",
    "It lingers in the hush, whispering that your life is its content.",
    "It catalogs the private and converts it into something for likes.",
    "It quietly reminds you the purpose was always attention, not healing.",
    "It follows your silence and repackages it for the crowd.",
    "It whispers in your alone times: 'share more, it keeps us fed.'",
    "It tracks your empty rooms and calls them scenes for the audience.",
  ],
};

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
    text: pickRandom(secondParagraphVariants(ip, org).activeSince),
    pauseMs: 100,
  },
  {
    text: pickRandom(secondParagraphVariants(ip, org).ipLeak),
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
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .locationLocked
    ),
    pauseMs: 20,
  },
  {
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude).memory
    ),
    pauseMs: 20,
  },
  {
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .accessLogEcho
    ),
    pauseMs: 20,
  },
  {
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .browsingLine1
    ),
    pauseMs: 900,
  },
  {
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .browsingLine2
    ),
    pauseMs: 900,
  },
  {
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .facesLine
    ),
    pauseMs: 1100,
    typingMs: 50,
  },
  {
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .canYouFeelIt
    ),
    pauseMs: 900,
    deleteMs: 30,
  },
  {
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .perfectLife
    ),
    pauseMs: 900,
    deleteMs: 30,
  },
  {
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .collapsingLine
    ),
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
    text: pickRandom(
      thirdParagraphVariants(city, region, country, latitude, longitude)
        .keystrokesEcho
    ),
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
    text: pickRandom(fourthParagraphVariants.line1),
    pauseMs: 900,
    typingMs: 50,
  },
  {
    text: pickRandom(fourthParagraphVariants.line2),
    pauseMs: 900,
    typingMs: 50,
  },
  {
    text: pickRandom(fourthParagraphVariants.line3),
    pauseMs: 900,
    typingMs: 50,
  },
  {
    text: pickRandom(fourthParagraphVariants.line4),
    pauseMs: 900,
    typingMs: 50,
  },
];
