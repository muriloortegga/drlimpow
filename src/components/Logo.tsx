import { useState, type SVGProps } from "react";

/**
 * Dr. Limpow — gota estilizada com rosto sutil:
 * - corpo: gota azul (Limpow Blue)
 * - 2 olhos: círculos brancos
 * - traço em L: nariz / expressão
 * Proporções fixas — não deformar.
 */
export function LogoIcon({
  size = 40,
  ...props
}: { size?: number } & Omit<SVGProps<SVGSVGElement>, "width" | "height">) {
  const [error, setError] = useState(false);

  if (!error) {
    return (
      <img
        src="/logos/Dr.Limpow%20Icone.svg"
        alt="Ícone Dr. Limpow"
        width={size}
        height={size}
        onError={() => setError(true)}
        className={props.className}
        style={{ objectFit: "contain", width: size, height: size }}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="limpow-drop" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4D78C9" />
          <stop offset="100%" stopColor="#2F56A6" />
        </linearGradient>
      </defs>
      {/* Gota */}
      <path
        d="M32 4 C32 4 10 28 10 42 C10 53.046 19.954 62 31 62 C42.046 62 52 53.046 52 42 C52 28 32 4 32 4 Z"
        fill="url(#limpow-drop)"
      />
      {/* Olhos */}
      <circle cx="25" cy="40" r="3.2" fill="#FFFFFF" />
      <circle cx="38" cy="40" r="3.2" fill="#FFFFFF" />
      {/* Nariz / traço em L */}
      <path
        d="M31.5 44 L31.5 49 L34.5 49"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Wordmark({ size = 28 }: { size?: number }) {
  return (
    <span
      style={{
        fontFamily: '"DM Sans", system-ui, sans-serif',
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        color: "var(--foreground)",
      }}
    >
      Dr. Limpow
    </span>
  );
}

export function LogoHorizontal({ iconSize = 36, textSize = 24 }: { iconSize?: number; textSize?: number }) {
  const [error, setError] = useState(false);

  if (!error) {
    return (
      <img
        src="/logos/Dr.Limpow%20Horiz.svg"
        alt="Dr. Limpow"
        onError={() => setError(true)}
        style={{ height: iconSize * 1.1, objectFit: "contain" }}
      />
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoIcon size={iconSize} />
      <Wordmark size={textSize} />
    </span>
  );
}

export function LogoVertical({ iconSize = 72, textSize = 28 }: { iconSize?: number; textSize?: number }) {
  const [error, setError] = useState(false);

  if (!error) {
    return (
      <img
        src="/logos/Dr.Limpow%20Vert.svg"
        alt="Dr. Limpow"
        onError={() => setError(true)}
        style={{ height: iconSize * 1.6, objectFit: "contain" }}
      />
    );
  }

  return (
    <span className="inline-flex flex-col items-center gap-3">
      <LogoIcon size={iconSize} />
      <Wordmark size={textSize} />
    </span>
  );
}

export function LogoTip({ iconSize = 44, textSize = 26 }: { iconSize?: number; textSize?: number }) {
  const [error, setError] = useState(false);

  if (!error) {
    return (
      <img
        src="/logos/Dr.Limpow%20Tip.svg"
        alt="Dr. Limpow"
        onError={() => setError(true)}
        style={{ height: iconSize * 1.3, objectFit: "contain" }}
      />
    );
  }

  return (
    <span className="inline-flex items-center gap-3">
      <LogoIcon size={iconSize} />
      <span className="flex flex-col leading-tight">
        <Wordmark size={textSize} />
        <span className="text-xs text-muted-foreground mt-1">
          Higienização de Estofados e Automotiva
        </span>
      </span>
    </span>
  );
}

