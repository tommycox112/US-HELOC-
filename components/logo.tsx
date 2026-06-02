export function Logo({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  const navyColor = inverted ? "#FFFFFF" : "#002868";
  const redColor = "#BF0A30";
  const whiteColor = inverted ? "#002868" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="US HELOC logo"
      role="img"
    >
      {/* Modern house icon - simplified for legibility */}
      <g>
        {/* House shape - filled for better visibility at small sizes */}
        <path
          d="M20 4L4 16V36H14V26H26V36H36V16L20 4Z"
          fill={navyColor}
        />
        {/* Inner cutout for door/window effect */}
        <rect x="14" y="26" width="12" height="10" fill={whiteColor} />
        {/* Upward arrow - equity growth symbol */}
        <path
          d="M20 28V16M15 20L20 15L25 20"
          stroke={redColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Text wordmark */}
      <g>
        {/* "US" in navy - bold and tight */}
        <text
          x="46"
          y="28"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="24"
          fontWeight="800"
          fill={navyColor}
          letterSpacing="-1"
        >
          US
        </text>

        {/* "HELOC" in red - matches weight */}
        <text
          x="76"
          y="28"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="24"
          fontWeight="800"
          fill={redColor}
          letterSpacing="-0.5"
        >
          HELOC
        </text>
      </g>

      {/* Subtle underline accent bar */}
      <rect x="46" y="32" width="22" height="2" rx="1" fill={navyColor} />
      <rect x="76" y="32" width="68" height="2" rx="1" fill={redColor} />
    </svg>
  );
}

export function LogoIcon({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  const navyColor = inverted ? "#FFFFFF" : "#002868";
  const redColor = "#BF0A30";
  const whiteColor = inverted ? "#002868" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="US HELOC"
      role="img"
    >
      {/* House shape - filled for better visibility */}
      <path
        d="M20 4L4 16V36H14V26H26V36H36V16L20 4Z"
        fill={navyColor}
      />
      {/* Inner cutout */}
      <rect x="14" y="26" width="12" height="10" fill={whiteColor} />
      {/* Upward arrow */}
      <path
        d="M20 28V16M15 20L20 15L25 20"
        stroke={redColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
