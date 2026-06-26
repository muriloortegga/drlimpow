import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { SITE, WPP_MESSAGES } from "@/lib/site";
import {
  IconFleet,
  IconClock,
  IconUsers,
  IconShield,
  IconDocument,
  IconCheck,
  IconX,
  IconArrowRight,
} from "@/components/Icons";

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title: "Plano Frota Dr. Limpow — Higienização para empresas" },
      {
        name: "description",
        content:
          "Higienização recorrente da frota corporativa sem tirar os veículos de circulação. Atendimento na sede, relatório de atendimento e benefício de lavagem de cortesia para funcionários.",
      },
      { property: "og:title", content: "Plano Frota Dr. Limpow — Higienização para empresas" },
      {
        property: "og:description",
        content:
          "Sua frota cuidada na sede da empresa, sem parar a operação. Para gestores de operações, administrativo e RH.",
      },
      { property: "og:url", content: "/empresas" },
    ],
    links: [{ rel: "canonical", href: "/empresas" }],
  }),
  component: EmpresasPage,
});

function EmpresasPage() {
  return (
    <PageShell>
      <Hero />
      <Problem />
      <Solution />
      <Differentials />
      <Comparison />
      <Process />
      <Cases />
      <Trust />
      <FinalCTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(55% 45% at 50% 0%, rgba(77,120,201,0.18), transparent 70%)" }}
      />
      <div className="container-page pt-12 sm:pt-20 pb-12 sm:pb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/60 px-3 py-1.5 text-xs text-secondary">
            <IconFleet size={14} /> Plano Frota Dr. Limpow
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display leading-[1.05] max-w-4xl">
            A frota não precisa sair de circulação para ser cuidada.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base sm:text-lg text-secondary max-w-2xl">
            A Dr. Limpow atende sua frota na sede da empresa, com frequência recorrente, escopo
            definido em contrato e relatório de atendimento. E ainda transforma lavagem em benefício
            para os seus funcionários.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCTA message={WPP_MESSAGES.empresas} label="Quero o Plano Frota" />
            <a href={`mailto:${SITE.email}?subject=Plano%20Frota%20Dr.%20Limpow`} className="btn-secondary">
              Falar por e-mail
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <Reveal>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
              O problema
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
              Frota mal cuidada é imagem da empresa comprometida.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-4 text-secondary text-base">
            <p>
              Veículos sujos comunicam descuido — mesmo quando o serviço por trás é impecável.
              Clientes, parceiros e candidatos reparam.
            </p>
            <p>
              E a alternativa tradicional é pior: tirar carros de circulação, deslocar motoristas
              até um lava-rápido, pagar deslocamento, perder horas produtivas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Solution() {
  const includes = [
    "Frequência recorrente: semanal, quinzenal ou mensal",
    "Atendimento na sede da empresa, sem tirar a frota de circulação",
    "Lavagem completa externa e interna",
    "Higienização de estofados periódica conforme contrato",
    "Relatório de atendimento por veículo",
    "Contrato formal e escopo claro",
  ];
  return (
    <section className="border-y border-border bg-[color:var(--card)]/40">
      <div className="container-page py-20">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
              A solução
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
              Plano Frota Dr. Limpow
            </h2>
            <p className="mt-3 text-secondary">
              Um contrato. Uma frequência definida. Sua frota sempre apresentável, sem você precisar
              gerenciar isso.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((it, i) => (
            <Reveal key={it} delay={i * 50}>
              <div className="surface-card p-5 flex items-start gap-3 h-full">
                <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-md bg-[color:var(--primary)]/15 text-[color:var(--limpow-blue-light)] shrink-0">
                  <IconCheck size={16} />
                </span>
                <span className="text-sm">{it}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="container-page py-20">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
            Diferencial duplo
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
            Você cuida da frota e ainda ganha uma ferramenta de RH.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="surface-card-elevated p-7 h-full">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--primary)]/15 text-[color:var(--limpow-blue-light)]">
              <IconClock size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Frota sem sair de circulação</h3>
            <p className="mt-3 text-secondary">
              A gente atende na sede da empresa, em rodízio combinado. Os veículos seguem operando
              normalmente — o cuidado acontece quando o carro já estaria parado.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="surface-card-elevated p-7 h-full">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--primary)]/15 text-[color:var(--limpow-blue-light)]">
              <IconUsers size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Lavagem de cortesia para funcionários</h3>
            <p className="mt-3 text-secondary">
              Inclua lavagens de cortesia no contrato e transforme em benefício interno: prêmio
              para funcionário do mês, reconhecimento por meta batida, ou bônus de fim de ano.
              Custo baixo, percepção altíssima.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    { label: "Atendimento", lava: "Você leva o carro", drl: "A gente vai até a sede" },
    { label: "Frota em circulação", lava: "Para durante o serviço", drl: "Segue operando" },
    { label: "Frequência", lava: "Você que organiza", drl: "Contrato com cadência definida" },
    { label: "Padrão de qualidade", lava: "Varia a cada visita", drl: "Mesmo padrão sempre" },
    { label: "Relatório de atendimento", lava: "Não tem", drl: "Sim, por veículo" },
    { label: "Benefício para funcionários", lava: "—", drl: "Lavagens de cortesia incluídas" },
  ];
  return (
    <section className="border-y border-border bg-[color:var(--card)]/40">
      <div className="container-page py-20">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
              Comparativo
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
              Lava-rápido comum vs. Dr. Limpow Empresas
            </h2>
          </div>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-4 md:hidden">
          {rows.map((r) => (
            <div key={r.label} className="surface-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.label}</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs">Lava-rápido</div>
                  <div className="mt-1 flex items-start gap-2">
                    <IconX size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                    <span>{r.lava}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[color:var(--limpow-blue-light)] text-xs font-medium">Dr. Limpow</div>
                  <div className="mt-1 flex items-start gap-2">
                    <IconCheck size={16} className="text-[color:var(--limpow-blue-light)] mt-0.5 shrink-0" />
                    <span>{r.drl}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="mt-10 hidden md:block surface-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-card-elevated">
              <tr className="text-left">
                <th className="px-6 py-4 font-medium text-muted-foreground"> </th>
                <th className="px-6 py-4 font-medium">Lava-rápido comum</th>
                <th className="px-6 py-4 font-medium text-[color:var(--limpow-blue-light)]">Dr. Limpow Empresas</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? "" : "bg-card-elevated/40"}>
                  <td className="px-6 py-4 font-medium">{r.label}</td>
                  <td className="px-6 py-4 text-secondary">
                    <span className="inline-flex items-center gap-2">
                      <IconX size={16} className="text-muted-foreground" /> {r.lava}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2">
                      <IconCheck size={16} className="text-[color:var(--limpow-blue-light)]" /> {r.drl}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  { title: "Conversa inicial", desc: "Entendemos o tamanho da frota, rotina de uso e contexto da operação." },
  { title: "Proposta", desc: "Enviamos escopo, cadência e investimento de forma clara." },
  { title: "Visita de diagnóstico", desc: "Vamos até a sede para conhecer os veículos e o espaço de atendimento." },
  { title: "Início do contrato", desc: "Começam os atendimentos recorrentes, com relatório por veículo." },
];

function Process() {
  return (
    <section className="container-page py-20">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
            Como funciona
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
            Do primeiro contato ao contrato em circulação.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="surface-card p-6 h-full">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-card-elevated text-sm font-semibold text-[color:var(--limpow-blue-light)]">
                  {i + 1}
                </span>
                <IconArrowRight size={16} className="text-muted-foreground" />
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

function Cases() {
  return (
    <section className="border-y border-border bg-[color:var(--card)]/40">
      <div className="container-page py-20">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
              Clientes
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
              Empresas que já confiam a frota à Dr. Limpow.
            </h2>
            <p className="mt-3 text-secondary">
              Depoimentos formais a caminho — os textos abaixo são placeholders.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { company: "Frigostrella", quote: "Mantemos a frota sempre apresentável sem precisar parar a operação. Atendimento sério, gente confiável." },
            { company: "Sidarta", quote: "Resolveu um problema que a gente convivia há anos. Hoje é parte da rotina da empresa." },
          ].map((c, i) => (
            <Reveal key={c.company} delay={i * 80}>
              <figure className="surface-card-elevated p-7 h-full">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Case</div>
                <div className="mt-1 text-xl font-semibold">{c.company}</div>
                <blockquote className="mt-4 text-base text-foreground leading-relaxed">
                  “{c.quote}”
                </blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">
                  Depoimento placeholder — será substituído pelo texto oficial.
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: <IconDocument size={22} />, title: "Contrato formal", desc: "Escopo, cadência e investimento por escrito." },
    { icon: <IconShield size={22} />, title: "Escopo definido", desc: "Você sabe exatamente o que é entregue em cada atendimento." },
    { icon: <IconCheck size={22} />, title: "Relatório de atendimento", desc: "Registro do que foi feito, por veículo, em cada visita." },
  ];
  return (
    <section className="container-page py-20">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-medium">
            Compromisso
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight">
            Profissionalismo no operacional. Transparência no contrato.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((d, i) => (
          <Reveal key={d.title} delay={i * 80}>
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
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-page pb-20 sm:pb-28">
      <Reveal>
        <div className="surface-card-elevated p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display leading-tight">
                Sua frota merece um Doutor.
              </h2>
              <p className="mt-3 text-secondary max-w-xl">
                Conte como é a operação da sua empresa — em poucos minutos a gente já consegue
                desenhar uma proposta inicial.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <WhatsAppCTA message={WPP_MESSAGES.empresas} label="Falar sobre o Plano Frota" />
              <a
                href={`mailto:${SITE.email}?subject=Plano%20Frota%20Dr.%20Limpow`}
                className="btn-secondary"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
