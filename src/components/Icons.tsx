import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 22, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };
}

export const IconCar = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 17h14M6 17v2m12-2v2" />
    <path d="M4 13l1.5-5A2 2 0 0 1 7.4 6.5h9.2a2 2 0 0 1 1.9 1.5L20 13" />
    <rect x="3" y="13" width="18" height="4" rx="1.5" />
    <circle cx="7.5" cy="17" r="1.2" />
    <circle cx="16.5" cy="17" r="1.2" />
  </svg>
);

export const IconSofa = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z" />
    <path d="M2 14a2 2 0 0 1 2-2v6m16-6a2 2 0 0 1 2 2v4" />
    <path d="M6 18v2m12-2v2" />
  </svg>
);

export const IconSparkle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 4 6v6c0 4.5 3.5 8.2 8 9 4.5-.8 8-4.5 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconEngine = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 11h2V9h3l2-2h3v3h3v6h-3v2h-3l-2 2H7v-3H5z" />
  </svg>
);

export const IconFleet = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 15h10v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
    <path d="M4 15V9h6l1.5 3" />
    <path d="M12 18h3" />
    <path d="M22 18h-2a1 1 0 0 1-1-1v-5l-1.5-3H13v9" />
    <circle cx="6" cy="19" r="1.2" />
    <circle cx="17" cy="19" r="1.2" />
  </svg>
);

export const IconHome = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 11 12 4l9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export const IconStar = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.8 6.6 20l1-6.1L3.2 9.5l6.1-.9z" />
  </svg>
);

export const IconCalendar = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12 4 4L19 6" />
  </svg>
);

export const IconX = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconUsers = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="9" r="3" />
    <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
    <circle cx="17" cy="8" r="2.5" />
    <path d="M17 13c2.5 0 4 1.5 4 4" />
  </svg>
);

export const IconDocument = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M8 12h8M8 16h6" />
  </svg>
);

export const IconWhatsapp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 12a8 8 0 1 1-3.2-6.4L20 5l-1.4 3.2A8 8 0 0 1 20 12Z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5-2-1-1 1c-1-.4-1.6-1-2-2l1-1-1-2z" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export const IconPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
