import { SPRITES, SpriteName } from './sprites'

const COLORS: Record<string, string> = {
  r: '#b3152e',
  d: '#6e0d1c',
  k: '#000000',
  b: '#e9e1cf',
  g: '#8f887a',
  c: '#f4b740',
  o: '#d9661f',
  p: '#4a2f50',
  w: '#ffffff',
  s: '#c98f6b',
  n: '#3b2416',
}

type SpriteProps = {
  name: SpriteName
  scale?: number
  className?: string
  title?: string
}

function Sprite({ name, scale = 4, className, title }: SpriteProps) {
  const rows = SPRITES[name]
  const w = Math.max(...rows.map(r => r.length))
  const h = rows.length

  const rects = []
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      const fill = COLORS[rows[y][x]]
      if (fill) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={fill} />)
    }
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w * scale}
      height={h * scale}
      className={className}
      shapeRendering='crispEdges'
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {rects}
    </svg>
  )
}

export default Sprite
