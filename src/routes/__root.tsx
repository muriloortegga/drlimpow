import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-secondary">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Algo deu errado ao carregar essa página
        </h1>
        <p className="mt-2 text-sm text-secondary">
          Tente recarregar ou voltar para o início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Tentar novamente
          </button>
          <a href="/" className="btn-secondary">
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0B1420" },
      { title: "Dr.Limpow — Higienização e estética automotiva a domicílio" },
      {
        name: "description",
        content:
          "Higienização de estofados, lavagem, enceramento, polimento e vitrificação a domicílio em Vargem Grande Paulista e Cotia. Atendimento para pessoa física e frotas corporativas.",
      },
      { name: "author", content: "Dr. Limpow" },
      { property: "og:site_name", content: "Dr. Limpow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Dr.Limpow — Higienização e estética automotiva a domicílio" },
      {
        property: "og:description",
        content:
          "Atendimento a domicílio em Vargem Grande Paulista e Cotia. Para pessoa física e frotas.",
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Dr.Limpow — Higienização e estética automotiva a domicílio" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/de56955a-bd1a-4c95-b01c-48adabf32934/id-preview-1b3ba239--1e3b5d84-e442-4174-8074-a5c52105baa1.lovable.app-1782492798645.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/de56955a-bd1a-4c95-b01c-48adabf32934/id-preview-1b3ba239--1e3b5d84-e442-4174-8074-a5c52105baa1.lovable.app-1782492798645.png" },
      { name: "description", content: "Dr. Limpow's Shine Hub offers professional automotive and upholstery cleaning services at your location." },
      { property: "og:description", content: "Dr. Limpow's Shine Hub offers professional automotive and upholstery cleaning services at your location." },
      { name: "twitter:description", content: "Dr. Limpow's Shine Hub offers professional automotive and upholstery cleaning services at your location." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Baloo+2:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Dr. Limpow",
          description:
            "Higienização e estética automotiva a domicílio. Atendimento para pessoa física e frotas corporativas.",
          areaServed: ["Vargem Grande Paulista", "Cotia"],
          address: {
            "@type": "PostalAddress",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
