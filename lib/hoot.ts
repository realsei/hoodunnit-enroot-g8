import { EVENT, FORM_URL, LOCATIONS, SUSPECTS, VICTIM, findSuspect } from '@/content/case'

const SITE = process.env.SITE_URL || 'https://hoodunnit-enroot-g8.vercel.app'

const HELP = `/hint &lt;place&gt; - a nudge if you can't find a location
/places - the five places
/suspects - who was on campus that night
/accuse &lt;name&gt; - try your theory on hoot
/help - this`

function hintFor(q: string) {
  q = q.toLowerCase()
  if (!q) return
  return LOCATIONS.find(l => l.name.toLowerCase().includes(q) || l.icon == q)
}

// hint text is the riddle that points *to* this place, which lives on the previous location
function riddleTo(slug: string) {
  const i = LOCATIONS.findIndex(l => l.slug == slug)
  return LOCATIONS.at(i - 1)!.next
}

export function reply(text: string) {
  switch (text.trim().split(/ +/)[0].split('@')[0]) {
    case '/start':
      return `hoo? 🦉\n\n${VICTIM.name} the mannequin got wrapped in trash bags and red tape, and i was the only one there. help me find out who did it.\n\n${EVENT.date}, ${EVENT.time} at ${EVENT.place}.\nthe case file: ${SITE}\n\n${HELP}`
    case '/help':
      return HELP
    case '/places':
      return LOCATIONS.map(l => `☾ ${l.name}`).join('\n')
    case '/suspects':
      return SUSPECTS.map(s => `☾ <b>${s.name}</b>, ${s.role}`).join('\n')
    case '/hint': {
      const q = text.trim().split(/ +/).slice(1).join(' ')
      if (!q) return `which place? try /hint ${LOCATIONS[0].name.toLowerCase()}`
      const loc = hintFor(q)
      if (!loc) return 'hoo? i don’t know that place. /places has the list'
      return `hoot squints and says:\n\n<i>“${riddleTo(loc.slug)}”</i>`
    }
    case '/accuse': {
      const q = text.trim().split(/ +/).slice(1).join(' ')
      if (!q) return 'accuse who? /suspects'
      const s = findSuspect(q)
      if (!s) return 'hoo? nobody by that name was here'
      // same reply for everyone so the bot never gives the answer away, the form is what counts
      const loc = LOCATIONS.find(l => l.clears == s.id) || LOCATIONS.find(l => !l.clears)!
      return `hoot tilts its head. “hoo… the ${loc.name} knows something about ${s.name}.”\n\nif you’re sure, put it in the form${FORM_URL ? `: ${FORM_URL}` : ' at the end'}.`
    }
    default:
      return 'hoo? i only understand a few words. /help'
  }
}
