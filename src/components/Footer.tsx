import { Link } from "@tanstack/react-router";
import { LogoTip } from "./Logo";
import { SITE, WPP_MESSAGES, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-page py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <LogoTip />
          <p className="mt-5 text-sm text-secondary max-w-sm">
            Higienização e estética automotiva a domicílio. Atendimento em {SITE.region}.
          </p>
        </div>

        <FooterCol title="Para você">
          <FLink to="/estofados">Estofados</FLink>
          <FLink to="/lavagem-automotiva">Lavagem Automotiva</FLink>
        </FooterCol>

        <FooterCol title="Para empresas">
          <FLink to="/empresas">Plano Frota Dr. Limpow</FLink>
        </FooterCol>

        <FooterCol title="Contato">
          <a
            className="text-sm text-secondary hover:text-foreground transition-colors"
            href={whatsappLink(WPP_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="text-sm text-secondary hover:text-foreground transition-colors"
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram {SITE.instagramHandle}
          </a>
          <a
            className="text-sm text-secondary hover:text-foreground transition-colors"
            href={`mailto:${SITE.email}`}
          >
            {SITE.email}
          </a>
        </FooterCol>
      </div>

      <div className="container-page py-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dr. Limpow. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground">
          {SITE.region}
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>
      <div className="mt-4 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm text-secondary hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}
