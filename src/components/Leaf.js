// Small decorative olive-branch mark echoing the printed menus.
export default function Leaf({ className = "", flip = false }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M4 20c22-2 40-1 58 0 20 1 38 1 54 0" strokeLinecap="round" />
      {[18, 34, 50, 66, 82].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 20c${4} -${8} ${12} -${9} ${16} -${7}`} strokeLinecap="round" />
          <path d={`M${x + 4} 20c${4} ${8} ${12} ${9} ${16} ${7}`} strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}
