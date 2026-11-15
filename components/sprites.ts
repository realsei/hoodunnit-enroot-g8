// 1 char = 1 pixel, see COLORS in Sprite.tsx. '.' is empty

const hoot = [
  '...b........b...',
  '...bb......bb...',
  '...bbbbbbbbbb...',
  '..bbbbbbbbbbbb..',
  '.bbbkkkbbkkkbbb.',
  '.bbkcckkbkcckbb.',
  '.bbkckkbbkckkbb.',
  '.bbbkkbrrbkkbbb.',
  '..bbbbbbrbbbbb..',
  '..bgbbbbbbbbgb..',
  '.bbbbgbbbbgbbbb.',
  '.bgbbbbgbbbbbgb.',
  '.bbbgbbbbbgbbbb.',
  '..bbbbbgbbbbbb..',
  '...bbbbbbbbbb...',
  '....cc....cc....',
]

const hootHuh = [
  '..............rr',
  '...b........b..r',
  '...bb......bb.r.',
  '...bbbbbbbbbb.r.',
  '..bbbbbbbbbbbb..',
  '.bbbkkkbbkkkbbbr',
  '.bbkcckkbkkkkbb.',
  '.bbkckkbbkcckbb.',
  '.bbbkkbrrbkkbbb.',
  '..bbbbbbrbbbbb..',
  '..bgbbbbbbbbgb..',
  '.bbbbgbbbbgbbbb.',
  '.bgbbbbgbbbbbgb.',
  '.bbbgbbbbbgbbbb.',
  '..bbbbbbbbbbbb..',
  '....cc....cc....',
]

const bat = [
  'p............p',
  'pp...p..p...pp',
  'ppp..pppp..ppp',
  'pppppprrpppppp',
  '.pppppppppppp.',
  '..pp..pp..pp..',
  '...p......p...',
]

const pumpkin = [
  '.....nn.....',
  '......n.....',
  '..oooooooo..',
  '.oooooooooo.',
  'oookkoookkoo',
  'oookkoookkoo',
  'oooooooooooo',
  'ookoookokoko',
  'oookkkkkkooo',
  '.ooooooo.oo.',
  '..oooooo.o..',
]

const candle = [
  '...c...',
  '..ccc..',
  '..crc..',
  '..ccc..',
  '...k...',
  '.bbbbb.',
  '.brbbb.',
  '.brbbb.',
  '.bbbbb.',
  '.bbbrb.',
  '.bbbbb.',
  '.bbbbb.',
  'ggggggg',
]

const magnifier = [
  '...gggg....',
  '..g....g...',
  '.g.b....g..',
  '.g.b....g..',
  '.g......g..',
  '..g....g...',
  '...gggg....',
  '.......nn..',
  '........nn.',
  '.........nn',
]

const stage = [
  'dddddddddddd',
  'rrrrrrrrrrrr',
  'rr.r....r.rr',
  'rr..r..r..rr',
  'rr...cc...rr',
  'rr..cccc..rr',
  'rr...cc...rr',
  'rr..b..b..rr',
  'rr........rr',
  'nnnnnnnnnnnn',
  'n..n....n..n',
]

const gear = [
  '....bb....',
  '.b.bbbb.b.',
  '..bbbbbb..',
  '.bbb..bbb.',
  'bbb....bbb',
  'bbb....bbb',
  '.bbb..bbb.',
  '..bbbbbb..',
  '.b.bbbb.b.',
  '....bb....',
]

const pancake = [
  '....cc......',
  '...crc......',
  '..cccccccc..',
  '.oooooooooo.',
  '..cccccccc..',
  '.oooooooooo.',
  '..cccccccc..',
  '.oooooooooo.',
  'gggggggggggg',
  '.gggggggggg.',
]

const ball = [
  '...bbbb...',
  '.bbkbbkbb.',
  '.bbbbbbbb.',
  'bkbbkkbbkb',
  'bbbbbbbbbb',
  'bbbbbbbbbb',
  'bkbbkkbbkb',
  '.bbbbbbbb.',
  '.bbkbbkbb.',
  '...bbbb...',
]

const roof = [
  'r..........r',
  '.rrrrrrrrrr.',
  '..dddddddd..',
  '...n.cc.n...',
  'rrrrrrrrrrrr',
  '.dddddddddd.',
  '..n......n..',
  '..n..nn..n..',
  '..n..nn..n..',
  'gggggggggggg',
]

function face(hair: string, extra: string[] = []) {
  const h = hair
  return [
    `..${h}${h}${h}${h}${h}${h}..`,
    `.${h}${h}${h}${h}${h}${h}${h}${h}.`,
    `.${h}ssssss${h}.`,
    '.sskssskss.',
    '.ssssssssss',
    '.sssssssss.',
    '..ssrrsss..',
    '...ssss....',
    ...extra,
  ]
}

const stella = face('n', ['..kkkkkk..', '.kkkkkkkk.'])
const fiona = face('k', ['..ppcccp..', '.pppcppppp.'])
const pete = [
  '..wwwwww..',
  '.wwwwwwww.',
  '..wwwwww..',
  '.ssssssss.',
  '.sskssksss',
  '.ssssssss.',
  '..srrrrs..',
  '...ssss...',
  '..bbbbbb..',
  '.bbbbbbbb.',
]
const ivan = face('o', ['..rrrrrr..', '.rrbrrbrr.'])
const ghost = [
  '..bbbbbb..',
  '.bbbbbbbb.',
  'bbkkbbkkbb',
  'bbkkbbkkbb',
  'bbbbbbbbbb',
  'bbbbkkbbbb',
  'bbbbbbbbbb',
  'bbbbbbbbbb',
  'bb.bb.bb.b',
  'b...b..b..',
]

export const SPRITES = {
  hoot,
  hootHuh,
  bat,
  pumpkin,
  candle,
  magnifier,
  stage,
  gear,
  pancake,
  ball,
  roof,
  stella,
  fiona,
  pete,
  ivan,
  ghost,
}

export type SpriteName = keyof typeof SPRITES
