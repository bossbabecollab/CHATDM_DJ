// CHATDM Logo: Music & DJ Instagram DM Automation
// Sleek speech bubble fused with dynamic audio equalizer bars

export const LOGO_VIEWBOX = "0 0 32 32";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#673DE6" />
      {/* Speech bubble contour */}
      <path
        d="M8 11C8 9.34315 9.34315 8 11 8H21C22.6569 8 24 9.34315 24 11V18C24 19.6569 22.6569 21 21 21H14L10 24V21H11C9.34315 21 8 19.6569 8 18V11Z"
        fill="white"
        fillOpacity="0.15"
      />
      {/* Audio waveform / equalizer bars representing DJ & Music */}
      <rect x="11.5" y="12" width="2" height="6" rx="1" fill="#FFFFFF" />
      <rect x="15" y="10" width="2" height="10" rx="1" fill="#FFFFFF" />
      <rect x="18.5" y="13" width="2" height="5" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-bold tracking-tight inline-flex items-center gap-2 ${className || ""}`}>
      <LogoMark className="w-6 h-6 inline-block shrink-0 rounded-md" />
      <span className="text-foreground">CHAT<span className="text-[#673DE6]">DM</span></span>
    </span>
  );
}
