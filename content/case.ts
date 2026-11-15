// draft story, team only needs to edit this file

export const EVENT = {
  name: 'HooDunnit?',
  by: 'EnROOT Group 8',
  date: 'Mon 23 Nov 2026',
  time: '5pm to 6:30pm',
  place: 'ROOT Cove (2.311A)',
}

// paste the google form link here, the accuse button stays hidden until then
export const FORM_URL = ''
export const BOT_USERNAME = 'HooDunnitBot'

export type Suspect = {
  id: string
  name: string
  role: string
  alibi: string
}

export const VICTIM = {
  name: 'Manny',
  blurb: 'the Fablab’s display mannequin. six years of holding up other people’s prototypes and never once complained.',
}

export const SUSPECTS: Suspect[] = [
  { id: 'stella', name: 'Stella Tan', role: 'auditorium stage manager', alibi: 'says she was running lights for a rehearsal all night.' },
  { id: 'fiona', name: 'Fiona Foo', role: '3am fablab regular', alibi: 'says she went home early. for once.' },
  { id: 'pete', name: 'Pancake Pete', role: 'self-appointed pancake machine operator', alibi: 'says he was making pancakes for the night owls.' },
  { id: 'ivan', name: 'Coach Ivan', role: 'ISH 1 floorball captain', alibi: 'says he was locking up the sports hall.' },
  { id: 'ghost', name: 'the Opera Ghost', role: 'lives on the old opera stage', alibi: 'says nothing. it’s a ghost.' },
]


export type Location = {
  slug: string
  name: string
  icon: 'stage' | 'gear' | 'pancake' | 'ball' | 'roof'
  letter: string
  fact: string
  factVerified: boolean
  clue: string
  clears?: string
  next: string
}

// random so people can't skip locations by guessing urls
export const LOCATIONS: Location[] = [
  {
    slug: 'aud-q7m2',
    name: 'Auditorium',
    icon: 'stage',
    letter: 'N',
    fact: '[team: one fun fact about the auditorium]',
    factVerified: false,
    clue: 'The lighting desk log shows cues saved every few minutes from 9pm to 1am, all signed ST. Stella never left the booth.',
    clears: 'stella',
    next: 'Where ideas get laser-cut at 3am and the floor is always a little sawdusty.',
  },
  {
    slug: 'fab-k3x9',
    name: 'Fablab',
    icon: 'gear',
    letter: 'F',
    fact: 'The Fab Lab opened in October 2012 at SUTD’s old Dover campus, modelled after a fabrication lab at MIT. It moved here when the East Coast campus opened in 2015.',
    factVerified: true,
    clue: 'Laser cutter #2 was booked until 2:47am. The name on the booking sheet is smudged, and the roll of red tape on that bench is nearly empty.',
    next: 'Follow the smell of butter. A machine here makes breakfast better than most of us.',
  },
  {
    slug: 'cake-p8w4',
    name: 'AI pancake machine',
    icon: 'pancake',
    letter: 'O',
    fact: '[team: one fun fact about the pancake machine]',
    factVerified: false,
    clue: 'The order history shows 41 pancakes between 10pm and midnight, all paid with Pete’s card. Too busy flipping to wrap anything.',
    clears: 'pete',
    next: 'Squeaky shoes, a floorball net, and the loudest echo on campus.',
  },
  {
    slug: 'ish-r2n6',
    name: 'ISH 1',
    icon: 'ball',
    letter: 'I',
    fact: '[team: one fun fact about ISH 1]',
    factVerified: false,
    clue: 'Ivan’s locker has the hall keys and a 7-Eleven receipt from 11:58pm. The guard remembers him buying milo. He’s in the clear.',
    clears: 'ivan',
    next: 'Older than everything else on campus by a few hundred years. It even has its own stage.',
  },
  {
    slug: 'ting-v5h7',
    name: 'Traditional Chinese Structure',
    icon: 'roof',
    letter: 'A',
    fact: 'These timber buildings, including the double-roofed Ke Zhong pavilion and an opera stage, came from southern Anhui in China and are said to date to the Ming and Qing dynasties. Jackie Chan donated them to Singapore and they were rebuilt at SUTD.',
    factVerified: true,
    clue: 'The dust on the opera stage is untouched. No footprints, no tape. Whatever the ghost does at night, it isn’t wrapping mannequins.',
    clears: 'ghost',
    next: 'Lights, curtains, rows of seats. Someone here never leaves the booth.',
  },
]

export function findLocation(slug: string) {
  return LOCATIONS.find(l => l.slug === slug)
}

export function findSuspect(q: string) {
  q = q.toLowerCase().trim()
  if (!q) return
  return SUSPECTS.find(s => s.id === q || s.name.toLowerCase().includes(q))
}
