"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const services = [
  {
    title: "Sites institucionais",
    description:
      "Sites profissionais, modernos e responsivos para apresentar sua marca com autoridade.",
  },
  {
    title: "Landing pages",
    description:
      "Páginas estratégicas focadas em conversão, captação de leads e campanhas digitais.",
  },
  {
    title: "Identidades visuais",
    description:
      "Criação de marcas, direção visual e sistemas gráficos com personalidade e consistência.",
  },
  {
    title: "Artes para redes sociais",
    description:
      "Peças criativas para Instagram, campanhas, anúncios e comunicação visual da sua marca.",
  },
];

const brandingGallery = Array.from({ length: 9 }, (_, index) => {
  const imageNumber = String(index + 1).padStart(2, "0");
  return `/images/portfolio/branding/branding-${imageNumber}.png`;
});

const reelsGallery = Array.from({ length: 2 }, (_, index) => {
  const videoNumber = String(index + 1).padStart(2, "0");
  return `/videos/portfolio/reels/reels-${videoNumber}.mp4`;
});

const webDesignGallery = Array.from({ length: 3 }, (_, index) => {
  const videoNumber = String(index + 1).padStart(2, "0");
  return `/videos/portfolio/webdesign/webdesign-${videoNumber}.mp4`;
});

const portfolio = [
  {
    title: "Direção Visual e Branding",
    description: "Identidade, artes e presença visual para marcas.",
    gallery: brandingGallery,
    type: "branding",
  },
  {
    title: "Web Design",
    description: "Sites modernos com estética, clareza e conversão.",
    type: "web",
  },
  {
    title: "Edição de Vídeo/Reels",
    description: "Conteúdo dinâmico para redes sociais e campanhas.",
    type: "reels",
  },
];

const reasons = [
  "Visual premium sem perder objetividade",
  "Design pensado para posicionamento e conversão",
  "Entrega com atenção a hierarquia, ritmo e acabamento",
];

const packages = [
  {
    name: "Landing Page Essencial",
    price: "Até 12x de R$ 83",
    pricePrefix: "Até 12x de",
    priceValue: "R$ 83",
    description:
      "Site estático completo para apresentar sua marca com clareza, profissionalismo e conversão.",
    features: [
      "Design exclusivo",
      "Layout responsivo",
      "Seção de serviços e contato",
      "Integração com WhatsApp",
      "Ideal para presença profissional",
    ],
    button: "Quero esse plano",
    href: "https://wa.me/5551994514083?text=Ol%C3%A1%2C%20Bruno%21%20Quero%20saber%20mais%20sobre%20o%20pacote%20Landing%20Page%20Essencial",
  },
  {
    name: "Landing Page Motion",
    price: "Até 12x de R$ 133",
    pricePrefix: "Até 12x de",
    priceValue: "R$ 133",
    description:
      "Site completo com animações, motion e mais impacto visual para destacar sua marca desde o primeiro acesso.",
    features: [
      "Design exclusivo",
      "Animações modernas",
      "Layout responsivo",
      "Seções estratégicas para conversão",
      "Visual premium e interativo",
    ],
    button: "Quero esse plano",
    href: "https://wa.me/5551994514083?text=Ol%C3%A1%2C%20Bruno%21%20Quero%20saber%20mais%20sobre%20o%20pacote%20Landing%20Page%20Motion",
    highlighted: true,
  },
  {
    name: "Design & Social Media",
    price: "Por demanda",
    priceValue: "Por demanda",
    description:
      "Artes personalizadas para redes sociais, campanhas e identidade visual conforme a necessidade da sua marca.",
    features: [
      "Posts e criativos personalizados",
      "Identidade visual consistente",
      "Materiais para campanhas",
      "Atendimento flexível",
      "Solução sob medida",
      "Edição de Vídeo/Reels",
    ],
    button: "Solicitar orçamento",
    href: "https://wa.me/5551994514083?text=Ol%C3%A1%2C%20Bruno%21%20Quero%20solicitar%20um%20or%C3%A7amento%20para%20Design%20%26%20Social%20Media",
  },
];

export default function Home() {
  const [isMobileViewport, setIsMobileViewport] = useState(true);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(
    null,
  );
  const [activeReelsIndex, setActiveReelsIndex] = useState<number | null>(null);
  const [activeWebDesignIndex, setActiveWebDesignIndex] = useState<
    number | null
  >(null);

  const isBrandingGalleryOpen = activeGalleryIndex !== null;
  const isReelsGalleryOpen = activeReelsIndex !== null;
  const isWebDesignGalleryOpen = activeWebDesignIndex !== null;
  const activeBrandingImage =
    activeGalleryIndex === null ? brandingGallery[0] : brandingGallery[activeGalleryIndex];
  const activeReelsVideo =
    activeReelsIndex === null ? reelsGallery[0] : reelsGallery[activeReelsIndex];
  const activeWebDesignVideo =
    activeWebDesignIndex === null
      ? webDesignGallery[0]
      : webDesignGallery[activeWebDesignIndex];

  const closeBrandingGallery = () => setActiveGalleryIndex(null);
  const closeReelsGallery = () => setActiveReelsIndex(null);
  const closeWebDesignGallery = () => setActiveWebDesignIndex(null);

  const showPreviousBrandingImage = () => {
    setActiveGalleryIndex((currentIndex) => {
      if (currentIndex === null) return brandingGallery.length - 1;
      return (currentIndex - 1 + brandingGallery.length) % brandingGallery.length;
    });
  };

  const showNextBrandingImage = () => {
    setActiveGalleryIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex + 1) % brandingGallery.length;
    });
  };

  const showPreviousReelsVideo = () => {
    setActiveReelsIndex((currentIndex) => {
      if (currentIndex === null) return reelsGallery.length - 1;
      return (currentIndex - 1 + reelsGallery.length) % reelsGallery.length;
    });
  };

  const showNextReelsVideo = () => {
    setActiveReelsIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex + 1) % reelsGallery.length;
    });
  };

  const showPreviousWebDesignVideo = () => {
    setActiveWebDesignIndex((currentIndex) => {
      if (currentIndex === null) return webDesignGallery.length - 1;
      return (
        (currentIndex - 1 + webDesignGallery.length) % webDesignGallery.length
      );
    });
  };

  const showNextWebDesignVideo = () => {
    setActiveWebDesignIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex + 1) % webDesignGallery.length;
    });
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobileViewport(mobileQuery.matches);

    updateViewport();
    mobileQuery.addEventListener("change", updateViewport);

    return () => {
      mobileQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero-scroll]");
    if (
      !hero ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 767px)").matches
    ) {
      return;
    }

    let target = 0;
    let current = 0;
    let ticking = false;
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const apply = (progress: number) => {
      hero.style.setProperty("--hero-progress", progress.toFixed(4));
      hero.style.setProperty(
        "--hero-bg-scale",
        (1.08 - progress * 0.055).toFixed(4),
      );
      hero.style.setProperty(
        "--hero-bg-x",
        `${(progress * -1.4).toFixed(3)}vw`,
      );
      hero.style.setProperty(
        "--hero-bg-y",
        `${(progress * -0.8).toFixed(3)}vh`,
      );
      hero.style.setProperty(
        "--hero-content-x",
        `${(progress * -28).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-content-y",
        `${(progress * -18).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-title-x",
        `${(progress * -14).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-title-y",
        `${(progress * -10).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-logo-y",
        `${(progress * -8).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-chips-x",
        `${(progress * -10).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-chips-y",
        `${(progress * -4).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-sheen-x",
        `${(progress * 18).toFixed(2)}vw`,
      );
      hero.style.setProperty(
        "--hero-sheen-opacity",
        (0.48 - progress * 0.2).toFixed(3),
      );
      hero.style.setProperty(
        "--hero-glow-opacity",
        (0.72 + progress * 0.16).toFixed(3),
      );
      hero.style.setProperty(
        "--hero-glow-left-x",
        `${(progress * 42).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-glow-left-y",
        `${(progress * -18).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-glow-left-scale",
        (1 + progress * 0.12).toFixed(4),
      );
      hero.style.setProperty(
        "--hero-glow-right-x",
        `${(progress * -52).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-glow-right-y",
        `${(progress * -24).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-glow-right-scale",
        (1 + progress * 0.08).toFixed(4),
      );
    };

    const update = () => {
      current += (target - current) * 0.14;
      apply(current);

      if (Math.abs(target - current) > 0.001) {
        frame = requestAnimationFrame(update);
        return;
      }

      current = target;
      apply(current);
      ticking = false;
    };

    const measure = () => {
      const rect = hero.getBoundingClientRect();
      target = clamp(-rect.top / Math.max(1, rect.height * 0.82));
      if (!ticking) {
        ticking = true;
        frame = requestAnimationFrame(update);
      }
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (
      !isBrandingGalleryOpen &&
      !isReelsGalleryOpen &&
      !isWebDesignGalleryOpen
    ) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeBrandingGallery();
        closeReelsGallery();
        closeWebDesignGallery();
        return;
      }

      if (event.key === "ArrowLeft") {
        if (isBrandingGalleryOpen) {
          showPreviousBrandingImage();
          return;
        }

        if (isWebDesignGalleryOpen) {
          showPreviousWebDesignVideo();
          return;
        }

        showPreviousReelsVideo();
        return;
      }

      if (event.key === "ArrowRight") {
        if (isBrandingGalleryOpen) {
          showNextBrandingImage();
          return;
        }

        if (isWebDesignGalleryOpen) {
          showNextWebDesignVideo();
          return;
        }

        showNextReelsVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isBrandingGalleryOpen, isReelsGalleryOpen, isWebDesignGalleryOpen]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouchViewport = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;

    const setupPointerSpotlight = ({
      selector,
      xProperty,
      yProperty,
      activeProperty,
    }: {
      selector: string;
      xProperty: string;
      yProperty: string;
      activeProperty?: string;
    }) => {
      const section = document.querySelector<HTMLElement>(selector);
      if (!section) return undefined;

      let frame = 0;
      let nextX = "50%";
      let nextY = "50%";
      let spotlightActive = false;

      const setCenter = () => {
        spotlightActive = false;
        if (frame) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
        nextX = "50%";
        nextY = "50%";
        section.style.setProperty(xProperty, nextX);
        section.style.setProperty(yProperty, nextY);
        if (activeProperty) section.style.setProperty(activeProperty, "0");
      };

      setCenter();
      if (reduceMotion || isTouchViewport) return undefined;

      const flushSpotlight = () => {
        section.style.setProperty(xProperty, nextX);
        section.style.setProperty(yProperty, nextY);
        if (activeProperty) {
          section.style.setProperty(
            activeProperty,
            spotlightActive ? "1" : "0",
          );
        }
        frame = 0;
      };

      const updateSpotlight = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;

        const rect = section.getBoundingClientRect();
        const x = Math.max(
          0,
          Math.min(100, ((event.clientX - rect.left) / rect.width) * 100),
        );
        const y = Math.max(
          0,
          Math.min(100, ((event.clientY - rect.top) / rect.height) * 100),
        );

        nextX = `${x.toFixed(2)}%`;
        nextY = `${y.toFixed(2)}%`;
        spotlightActive = true;

        if (!frame) {
          frame = requestAnimationFrame(flushSpotlight);
        }
      };

      section.addEventListener("pointermove", updateSpotlight, {
        passive: true,
      });
      section.addEventListener("pointerleave", setCenter);

      return () => {
        section.removeEventListener("pointermove", updateSpotlight);
        section.removeEventListener("pointerleave", setCenter);
        if (frame) cancelAnimationFrame(frame);
      };
    };

    const cleanups = [
      setupPointerSpotlight({
        selector: "[data-services-spotlight]",
        xProperty: "--mouse-x",
        yProperty: "--mouse-y",
      }),
    ];

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".motion-reveal"));
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            return;
          }

          entry.target.classList.remove("is-visible");
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.18 },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05030d] text-white">
      <section
        data-hero-scroll
        className="hero-scroll-motion relative min-h-screen overflow-hidden bg-[#05030d] px-6 py-7 sm:px-10 lg:px-12 xl:px-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(88,28,135,0.48),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(219,39,119,0.32),transparent_30%),radial-gradient(circle_at_72%_76%,rgba(37,99,235,0.32),transparent_35%),linear-gradient(135deg,#05030d_0%,#10051f_42%,#020617_100%)]" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/brunoarts/brunoarts-hero-bg.png"
          className="hero-motion-bg absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-80 mix-blend-screen"
        >
          <source src="/videos/brunoarts-hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-motion-sheen absolute inset-y-[-20%] left-[18%] w-[36vw] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(217,70,239,0.16),rgba(96,165,250,0.08),transparent)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#05030d_0%,rgba(5,3,13,0.92)_14%,rgba(5,3,13,0.58)_34%,rgba(5,3,13,0.12)_62%,rgba(5,3,13,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(217,70,239,0.12),transparent_34%),radial-gradient(circle_at_84%_56%,rgba(59,130,246,0.18),transparent_42%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/8 to-transparent" />
        <div className="hero-motion-glow hero-motion-glow-left absolute -left-32 top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="hero-motion-glow hero-motion-glow-right absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />

        <nav className="hero-logo-enter hero-motion-logo relative z-20 mx-auto flex max-w-none items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-3.5 text-white"
          >
            <span className="relative flex size-12 items-center justify-center">
              <span className="absolute inset-0 rounded-[18px] bg-fuchsia-300/8 blur-xl" />
              <svg
                aria-hidden="true"
                className="relative size-12 drop-shadow-[0_0_18px_rgba(217,70,239,0.28)]"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M12 38V10H25.2C30.4 10 33.5 12.8 33.5 17.1C33.5 20.1 31.9 22.2 29.2 23.2C32.7 24 35 26.4 35 30.1C35 35 31.4 38 25.8 38H12Z"
                  stroke="url(#ba-mark-gradient)"
                  strokeWidth="2.3"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 21.5H25C27 21.5 28.4 20.3 28.4 18.4C28.4 16.4 27 15.3 24.9 15.3H18V21.5Z"
                  stroke="url(#ba-mark-gradient)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 32.7H25.6C28.1 32.7 29.6 31.4 29.6 29.2C29.6 27 28 25.8 25.4 25.8H18V32.7Z"
                  stroke="url(#ba-mark-gradient)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.5 38L40 28.6L44.5 38"
                  stroke="url(#ba-mark-gradient)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.2 34.5H42.8"
                  stroke="url(#ba-mark-gradient)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="ba-mark-gradient"
                    x1="10"
                    x2="45"
                    y1="9"
                    y2="39"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F5D0FE" />
                    <stop offset="0.48" stopColor="#C084FC" />
                    <stop offset="1" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.36em] text-zinc-100">
              BRUNOARTS
            </span>
          </a>
          <div className="hidden items-center gap-6 text-[0.68rem] font-black uppercase tracking-[0.24em] text-zinc-200 sm:flex">
            <a className="transition hover:text-white" href="#servicos">
              CRIAR
            </a>
            <a className="transition hover:text-white" href="#portfolio">
              CONECTAR
            </a>
            <a className="transition hover:text-white" href="#contato">
              TRANSFORMAR
            </a>
          </div>
        </nav>

        <div
          id="inicio"
          className="relative z-10 mx-auto flex min-h-[calc(100vh-9.5rem)] max-w-none items-center py-14"
        >
          <div className="hero-copy-enter hero-motion-content max-w-3xl lg:max-w-[760px]">
            <p className="mb-7 text-xs font-black uppercase tracking-[0.48em] text-fuchsia-200/85">
              PORTFÓLIO
            </p>
            <h1 className="hero-motion-title text-6xl font-black uppercase leading-[0.86] tracking-tight text-white drop-shadow-[0_0_30px_rgba(217,70,239,0.2)] sm:text-8xl lg:text-[7.8rem] xl:text-[8.3rem]">
              BRUNOARTS
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.26em] text-zinc-200 sm:text-sm">
              <span className="border-l-2 border-fuchsia-300 pl-4">
                WEB DESIGNER
              </span>
              <span className="border-l-2 border-blue-300 pl-4">
                DESIGNER GRÁFICO
              </span>
            </div>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Criação de sites, identidades visuais e artes que destacam sua
              marca.
            </p>
            <p className="mt-8 max-w-3xl text-2xl font-black uppercase leading-tight tracking-[0.12em] text-white sm:text-4xl">
              DESIGN QUE CONECTA. IDENTIDADE QUE MARCA.
            </p>
          </div>
        </div>

        <div className="hero-chips-enter hero-motion-chips relative z-20 mx-auto flex max-w-none flex-wrap gap-3 pb-2 text-xs font-bold uppercase tracking-[0.24em] text-zinc-300">
          {["SITES", "IDENTIDADES", "ARTES", "ESTRATÉGIA"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="sobre" className="motion-section px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div className="motion-reveal motion-reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-fuchsia-200">
              Sobre o BrunoArts
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300 sm:text-base">
              <p>
                Sou designer há 7 anos, com experiência prática na criação de
                conteúdo visual, identidade de marca, web design e materiais
                estratégicos para redes sociais e campanhas de divulgação.
              </p>
              <p>
                Um dos meus principais projetos foi como designer e videomaker
                PJ da marca de energético orgânico Organique, onde atuei por 9
                meses desenvolvendo conteúdo para social media, materiais para
                feiras, peças publicitárias e criativos para tráfego pago.
              </p>
              <p>
                Também trabalhei na construção visual da Fastpass, uma marca de
                café orgânico do mesmo grupo, contribuindo com a criação de
                conteúdo e identidade em uma fase inicial do negócio.
              </p>
              <p>
                Além disso, atuei por 4 anos como social media para academias,
                criando campanhas, artes e estratégias visuais voltadas para
                crescimento e posicionamento digital. Também desenvolvi projetos
                como freelancer para diversos nichos, incluindo rastreamento
                veicular, semijoias, açaí e outros segmentos.
              </p>
            </div>
          </div>
          <div className="motion-reveal motion-reveal-up motion-delay-1">
            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
              Design com presença, estratégia e acabamento.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              O BrunoArts cria experiências visuais para marcas que precisam
              parecer profissionais desde o primeiro contato: sites, identidades
              e peças digitais com estética forte e comunicação direta.
            </p>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        data-services-spotlight
        className="motion-section group/services relative overflow-hidden border-y border-white/10 bg-white/[0.03] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="absolute inset-0 scale-[1.06] bg-[url('/assets/brunoarts/brunoarts-services-bg.png')] bg-cover bg-center opacity-[0.38] blur-[14px] transition duration-700 ease-out group-hover/services:scale-[1.04] group-hover/services:opacity-[0.56] group-hover/services:blur-[7px]" />
        <div className="services-spotlight absolute inset-0 scale-[1.04] bg-[url('/assets/brunoarts/brunoarts-services-bg.png')] bg-cover bg-center opacity-0 blur-[3px] transition duration-500 ease-out group-hover/services:opacity-100" />
        <div className="absolute inset-0 bg-[#05030d]/64 backdrop-blur-[1px] transition duration-700 ease-out group-hover/services:bg-[#05030d]/52" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(147,51,234,0.14),transparent_34%),linear-gradient(90deg,rgba(5,3,13,0.76),rgba(5,3,13,0.36),rgba(5,3,13,0.74))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="motion-reveal motion-reveal-up mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-200">
                Serviços
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
                O que eu faço
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-300">
              Soluções visuais para marcas que querem vender, comunicar e serem
              lembradas com mais força.
            </p>
          </div>
          <div className="motion-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="service-motion-card motion-card motion-reveal motion-reveal-up group relative min-h-72 overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.055] p-6 shadow-[0_0_45px_rgba(88,28,135,0.16)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-fuchsia-200/35 hover:bg-white/[0.085] hover:shadow-[0_0_70px_rgba(217,70,239,0.18)]"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-200/70 to-transparent opacity-70" />
                <div className="absolute -right-12 -top-12 size-32 rounded-full bg-fuchsia-400/10 blur-2xl transition duration-300 group-hover:bg-fuchsia-300/18" />
                <div className="absolute -bottom-14 left-8 size-28 rounded-full bg-blue-400/10 blur-2xl" />
                <div className="relative flex h-full flex-col">
                  <span className="mb-8 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-black text-fuchsia-100 shadow-[0_0_24px_rgba(217,70,239,0.12)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-zinc-300">
                    {service.description}
                  </p>
                  <span className="mt-auto pt-8">
                    <span className="block h-px w-16 bg-gradient-to-r from-fuchsia-300 to-blue-300 opacity-70 transition duration-300 group-hover:w-24 group-hover:opacity-100" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="portfolio" className="motion-section px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="motion-reveal motion-reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-fuchsia-200">
              Portfólio
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase tracking-tight sm:text-6xl">
              Projetos com impacto visual e intenção.
            </h2>
          </div>
          <div className="motion-stagger mt-12 grid gap-5 md:grid-cols-3">
            {portfolio.map((item) => (
              <article
                key={item.title}
                className="portfolio-motion-card motion-card motion-reveal motion-reveal-up relative min-h-64 overflow-hidden rounded-[8px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-6 shadow-[0_0_60px_rgba(88,28,135,0.14)]"
              >
                {item.type === "branding" ? (
                  <button
                    type="button"
                    onClick={() => setActiveGalleryIndex(0)}
                    className="group/branding-preview relative flex h-full w-full overflow-hidden text-left"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-[72%] overflow-hidden rounded-[8px]">
                      <Image
                        src="/images/portfolio/branding/branding-01.png"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 92vw, 33vw"
                        className="scale-110 object-cover object-center opacity-38 blur-[5px] brightness-[0.62] saturate-110 transition duration-500 group-hover/branding-preview:scale-[1.15] group-hover/branding-preview:opacity-48"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,13,0.2)_0%,rgba(5,3,13,0.54)_48%,rgba(5,3,13,0.84)_100%),radial-gradient(circle_at_50%_52%,rgba(147,51,234,0.18),transparent_58%)]" />
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,13,0.42)_0%,transparent_52%,rgba(5,3,13,0.46)_100%)]" />
                    <span className="relative z-10 flex h-full flex-col justify-between">
                      <h3 className="text-2xl font-bold leading-tight text-white">
                        {item.title}
                      </h3>
                      <span className="max-w-[15rem] text-sm leading-6 text-zinc-300">
                        {item.description}
                      </span>
                    </span>
                  </button>
                ) : item.type === "reels" ? (
                  <button
                    type="button"
                    onClick={() => setActiveReelsIndex(0)}
                    className="group/reels-preview relative flex h-full w-full overflow-hidden text-left"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-[74%] overflow-hidden rounded-[8px]">
                      {isMobileViewport ? (
                        <div className="h-full w-full scale-110 bg-[radial-gradient(circle_at_50%_38%,rgba(217,70,239,0.22),rgba(5,3,13,0.66)_54%,rgba(5,3,13,0.92)_100%)] opacity-80" />
                      ) : (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="h-full w-full scale-110 object-cover object-center opacity-34 blur-[5px] brightness-[0.52] saturate-110 transition duration-500 group-hover/reels-preview:scale-[1.15] group-hover/reels-preview:opacity-44"
                        >
                          <source src="/videos/portfolio/reels/reels-01.mp4" type="video/mp4" />
                        </video>
                      )}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,13,0.18)_0%,rgba(5,3,13,0.58)_52%,rgba(5,3,13,0.86)_100%),radial-gradient(circle_at_50%_52%,rgba(217,70,239,0.16),transparent_58%)]" />
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,13,0.46)_0%,transparent_50%,rgba(5,3,13,0.5)_100%)]" />
                    <span className="relative z-10 flex h-full flex-col justify-between">
                      <h3 className="text-2xl font-bold leading-tight text-white">
                        {item.title}
                      </h3>
                      <span className="max-w-[15rem] text-sm leading-6 text-zinc-300">
                        {item.description}
                      </span>
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveWebDesignIndex(0)}
                    className="group/web-preview relative flex h-full w-full overflow-hidden text-left"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-[74%] overflow-hidden rounded-[8px]">
                      {isMobileViewport ? (
                        <div className="h-full w-full scale-110 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(147,51,234,0.15),rgba(5,3,13,0.88))] opacity-80" />
                      ) : (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="h-full w-full scale-110 object-cover object-center opacity-36 blur-[4px] brightness-[0.54] saturate-110 transition duration-500 group-hover/web-preview:scale-[1.14] group-hover/web-preview:opacity-46"
                        >
                          <source
                            src="/videos/portfolio/webdesign/webdesign-01.mp4"
                            type="video/mp4"
                          />
                        </video>
                      )}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,13,0.22)_0%,rgba(5,3,13,0.56)_50%,rgba(5,3,13,0.86)_100%),radial-gradient(circle_at_50%_48%,rgba(147,51,234,0.16),transparent_58%)]" />
                    </div>
                    <span className="relative z-10 flex h-full flex-col justify-between">
                      <h3 className="text-2xl font-bold leading-tight text-white">
                        {item.title}
                      </h3>
                      <span className="max-w-[15rem] text-sm leading-6 text-zinc-300">
                        {item.description}
                      </span>
                    </span>
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {isBrandingGalleryOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria Direção Visual e Branding"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030008]/78 px-4 py-6 backdrop-blur-xl sm:px-8"
          onClick={closeBrandingGallery}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/18 bg-white/[0.08] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.52)] backdrop-blur-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,208,254,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.035))]" />
            <button
              type="button"
              aria-label="Fechar galeria"
              onClick={closeBrandingGallery}
              className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/16 bg-black/30 text-white shadow-[0_0_24px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:bg-white/12"
            >
              <X className="size-5" />
            </button>

            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between gap-4 pr-12 text-xs font-black uppercase tracking-[0.28em] text-fuchsia-100">
                <span>Direção Visual e Branding</span>
                <span>
                  {String((activeGalleryIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                  {String(brandingGallery.length).padStart(2, "0")}
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[18px] border border-white/12 bg-black/32">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={activeBrandingImage}
                    alt={`Direção Visual e Branding ${String(
                      (activeGalleryIndex ?? 0) + 1,
                    ).padStart(2, "0")}`}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 86vw, 960px"
                    className="h-full w-full object-contain"
                  />
                </div>

                <button
                  type="button"
                  aria-label="Imagem anterior"
                  onClick={showPreviousBrandingImage}
                  className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-black/34 text-white shadow-[0_0_24px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:bg-white/14 sm:left-5 sm:size-12"
                >
                  <ChevronLeft className="size-6" />
                </button>

                <button
                  type="button"
                  aria-label="Próxima imagem"
                  onClick={showNextBrandingImage}
                  className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-black/34 text-white shadow-[0_0_24px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:bg-white/14 sm:right-5 sm:size-12"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isWebDesignGalleryOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria Web Design"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030008]/80 px-4 py-5 backdrop-blur-xl sm:px-8"
          onClick={closeWebDesignGallery}
        >
          <div
            className="relative flex max-h-[94vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[28px] border border-white/18 bg-white/[0.08] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,208,254,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.035))]" />
            <button
              type="button"
              aria-label="Fechar galeria web design"
              onClick={closeWebDesignGallery}
              className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/16 bg-black/30 text-white shadow-[0_0_24px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:bg-white/12"
            >
              <X className="size-5" />
            </button>

            <div className="relative z-10 w-full">
              <div className="mb-4 flex items-center justify-between gap-4 pr-12 text-xs font-black uppercase tracking-[0.28em] text-fuchsia-100">
                <span>Web Design</span>
                <span>
                  {String((activeWebDesignIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                  {String(webDesignGallery.length).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mx-auto flex max-h-[78vh] w-full items-center justify-center overflow-hidden rounded-[22px] border border-white/12 bg-black/42 shadow-[0_0_70px_rgba(147,51,234,0.16)]">
                <div className="aspect-video max-h-[78vh] w-full">
                  <video
                    key={activeWebDesignVideo}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  >
                    <source src={activeWebDesignVideo} type="video/mp4" />
                  </video>
                </div>

                <button
                  type="button"
                  aria-label="Vídeo web anterior"
                  onClick={showPreviousWebDesignVideo}
                  className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-black/42 text-white shadow-[0_0_24px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:bg-white/14 sm:left-5 sm:size-12"
                >
                  <ChevronLeft className="size-6" />
                </button>

                <button
                  type="button"
                  aria-label="Próximo vídeo web"
                  onClick={showNextWebDesignVideo}
                  className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-black/42 text-white shadow-[0_0_24px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:bg-white/14 sm:right-5 sm:size-12"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isReelsGalleryOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria Edição de Vídeo/Reels"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030008]/80 px-4 py-5 backdrop-blur-xl sm:px-8"
          onClick={closeReelsGallery}
        >
          <div
            className="relative flex max-h-[94vh] w-full max-w-3xl items-center justify-center overflow-hidden rounded-[28px] border border-white/18 bg-white/[0.08] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,208,254,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.035))]" />
            <button
              type="button"
              aria-label="Fechar galeria de reels"
              onClick={closeReelsGallery}
              className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/16 bg-black/30 text-white shadow-[0_0_24px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:bg-white/12"
            >
              <X className="size-5" />
            </button>

            <div className="relative z-10 w-full">
              <div className="mb-4 flex items-center justify-between gap-4 pr-12 text-xs font-black uppercase tracking-[0.28em] text-fuchsia-100">
                <span>Edição de Vídeo/Reels</span>
                <span>
                  {String((activeReelsIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                  {String(reelsGallery.length).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mx-auto flex max-h-[78vh] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[22px] border border-white/12 bg-black/42 shadow-[0_0_70px_rgba(147,51,234,0.16)]">
                <div className="aspect-[9/16] max-h-[78vh] w-full">
                  <video
                    key={activeReelsVideo}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  >
                    <source src={activeReelsVideo} type="video/mp4" />
                  </video>
                </div>

                <button
                  type="button"
                  aria-label="Reel anterior"
                  onClick={showPreviousReelsVideo}
                  className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-black/42 text-white shadow-[0_0_24px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:bg-white/14 sm:left-5 sm:size-12"
                >
                  <ChevronLeft className="size-6" />
                </button>

                <button
                  type="button"
                  aria-label="Próximo reel"
                  onClick={showNextReelsVideo}
                  className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-black/42 text-white shadow-[0_0_24px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:bg-white/14 sm:right-5 sm:size-12"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <section id="contratar" className="motion-section bg-[#080513] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="motion-reveal motion-reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-200">
              Por que me contratar
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
              Visual bonito precisa ter função.
            </h2>
          </div>
          <div className="motion-stagger space-y-4">
            {reasons.map((reason, index) => (
              <article
                key={reason}
                className="motion-reveal motion-reveal-right flex gap-5 border-b border-white/10 pb-5"
              >
                <span className="text-sm font-black text-fuchsia-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xl font-semibold leading-8 text-white">
                  {reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pacotes" className="motion-section relative overflow-hidden bg-[#05030d] px-6 py-18 sm:px-10 sm:py-20 lg:px-16">
        {isMobileViewport ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(147,51,234,0.18),transparent_34%),linear-gradient(180deg,rgba(5,3,13,0.82),rgba(5,3,13,0.94))]" />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          >
            <source src="/videos/brunoarts-packages-bg.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,13,0.72)_0%,rgba(5,3,13,0.62)_42%,rgba(5,3,13,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(147,51,234,0.13),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(217,70,239,0.1),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="motion-reveal motion-reveal-up mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-fuchsia-200">
              BrunoArts
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase tracking-[0.08em] text-white sm:text-5xl">
              Pacotes
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              Escolha a solução ideal para tirar seu projeto do papel com visual
              profissional, presença digital e mais autoridade para sua marca.
            </p>
          </div>

          <div className="motion-stagger packages-track no-scrollbar mt-11 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3 lg:items-center">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`package-motion-card motion-card motion-reveal motion-reveal-scale group relative flex min-h-[455px] flex-[0_0_84vw] snap-center flex-col overflow-hidden rounded-[22px] border p-5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 sm:p-7 md:min-h-[500px] md:flex-auto md:rounded-[28px] ${
                  item.highlighted
                    ? "border-fuchsia-200/28 bg-white/[0.075] shadow-[0_0_58px_rgba(217,70,239,0.16)] lg:min-h-[535px] lg:scale-[1.015]"
                    : "border-white/12 bg-white/[0.05] shadow-[0_0_42px_rgba(88,28,135,0.12)] hover:border-fuchsia-200/24 hover:shadow-[0_0_54px_rgba(147,51,234,0.14)]"
                }`}
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-200/55 to-transparent" />
                <div className="absolute -right-16 -top-16 size-40 rounded-full bg-fuchsia-400/8 blur-3xl transition duration-300 group-hover:bg-fuchsia-300/14" />
                <div className="absolute -bottom-20 left-8 size-36 rounded-full bg-blue-400/8 blur-3xl" />
                {item.highlighted ? (
                  <span className="relative mb-5 w-fit rounded-full border border-fuchsia-200/28 bg-white/[0.08] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-fuchsia-100 shadow-[0_0_24px_rgba(217,70,239,0.12)] backdrop-blur-xl">
                    Mais escolhido
                  </span>
                ) : (
                  <span className="relative mb-5 h-9" />
                )}

                <div className="relative flex flex-1 flex-col">
                  <div>
                    <h3 className="text-[1.35rem] font-bold leading-tight tracking-normal text-white sm:text-2xl">
                      {item.name}
                    </h3>
                    <div className="mt-4 h-px w-20 bg-gradient-to-r from-fuchsia-200/70 via-blue-200/40 to-transparent" />
                  </div>
                  <div className="mt-5">
                    {item.pricePrefix ? (
                      <span className="block text-lg font-medium leading-none text-zinc-300 sm:text-xl">
                        {item.pricePrefix}
                      </span>
                    ) : null}
                    <strong
                      className={`mt-1 block bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text font-black leading-none tracking-tight text-transparent drop-shadow-[0_0_18px_rgba(217,70,239,0.12)] ${
                        item.pricePrefix
                          ? "text-4xl sm:text-[2.65rem]"
                          : "text-3xl sm:text-[2.35rem]"
                      }`}
                    >
                      {item.priceValue ?? item.price}
                    </strong>
                  </div>
                  <p className="mt-4 min-h-20 text-sm leading-7 text-zinc-300">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3 pb-8">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-zinc-200"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-fuchsia-300 to-blue-300 shadow-[0_0_10px_rgba(217,70,239,0.38)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3">
                    <a
                      href={item.href}
                      target="_blank"
                    rel="noopener noreferrer"
                      className="package-button-motion inline-flex h-12 w-full items-center justify-center rounded-full border border-white/16 bg-white/[0.055] px-5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-[0_0_26px_rgba(147,51,234,0.12)] backdrop-blur-2xl transition duration-300 hover:border-fuchsia-200/38 hover:bg-fuchsia-200/[0.09] hover:shadow-[0_0_38px_rgba(217,70,239,0.18)]"
                    >
                      {item.button}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="relative flex min-h-[520px] items-center overflow-hidden border-t border-white/10 px-6 py-20 sm:min-h-[560px] sm:px-10 sm:py-24 lg:min-h-[560px] lg:px-16"
      >
        <div className="contact-bg-base absolute inset-0 bg-[url('/assets/brunoarts/brunoarts-contact-bg.png')] bg-cover bg-center opacity-[0.42]" />
        <div className="contact-overlay-primary absolute inset-0" />
        <div className="contact-overlay-depth absolute inset-0" />
        <div className="contact-motion motion-stagger relative z-10 mx-auto max-w-5xl text-center">
          <p className="contact-reveal motion-reveal motion-reveal-up text-xs font-black uppercase tracking-[0.4em] text-fuchsia-200">
            Contato
          </p>
          <h2 className="contact-reveal motion-reveal motion-reveal-up mt-5 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Vamos criar uma presença visual mais forte?
          </h2>
          <p className="contact-reveal motion-reveal motion-reveal-up mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Fale comigo para transformar sua marca em uma experiência visual
            mais clara, profissional e memorável.
          </p>
          <a
            href="https://wa.me/5551994514083?text=Ol%C3%A1%2C%20Bruno%21%20Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button-motion contact-reveal motion-reveal motion-reveal-up mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-fuchsia-100"
          >
            Entre em contato
          </a>
        </div>
      </section>
    </main>
  );
}
