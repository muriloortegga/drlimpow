import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal, ScrollReveal } from "@/components/Reveal";
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
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(55% 45% at 50% 0%, rgba(77,120,201,0.12), transparent 70%)" }}
      />
      <div className="container-page pt-16 sm:pt-24 pb-16">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/60 px-3 py-1.5 text-xs text-[color:var(--limpow-blue-light)] font-medium">
              <IconFleet size={14} /> Plano Frota Dr. Limpow
            </div>
          </Reveal>
          
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display leading-[1.05] tracking-tight">
              A frota não precisa sair de circulação para ser cuidada.
            </h1>
          </Reveal>
          
          <Reveal delay={140}>
            <p className="mt-6 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
              A Dr. Limpow atende sua frota na sede da empresa, com frequência recorrente, escopo
              definido em contrato e relatório de atendimento. E ainda transforma lavagem em benefício
              para os seus funcionários.
            </p>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCTA message={WPP_MESSAGES.empresas} label="Falar com o Victor" />
              <a href={`mailto:${SITE.email}?subject=Plano%20Frota%20Dr.%20Limpow`} className="btn-secondary">
                Falar por e-mail
              </a>
            </div>
          </Reveal>
        </div>

        {/* 2.2 Samsara: Prova numérica objetiva imediatamente após a promessa principal */}
        <div className="mt-16 sm:mt-20 border-t border-border pt-12">
          <Reveal delay={250}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center sm:text-left">
              <div className="surface-card p-6 border border-border/40 bg-card">
                <div className="text-4xl sm:text-5xl font-bold font-display text-[color:var(--limpow-blue-light)]">500+</div>
                <div className="mt-2 text-sm text-secondary font-medium">Veículos atendidos por mês</div>
              </div>
              <div className="surface-card p-6 border border-border/40 bg-card">
                <div className="text-4xl sm:text-5xl font-bold font-display text-[color:var(--limpow-blue-light)]">5+</div>
                <div className="mt-2 text-sm text-secondary font-medium">Anos de operação contínua</div>
              </div>
              <div className="surface-card p-6 border border-border/40 bg-card">
                <div className="text-4xl sm:text-5xl font-bold font-display text-[color:var(--limpow-blue-light)]">15+</div>
                <div className="mt-2 text-sm text-secondary font-medium">Frotas corporativas ativas</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Capítulo 1 — Problema (custo/risco de lava-rápido avulso para frotas) */
function Chapter1() {
  return (
    <section className="border-b border-border bg-transparent">
      <div className="container-page py-20 sm:py-24">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-bold">
                Capítulo 1 — O Problema
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight tracking-tight">
                O custo invisível e o risco de um lava-rápido comum.
              </h2>
            </div>
            <div className="space-y-6 text-secondary text-base leading-relaxed">
              <p>
                Tirar carros de circulação, deslocar motoristas até um lava-rápido comum e perder horas de trabalho produtivo custa muito mais do que você imagina. É um desperdício de tempo e combustível que afeta diretamente o fluxo da sua operação.
              </p>
              <p>
                Além disso, há o risco logístico e legal: deslocar funcionários para esse fim gera exposição a acidentes no trânsito, custos com reembolso e possibilidade de multas desnecessárias no caminho.
              </p>
              <div className="p-5 rounded-lg border border-border/60 bg-card">
                <p className="text-sm font-semibold text-foreground">
                  ⚠️ Imagem corporativa em jogo:
                </p>
                <p className="mt-2 text-sm">
                  Veículos sujos ou com aspecto descuidado transmitem uma imagem desleixada da sua empresa diretamente para seus clientes, parceiros e concorrentes.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* Capítulo 2 — Prova (depoimento nomeado + comparativo) */
function Chapter2() {
  const comparisonRows = [
    { label: "Acordo de SLA", lava: "Inexistente, depende da fila do dia", drl: "Garantido em contrato, com horários reservados" },
    { label: "Logística", lava: "Motorista deslocado (risco e tempo perdido)", drl: "Atendimento na sede da empresa (zero esforço)" },
    { label: "Recorrência", lava: "Sem previsibilidade", drl: "Cadência fixa (semanal/quinzenal/mensal)" },
    { label: "Nota Fiscal & Faturamento", lava: "Muitas vezes sem nota ou via recibo avulso", drl: "Emissão de NF corporativa e faturamento mensal" },
    { label: "Garantia de Qualidade", lava: "Subjetiva e inconstante", drl: "Padrão de entrega rigoroso e consistente" },
  ];

  return (
    <section className="border-b border-border bg-card">
      <div className="container-page py-20 sm:py-24">
        <ScrollReveal>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-bold">
              Capítulo 2 — A Prova
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight tracking-tight">
              A diferença entre um fornecedor avulso e a Dr. Limpow.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1.3fr] items-start">
            {/* Depoimento nomeado e específico (Samsara) */}
            <div className="space-y-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quem já confia</div>
              <figure className="surface-card-elevated p-8 border border-border bg-card-elevated relative overflow-hidden">
                <blockquote className="text-base text-foreground leading-relaxed italic">
                  “Mantemos a nossa frota sempre impecável e apresentável para nossos clientes, sem precisar tirar nenhum veículo de circulação ou parar a nossa operação. O atendimento é sério, a equipe é extremamente confiável e cumprem rigorosamente com o combinado.”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[color:var(--primary)]/20 flex items-center justify-center font-bold text-[color:var(--limpow-blue-light)]">
                    RS
                  </div>
                  <div>
                    <figcaption className="text-sm font-semibold text-foreground">Rogério Silva</figcaption>
                    <p className="text-xs text-muted-foreground">Gestor de Frotas e Operações — Frigostrella</p>
                  </div>
                </div>
              </figure>
            </div>

            {/* Comparativo direto (Samsara) */}
            <div className="space-y-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Comparativo Direto</div>
              
              {/* Mobile layout */}
              <div className="grid gap-4 md:hidden">
                {comparisonRows.map((row) => (
                  <div key={row.label} className="surface-card p-5 border border-border bg-card-elevated">
                    <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--limpow-blue-light)]">{row.label}</div>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <IconX size={16} className="mt-0.5 shrink-0 text-red-500" />
                        <span><strong>Lava-rápido comum:</strong> {row.lava}</span>
                      </div>
                      <div className="flex items-start gap-2 text-foreground">
                        <IconCheck size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                        <span><strong>Dr. Limpow:</strong> {row.drl}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop layout */}
              <div className="hidden md:block border border-border rounded-xl overflow-hidden shadow-lg bg-card-elevated">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-card/50 text-left">
                      <th className="px-6 py-4 font-bold text-muted-foreground">Critério</th>
                      <th className="px-6 py-4 font-bold text-muted-foreground">Lava-rápido comum</th>
                      <th className="px-6 py-4 font-bold text-[color:var(--limpow-blue-light)]">Plano Frota Dr. Limpow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, idx) => (
                      <tr key={row.label} className={idx % 2 === 0 ? "border-b border-border/40" : "border-b border-border/40 bg-card/25"}>
                        <td className="px-6 py-4 font-semibold text-foreground">{row.label}</td>
                        <td className="px-6 py-4 text-muted-foreground flex items-center gap-2">
                          <IconX size={15} className="text-red-500 shrink-0" /> {row.lava}
                        </td>
                        <td className="px-6 py-4 text-foreground">
                          <span className="inline-flex items-center gap-2">
                            <IconCheck size={15} className="text-emerald-500 shrink-0" /> {row.drl}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* Capítulo 3 — Como funciona (Plano Frota Dr. Limpow, operação) */
function Chapter3() {
  const steps = [
    {
      title: "Planejamento de Cronograma",
      desc: "Definimos o melhor dia e horário para a limpeza da sua frota na sua sede, aproveitando os momentos em que os carros já estão parados.",
    },
    {
      title: "Execução no Local",
      desc: "Nossa equipe vai até o espaço combinado com todo o maquinário profissional necessário, sem gerar sujeira no seu pátio.",
    },
    {
      title: "Controle por Veículo",
      desc: "Cada limpeza gera um relatório individualizado com fotos e checklists, para que você acompanhe o cuidado real com cada ativo.",
    },
  ];

  return (
    <section className="border-b border-border bg-transparent">
      <div className="container-page py-20 sm:py-24">
        <ScrollReveal>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-bold">
              Capítulo 3 — Como Funciona
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight tracking-tight">
              Operação silenciosa na sede da sua empresa.
            </h2>
            <p className="mt-4 text-secondary max-w-2xl leading-relaxed">
              O Plano Frota é desenhado para rodar no piloto automático. Você assina o contrato e nós passamos a cuidar de tudo, sem interromper as entregas ou a equipe comercial.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div key={step.title} className="surface-card p-6 border border-border/40 bg-card">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[color:var(--primary)]/15 text-[color:var(--limpow-blue-light)] font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefício de RH */}
          <div className="mt-12 surface-card-elevated p-8 border border-border bg-card-elevated">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] items-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <IconUsers size={20} className="text-[color:var(--limpow-blue-light)]" />
                  Ferramenta Extra de RH: Lavagens de Cortesia
                </h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed max-w-3xl">
                  Ao assinar o Plano Frota, você pode incluir cupons de lavagem de cortesia no contrato para serem oferecidos como benefícios internos aos seus colaboradores — excelente para campanhas de metas, prêmio de funcionário do mês ou reconhecimento operacional.
                </p>
              </div>
              <div>
                <span className="inline-block text-xs uppercase bg-[color:var(--primary)]/20 text-[color:var(--limpow-blue-light)] font-bold px-3 py-1.5 rounded-full border border-border-strong">
                  Benefício Exclusivo
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* Capítulo 4 — Parceria (postura de longo prazo, não fornecedor pontual) */
function Chapter4() {
  const values = [
    {
      icon: <IconShield size={24} />,
      title: "Segurança Jurídica",
      desc: "Contrato comercial formalizado, com responsabilidade civil e cobertura securitária para os serviços executados nos veículos.",
    },
    {
      icon: <IconDocument size={24} />,
      title: "Faturamento Facilitado",
      desc: "Nota fiscal emitida por período de faturamento, com boleto bancário consolidado. Facilidade total para a contabilidade da sua empresa.",
    },
    {
      icon: <IconClock size={24} />,
      title: "Relatórios de Entrega",
      desc: "Acesso a relatórios de conformidade e fotos antes/depois que atestam a qualidade e a frequência de lavagens contratadas.",
    },
  ];

  return (
    <section className="border-b border-border bg-card">
      <div className="container-page py-20 sm:py-24">
        <ScrollReveal>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-bold">
              Capítulo 4 — Parceria
            </div>
            {/* 2.2 Samsara: Linguagem de parceiro operacional ("Como trabalhamos juntos") */}
            <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight tracking-tight">
              Como trabalhamos juntos: compromisso operacional de longo prazo.
            </h2>
            <p className="mt-4 text-secondary max-w-2xl leading-relaxed">
              Não atuamos como um prestador de serviço avulso. Nos integramos à sua rotina operacional com pontualidade, relatórios e processos estruturados para apoiar o seu crescimento.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="surface-card p-6 border border-border/40 bg-card-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[color:var(--primary)]/15 text-[color:var(--limpow-blue-light)]">
                  {v.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* Capítulo 5 — Ação (CTA comercial) */
function Chapter5() {
  return (
    <section className="bg-transparent">
      <div className="container-page py-20 sm:py-28">
        <ScrollReveal>
          <div className="surface-card-elevated p-8 sm:p-12 border border-border/80 bg-card-elevated relative overflow-hidden">
            <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(40% 40% at 90% 90%, rgba(77,120,201,0.06), transparent 80%)" }} />
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--limpow-blue-light)] font-bold">
                  Capítulo 5 — Ação
                </div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-display leading-tight tracking-tight">
                  Pronto para otimizar os cuidados com a sua frota?
                </h2>
                <p className="mt-4 text-secondary leading-relaxed max-w-xl">
                  Fale diretamente com o Victor no WhatsApp para descrever o tamanho da sua frota e receber uma proposta personalizada em poucos minutos.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end justify-center">
                <WhatsAppCTA message={WPP_MESSAGES.empresas} label="Falar sobre o Plano Frota" />
                <a
                  href={`mailto:${SITE.email}?subject=Plano%20Frota%20Dr.%20Limpow`}
                  className="btn-secondary text-center w-full sm:w-auto"
                >
                  Enviar e-mail comercial
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
