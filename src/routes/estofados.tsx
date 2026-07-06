import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { WPP_MESSAGES } from "@/lib/site";
import { IconSofa, IconCheck, IconCalendar, IconHome, IconSparkle, IconStar } from "@/components/Icons";

export const Route = createFileRoute("/estofados")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados a domicílio — Dr. Limpow" },
      {
        name: "description",
        content:
          "Higienização profissional de sofás, poltronas, cadeiras, tapetes e estofados de carro em Vargem Grande Paulista e Cotia. Atendimento no seu endereço.",
      },
      { property: "og:title", content: "Higienização de Estofados a domicílio — Dr. Limpow" },
      {
        property: "og:description",
        content:
          "Sofá, poltrona, cadeiras, tapetes e estofado do carro — higienizados no seu endereço.",
      },
      { property: "og:url", content: "/estofados" },
    ],
    links: [{ rel: "canonical", href: "/estofados" }],
  }),
  component: EstofadosPage,
});

function EstofadosPage() {
  return (
    <PageShell>
      <Hero />
      <Included />
      <Process />
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
            <IconSofa size={14} /> Higienização de estofados
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display leading-[1.05] max-w-3xl">
            Seu estofado limpo, higienizado e renovado sem você sair de casa.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base sm:text-lg text-secondary max-w-2xl">
            Higienizamos sofás, colchões, tapetes, cadeiras, poltronas e automóveis com atendimento em domicílio.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCTA message={WPP_MESSAGES.estofados} label="Solicitar orçamento" />
            <a href="#como-agendar" className="btn-secondary">Como agendar</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const included = [
  "Estofados de carro (bancos, forro, teto)",
  "Sofás de 2, 3 ou mais lugares",
  "Cadeiras de jantar e poltronas",
  "Cadeiras de escritório",
  "Tapetes e carpetes",
  "Higienização com produtos profissionais",
];

function Included() {
  return (
    <section className="container-page py-16 sm:py-20">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
            O que está incluso
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
            Tudo que pode ser higienizado, a gente higieniza.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {included.map((item, i) => (
          <Reveal key={item} delay={i * 50}>
            <div className="surface-card p-5 flex items-start gap-3 h-full">
              <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-md bg-[color:var(--primary)]/15 text-[color:var(--limpow-blue-light)] shrink-0">
                <IconCheck size={16} />
              </span>
              <span className="text-sm">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { icon: <IconCalendar size={22} />, title: "Envie uma foto", desc: "Compartilhe algumas fotos dos estofados pelo WhatsApp para uma avaliação" },
  { icon: <IconHome size={22} />, title: "Agende o melhor dia", desc: "Após avaliação, enviamos o orçamento e marcamos a data do atendimento" },
  { icon: <IconSparkle size={22} />, title: "Nós fazemos o restante", desc: "Vamos até você com todos os equipamentos necessários para uma higienização com segurança e praticidade." },
];

function Process() {
  return (
    <section id="como-agendar" className="border-y border-border bg-[color:var(--card)]/40">
      <div className="container-page py-20">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
              Como agendar
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
              3 passos para um orçamento
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="surface-card p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-card-elevated text-sm font-semibold text-[color:var(--limpow-blue-light)]">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{s.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-secondary">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-12 flex justify-center">
            <WhatsAppCTA message={WPP_MESSAGES.estofados} label="Solicitar orçamento" />
          </div>
        </Reveal>
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
            Veja a transformação
          </h2>
          <p className="mt-3 text-secondary">
            Sem filtros e sem edição. Apenas resultados reais.
          </p>
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
      <Reveal delay={200}>
        <div className="mt-12 flex justify-center">
          <WhatsAppCTA message={WPP_MESSAGES.estofados} label="Solicitar orçamento" />
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-page py-16">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
              Depoimentos
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
              O que nossos clientes dizem
            </h2>
            <p className="mt-3 text-secondary">
              Avaliações reais publicadas no Google por clientes que confiaram no nosso trabalho.
            </p>
          </div>
          <div className="flex items-center gap-3 surface-card px-4 py-3 shrink-0">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <IconStar key={i} size={18} className="text-[color:var(--limpow-blue-light)]" />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-semibold">5,0 no Google</div>
              <div className="text-muted-foreground text-xs">Avaliações de clientes</div>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          "Higienizaram o sofá da sala e a poltrona. Ficou como novo, e atenderam no horário combinado.",
          "Tiraram odor que estava no banco do carro há meses. Vou chamar de novo.",
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
          <h2 className="text-3xl sm:text-4xl font-display">Seu estofado merece esse cuidado.</h2>
          <p className="mt-3 text-secondary max-w-xl mx-auto">
            Fale conosco pelo WhatsApp e receba seu orçamento de forma rápida e descomplicada.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppCTA message={WPP_MESSAGES.estofados} label="Solicitar orçamento" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
