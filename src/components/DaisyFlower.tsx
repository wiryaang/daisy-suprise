
interface DaisyFlowerProps {
className?: string;
fallingPetal?: number;
fallenPetals?: number;
}

function DaisyFlower({
  className = "",
  fallingPetal = -1,
  fallenPetals = 0,
}: DaisyFlowerProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 340"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="flowerCenter" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#FFE89A" />
          <stop offset="100%" stopColor="#DCA83F" />
        </radialGradient>

        <linearGradient id="petalColor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F3E9E5" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path
        d="M120 112 C115 175 132 225 120 315"
        fill="none"
        stroke="#71936A"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Left leaf */}
      <path
        d="M120 245 C65 205 55 255 120 270"
        fill="#91AE83"
        stroke="#71936A"
        strokeWidth="1.5"
      />

      {/* Right leaf */}
      <path
        d="M121 215 C175 170 190 225 121 238"
        fill="#A4BC91"
        stroke="#71936A"
        strokeWidth="1.5"
      />

      {/* Petals */}
<g transform="translate(120 95)">
  {Array.from({ length: 8 }, (_, i) => {
    const isFallen = i < fallenPetals;
    const isFalling = i === fallingPetal;

    if (isFallen) return null;

    return (
      <g key={i} transform={`rotate(${i * 45})`}>
  <g
    className={`petal-group ${
      isFalling ? `falling petal-fall-${i}` : ""
    }`}
  >
    <ellipse
      cx="0"
      cy="-42"
      rx="15"
      ry="35"
      fill="url(#petalColor)"
      stroke="#E9DCD6"
      strokeWidth="1"
    />
  </g>
</g>
    );
  })}

  {/* Flower centre */}
  <circle
    r="22"
    fill="url(#flowerCenter)"
    stroke="#D5A13F"
    strokeWidth="1"
  />

  {/* Small details */}
  {Array.from({ length: 12 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 12;
    const x = Math.cos(angle) * 14;
    const y = Math.sin(angle) * 14;

    return (
      <circle
        key={i}
        cx={x}
        cy={y}
        r="1.8"
        fill="#B77D2E"
        opacity="0.7"
      />
    );
  })}
</g>
    </svg>
  );
}

export default DaisyFlower;
