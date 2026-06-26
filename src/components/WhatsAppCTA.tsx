import { whatsappLink } from "@/lib/site";
import { IconWhatsapp, IconArrowRight } from "./Icons";

export function WhatsAppCTA({
  message,
  label = "Falar no WhatsApp",
  variant = "primary",
  className = "",
}: {
  message: string;
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      <IconWhatsapp size={18} />
      {label}
      <IconArrowRight size={16} />
    </a>
  );
}
