// src/pages/About.jsx
import portrait from "../assets/portrait.jpg"; // <-- put her photo here

const bio = `
First of all... I'm a fucking delight, ok? Second... Welcome to my little corner of hell. I'm legally required to warn you of 3 things before we proceed:
1. A sense of humor is required to be here. The darker, the better.
2. Unlike my twin sis Tinkerbell, I am absolutely not at all the image of glitter and fuckin cupcake rainbows and shit.
3. Spoiler alert...I tend to swear...like, a lot. I'm NSFW AF. Moving on...

I'm a Demonolatress, High Priestess & Black Magick Witch-Bitch. I've been blessed by Lucifer himself (yes, that actually really did happen "IRL") which makes me a lethal spiritual weapon. *karate kicks into the air* No it doesn't. But it does make the magickal fuck shit I do not just "work", but work faster because it's hella powerful. Way faster than Sister "love, light and all things white" from around the corner. Or TikTok. Or whatever. *looks around* I don't see any other spell casting, ritual holding, witches who've been blessed by Lucifer around here, do you...hmm?

I've been slingin' black magick spells since I was 14 and summoning goetia demons in rituals since 2017. I specialize in all things related to love & matters of the heart. A skilled bad bitch when it comes to performing love spells and rituals, particularly in bringing back ex's, making someone love you, make them communicate with you, become obsessed with you, ignite a more passionate spicy time, etc...etc. You get it.

But wait! There's MORE!

I don't just stop there (that's what he said) I also throw hexes, curses, I'll even fuck up somebody's life so hard their great grandchildren will feel that shit. If someone has done you wrong, I'll make it right. BET.

"Suffice it to say" ;) I do everything that other witches & spell casters can't or won't do. Why? As previously stated... because sometimes you gotta spiritually assault a motherfucker to get what you want. And, also, because fuck karma & her bestie, "ethical" am I right?? That and well, honestly I just don't give a fuuuuuchhhhkkk".

Look, judge me all you want. But when you want something bad enough, and you're actually serious about getting it, come talk to ya girl Tinky here. I'll make it happen. But if one thing is certain and two things fo sho... be careful what you wish for and certain that you really want it...you're likely to get it.

So what do I do you ask? Shiii... only the most powerful, most potent form of magick there is, baby! Period. See, there's something called "enochian magick" (Google it). Yeah, yeah angels and whatnot...but let me ask you this... what are demons? ....exactly... exactly.

*GASPS* Not the misunderstood fallen archangels in their goth phase that still have their God given powers!

But also, yeah. Them. My homies. Well, most of em. Don't get me wrong, these magickal fookin hands can throw some hella spells for people *gestures hands wildly in spells*. But if you want my best and most powerful work, I can promise you friend, it's in a ritual.

And you're like, Tink? Bitch, WTF even is a ritual...?

And I'm all, "oh, I'm so glad you asked...". Check this out... I get info from you, right? I pull up in the underworld, kick down the gates of hell and holla for my boys to come back me up. I tell em the plan and we ride out. *cue spiritually assaulting a motherfucker* From there, we deliver the goods to you, they drop me back off and go back to hell. That's it!

Ok, ok, whatever, maybe it doesn't happen *exactly* like that. But still, was a way cooler way of explaining it. And before you even ask (cause I know what you're thinking) no, there is no danger to you, anyone around you, and believe me, nobody wants your soul. I make the blood pact with the demon(s) myself which takes you and everyone else but me completely out of it.
** That Part ** (such a banger of a song, innit?)
That part is what keeps you 100% safe. That is part of what you pay for. The other parts you pay for are the offerings for rituals, materials, and a block of time between 2-4 hours to perform your personalized ritual. And yes, it does cost slightly more if you want a spicy demon.

And now you're like Tink? Bitch, WTF is a spicy demon?
And I'm all "oh, I'm so glad you asked..." again. Check this out...like most people, some of my friends are assholes. Inviting them over for ritual can be like being trapped in a room with a rabid, pissed off pit bull standing between you and the door, with your back against the wall, and all it wants is to kill you. Damn I love my friends! But yeah, those are the ones I call "spicy demons". And "spicy demons" are the ones that aren't a joy to deal with. Yeah, yeah, so they wanna kill me. But they are powerful AF. And soo worth it!

Look, Imma wrap this up for now, cause Lucifer will be back from lunch in a few minutes and I gotta go get Satan. Apparently he's drunk down at the strip club again and I don't want a repeat of what happened last week. There were fainting goats and naked chicks running around for hours on the freeway. Doesn't matter, look anyway... I'm sure I've left you with way more questions now than you had before you started reading this... I would too. Which is totally cool. I like questions. I like for my peoples to know exactly what they're getting, what to expect (and not) from me, and everything in between. So please, email me! Tinkerhell [!at] geturbaebackbitch.com. Yes, that is my real email. Still working on the site though. We sorta put Satan in charge of designing websites for people on Earth as a joke. But uhh....kinda came back to bite us in the ass. Anyway, if you have any questions about anything here and I'm more than happy to quickly respond. Off to get Satan, hopefully not from jail. Deuces!!
Love, Nina Tinkerhell


`;

export default function About() {
  const paragraphs = bio
    .trim()
    .split(/\n\s*\n/)        // split on blank lines
    .map((p) => p.replace(/\n/g, " ")); // collapse line breaks inside paragraphs

  return (
    <section className="container mx-auto px-6 py-12 text-gray-100 relative">

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-purple-400/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">About</h1>
        <p className="mt-3 max-w-2xl text-gray-300">
          Because sometimes you gotta spiritually assault a motherfucker to get what you want
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[min(520px,45%)_1fr] lg:items-start">
        {/* LEFT: Portrait */}
        <figure className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 lg:sticky lg:top-24">
          <div className="aspect-[4/5] w-full bg-black">
            <img
              src={portrait}
              alt="Portrait of the practitioner"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </figure>

        {/* RIGHT: Long bio */}
        <article className="max-w-2xl leading-relaxed text-gray-200">
          {paragraphs.map((para, i) => (
            <p key={i} className="mb-4">
              {para}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
}
