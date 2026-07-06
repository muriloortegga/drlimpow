import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { WPP_MESSAGES } from "@/lib/site";
import {
  IconCar,
  IconSofa,
  IconSparkle,
  IconShield,
  IconEngine,
  IconFleet,
  IconHome,
  IconStar,
  IconCheck,
  IconArrowRight,
  IconPin,
} from "@/components/Icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Limpow — Higienização e estética automotiva a domicílio" },
      {
        name: "description",
        content:
          "Lavagem, enceramento, polimento, vitrificação e higienização de estofados a domicílio em Vargem Grande Paulista e Cotia. Atendimento para pessoa física e frotas.",
      },
      { property: "og:title", content: "Dr. Limpow — Cuidamos do seu carro ou da sua frota sem você sair do lugar" },
      {
        property: "og:description",
        content:
          "Higienização e estética automotiva a domicílio em Vargem Grande Paulista e Cotia.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Services />
      <Differentials />
      <SocialProof />
      <FinalCTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* radial bg */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(77,120,201,0.18) 0%, rgba(11,20,32,0) 70%)",
        }}
      />
      <div className="container-page pt-12 sm:pt-20 pb-16 sm:pb-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/60 px-3 py-1.5 text-xs text-secondary">
            <IconPin size={14} />
            Atendimento a domicílio em Vargem Grande Paulista e Cotia
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display leading-[1.05] max-w-4xl">
            A empresa que cuida do seu carro — ou da sua frota — sem você sair do lugar.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 text-base sm:text-lg text-secondary max-w-2xl">
            Higienização e estética automotiva profissional. 5+ anos cuidando de carros, estofados
            e frotas corporativas com atendimento no seu endereço.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-12 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Por que você está aqui?
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <DecisionCard
              to="/estofados"
              icon={<IconSofa size={26} />}
              eyebrow="Pessoa física"
              title="Estofados"
              desc="Sofá, poltrona, cadeiras, tapetes e estofado do carro."
              primary
            />
            <DecisionCard
              to="/lavagem-automotiva"
              icon={<IconCar size={26} />}
              eyebrow="Pessoa física"
              title="Meu carro"
              desc="Lavagem, enceramento, polimento e vitrificação."
            />
            <DecisionCard
              to="/empresas"
              icon={<IconFleet size={26} />}
              eyebrow="Empresas com frota"
              title="Frota da empresa"
              desc="Plano Frota Dr. Limpow, sem tirar a frota de circulação."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DecisionCard({
  to,
  icon,
  eyebrow,
  title,
  desc,
  primary = false,
}: {
  to: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  desc: string;
  primary?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group relative flex flex-col gap-3 rounded-2xl border p-6 transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        primary
          ? "bg-primary text-primary-foreground border-transparent shadow-[var(--shadow-primary)] hover:translate-y-[-2px]"
          : "surface-card hover:border-border-strong hover:translate-y-[-2px]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`grid h-10 w-10 place-items-center rounded-lg ${
            primary ? "bg-white/15 text-white" : "bg-card-elevated text-foreground"
          }`}
        >
          {icon}
        </div>
        <IconArrowRight
          size={18}
          className={`transition-transform duration-200 group-hover:translate-x-1 ${primary ? "text-white" : "text-muted-foreground"}`}
        />
      </div>
      <div>
        <div className={`text-[11px] uppercase tracking-wider ${primary ? "text-white/70" : "text-muted-foreground"}`}>
          {eyebrow}
        </div>
        <div className="mt-1 text-xl font-semibold">{title}</div>
        <p className={`mt-2 text-sm ${primary ? "text-white/85" : "text-secondary"}`}>{desc}</p>
      </div>
    </Link>
  );
}

const services = [
  { icon: <IconSofa size={22} />, name: "Higienização de estofados", to: "/estofados" },
  { icon: <IconCar size={22} />, name: "Lavagem completa", to: "/lavagem-automotiva" },
  { icon: <IconSparkle size={22} />, name: "Enceramento técnico", to: "/lavagem-automotiva" },
  { icon: <IconSparkle size={22} />, name: "Polimento", to: "/lavagem-automotiva" },
  { icon: <IconShield size={22} />, name: "Vitrificação", to: "/lavagem-automotiva" },
  { icon: <IconFleet size={22} />, name: "Plano Frota Dr. Limpow", to: "/empresas" },
];

function Services() {
  return (
    <section className="container-page py-20 sm:py-24">
      <Reveal>
        <SectionHeader
          eyebrow="Serviços"
          title="Tudo o que a Dr. Limpow faz"
          subtitle="Do detalhe da pintura à frota inteira da sua empresa — em um único parceiro."
        />
      </Reveal>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 60}>
            <Link
              to={s.to}
              className="group flex items-center gap-4 surface-card p-5 hover:border-border-strong transition-[border-color] duration-200"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-card-elevated text-foreground group-hover:text-[color:var(--limpow-blue-light)] transition-colors duration-200">
                {s.icon}
              </div>
              <div className="flex-1 font-medium">{s.name}</div>
              <IconArrowRight size={18} className="text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground transition-[transform,color] duration-200" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const diffs = [
  { icon: <IconHome size={22} />, title: "Atendimento a domicílio", desc: "A gente vai até você — em casa, na garagem ou na sede da empresa." },
  { icon: <IconShield size={22} />, title: "5+ anos de operação", desc: "Experiência consolidada em higienização e estética automotiva." },
  { icon: <IconSparkle size={22} />, title: "Serviço completo", desc: "Estofados, lavagem, polimento, vitrificação e frota — tudo num só lugar." },
  { icon: <IconStar size={22} />, title: "Avaliações reais no Google", desc: "Clientes recorrentes e nota consistente em avaliações públicas." },
];

function Differentials() {
  return (
    <section className="border-y border-border bg-[color:var(--card)]/40">
      <div className="container-page py-20 sm:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Por que a Dr. Limpow"
            title="Cuidado profissional, sem complicar a sua rotina."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {diffs.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <div className="surface-card p-6 h-full">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-card-elevated text-[color:var(--limpow-blue-light)]">
                  {d.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-secondary">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="container-page py-20 sm:py-24">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeader
            eyebrow="O que dizem por aí"
            title="Avaliações de clientes reais."
            subtitle="Depoimentos abaixo são placeholders — serão substituídos pelas avaliações reais do Google."
          />
          <div className="flex items-center gap-3 surface-card px-4 py-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <IconStar key={i} size={18} className="text-[color:var(--limpow-blue-light)]" />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-semibold">4,9 no Google</div>
              <div className="text-muted-foreground text-xs">Avaliações de clientes</div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { name: "Cliente PF — placeholder", text: "Atenderam em casa, deixaram o carro impecável. Recomendo." },
          { name: "Cliente PF — placeholder", text: "Higienização do sofá ficou excelente, tirou manchas que eu achei que não sairiam." },
          { name: "Cliente Empresa — placeholder", text: "Frota sempre apresentável sem precisar parar o operacional. Vale cada centavo." },
        ].map((t, i) => (
          <Reveal key={i} delay={i * 80}>
            <figure className="surface-card p-6 h-full">
              <blockquote className="text-base text-foreground leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">— {t.name}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-page pb-20 sm:pb-28">
      <Reveal>
        <div className="surface-card-elevated p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-display leading-tight">
            Pronto pra deixar isso com a gente?
          </h2>
          <p className="mt-3 text-secondary max-w-xl mx-auto">
            Fale agora pelo WhatsApp e a gente combina o melhor horário para o atendimento.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppCTA message={WPP_MESSAGES.generic} />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <IconCheck size={14} /> Sem formulário. Resposta direto com o Victor.
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-secondary">{subtitle}</p>}
    </div>
  );
}
