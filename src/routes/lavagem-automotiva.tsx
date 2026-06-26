import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { WPP_MESSAGES } from "@/lib/site";
import { IconCar, IconSparkle, IconShield, IconEngine, IconHome, IconCheck, IconStar } from "@/components/Icons";

export const Route = createFileRoute("/lavagem-automotiva")({
  head: () => ({
    meta: [
      { title: "Lavagem, Polimento e Vitrificação a domicílio — Dr. Limpow" },
      {
        name: "description",
        content:
          "Lavagem completa, enceramento técnico, polimento, vitrificação de pintura/plásticos/vidros e lavagem de motor. Atendimento a domicílio em Vargem Grande Paulista e Cotia.",
      },
      { property: "og:title", content: "Lavagem, Polimento e Vitrificação a domicílio — Dr. Limpow" },
      {
        property: "og:description",
        content: "Cuide do seu carro sem sair de casa. Vargem Grande Paulista e Cotia.",
      },
      { property: "og:url", content: "/lavagem-automotiva" },
    ],
    links: [{ rel: "canonical", href: "/lavagem-automotiva" }],
  }),
  component: LavagemPage,
});

const services = [
  { icon: <IconCar size={22} />, title: "Lavagem completa", desc: "Lavagem externa e interna, com aspiração e finalização detalhada." },
  { icon: <IconSparkle size={22} />, title: "Enceramento técnico", desc: "Proteção e brilho com cera de qualidade profissional." },
  { icon: <IconSparkle size={22} />, title: "Polimento", desc: "Remoção de riscos finos, marcas de lavagem e oxidação da pintura." },
  { icon: <IconShield size={22} />, title: "Vitrificação", desc: "Pintura, plásticos e vidros — proteção duradoura e fácil manutenção." },
  { icon: <IconEngine size={22} />, title: "Lavagem de motor", desc: "Limpeza profunda e segura do compartimento do motor." },
];

function LavagemPage() {
  return (
    <PageShell>
      <Hero />
      <Services />
      <Difference />
      <Gallery />
      <Testimonials />
      <CTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(50% 40% at 50% 0%, rgba(77,120,201,0.16), transparent 70%)" }}
      />
      <div className="container-page pt-12 sm:pt-20 pb-12 sm:pb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/60 px-3 py-1.5 text-xs text-secondary">
            <IconCar size={14} /> Lavagem e estética automotiva
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display leading-[1.05] max-w-3xl">
            Seu carro merece cuidado. Sem precisar sair de casa.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base sm:text-lg text-secondary max-w-2xl">
            Lavagem, enceramento, polimento e vitrificação feitos no seu endereço — ou, se preferir,
            na nossa garagem. Você escolhe.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCTA message={WPP_MESSAGES.lavagem} label="Agendar lavagem" />
            <a href="#servicos" className="btn-secondary">Ver serviços</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="container-page py-16 sm:py-20">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
            Serviços
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
            Do básico ao detalhamento completo.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="surface-card p-6 h-full">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-card-elevated text-[color:var(--limpow-blue-light)]">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-secondary">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Difference() {
  const items = [
    { icon: <IconHome size={22} />, title: "Atendemos onde for melhor pra você", desc: "Na sua casa, na sua garagem ou na nossa — você escolhe." },
    { icon: <IconCheck size={22} />, title: "Produtos profissionais", desc: "Mesma linha usada em estúdios de detalhamento." },
    { icon: <IconShield size={22} />, title: "Acabamento de quem cuida", desc: "Atenção aos detalhes que o lava-rápido comum não enxerga." },
  ];
  return (
    <section className="border-y border-border bg-[color:var(--card)]/40">
      <div className="container-page py-20">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
              Diferencial
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
              Cuidado de detalhista, conveniência de delivery.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <div className="surface-card p-6 h-full">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-card-elevated text-[color:var(--limpow-blue-light)]">
                  {d.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-secondary">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="container-page py-20">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
            Antes e depois
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
            Resultado que se vê de longe.
          </h2>
          <p className="mt-3 text-secondary">Galeria com fotos reais — em breve.</p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Reveal key={i} delay={i * 40}>
            <div className="aspect-[4/3] surface-card grid place-items-center text-muted-foreground text-sm">
              Antes / Depois — foto {i}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-page py-16">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
            Depoimentos
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
            Quem confia o carro à Dr. Limpow.
          </h2>
          <p className="mt-3 text-secondary">Placeholders — serão substituídos por depoimentos reais.</p>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          "Fizeram polimento e vitrificação no meu carro. A pintura ficou outra. Marquei o próximo já.",
          "Chegaram pontualmente, trabalho impecável e ainda explicaram a manutenção. Recomendo.",
        ].map((t, i) => (
          <Reveal key={i} delay={i * 80}>
            <figure className="surface-card p-6 h-full">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((s) => (
                  <IconStar key={s} size={16} className="text-[color:var(--limpow-blue-light)]" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed">“{t}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— Cliente — placeholder</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-page pb-20 sm:pb-28">
      <Reveal>
        <div className="surface-card-elevated p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-display">Vamos cuidar do seu carro?</h2>
          <p className="mt-3 text-secondary max-w-xl mx-auto">
            Fale no WhatsApp e a gente combina o melhor horário — no seu endereço ou na nossa garagem.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppCTA message={WPP_MESSAGES.lavagem} label="Agendar lavagem" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
