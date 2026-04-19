import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main
        className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10
      md:py-14"
      >
        <div className="space-y-5 ">
          <h1 className="text-2xl font-bold md:text-4xl  ">Sobre</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Quando entrei no mercado de TI, meu objetivo era claro: aprender na
            prática como infraestrutura de verdade funciona. Em menos de 1 ano,
            conquistei 2 certificações AWS, coloquei pipelines CI/CD em produção
            e aprendi que infraestrutura bem feita é o que separa sistemas que
            escalam dos que quebram. <br />
            Sou DevOps Engineer com foco em AWS e GCP, atuando no dia a dia com
            Terraform, Docker, Kubernetes e GitHub Actions para construir
            ambientes seguros, resilientes e eficientes, Estou em formação de
            ADS pela Anhanguera e trago do meu histórico anterior habilidades de
            organização e autogestão que complementam o lado técnico. Sempre
            aberto para conversar sobre Cloud, DevOps e novas oportunidades.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experiência</h1>

          <ul className="border-l">
            {/* DevOps */}
            <li
              className="relative flex flex-col gap-1 p-6 
        before:absolute before:left-[-6px] before:top-1/2 
        before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full 
        before:bg-black dark:before:bg-white"
            >
              <span className="font-semibold md:text-lg">DevOps Engineer</span>
              <span className="font-light">CloudDog</span>
              <span className="text-sm text-gray-400">2025 - Atual</span>
              <span className="text-sm text-gray-800 dark:text-gray-200">
                Atuo como DevOps Engineer em um ambiente de consultoria cloud,
                apoiando múltiplos clientes em projetos de infraestrutura AWS.
                Principais atividades:
                <li>
                  • Provisionamento de infraestrutura como código com Terraform
                </li>
                <li>
                  • Criação e manutenção de pipelines CI/CD com GitHub Actions e
                  AWS CodePipeline
                </li>
                <li>
                  • Gerenciamento de containers com Docker e Kubernetes -
                  Monitoramento e observabilidade de ambientes AWS (CloudWatch),
                  Grafana e DataDog
                </li>
                <li>
                  • Suporte em projetos de migração e modernização de
                  infraestrutura
                </li>
                <li>Certificações obtidas durante o período:</li>
                <li>
                  • AWS Certified Cloud Practitioner (nov/2025) • AWS Certified
                  Solutions Architect – Associate
                </li>
              </span>
            </li>

            <li
              className="relative flex flex-col gap-1 p-6 
        before:absolute before:left-[-6px] before:top-1/2 
        before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full 
        before:bg-black dark:before:bg-white"
            >
              <span className="font-semibold md:text-lg">
                Jovem Aprendiz - Administração
              </span>
              <span className="font-light">CRAGEA</span>
              <span className="text-sm text-gray-400">2024 - 2025</span>
              <span className="text-sm text-gray-800 dark:text-gray-200">
                Auxiliei em tarefas administrativas, adquirindo habilidades de
                organização e gestão. Aprendi sobre processos empresariais e
                boas práticas administrativas. Desenvolvi competências de
                comunicação e trabalho em equipe. Bom uso em aplicativos como
                Excel, Word, E-mail e TOTVS Tokyo empresarial.
              </span>
            </li>
          </ul>
        </div>

        <div className="max-w-3xl space-y-8 ">
          <h1 className="text-2xl font-bold md:text-4xl ">
            Licenças e Certificados
          </h1>
          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                AWS Solutions Architect Associate (2026)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                A certificação AWS Solutions Architect Associate valida minha
                capacidade de projetar arquiteturas escaláveis, seguras,
                resilientes e com alta disponibilidade utilizando serviços da
                AWS. Com ela, demonstro conhecimento prático na construção de
                soluções bem arquitetadas, aplicando boas práticas dos pilares
                do Well-Architected Framework, incluindo performance, segurança,
                confiabilidade e otimização de custos. Além disso, evidencia
                minha habilidade em tomar decisões técnicas baseadas em
                requisitos de negócio, escolhendo os serviços mais adequados
                para cada cenário. Essa certificação reforça minha evolução como
                profissional de cloud, com foco em arquitetura de soluções
                robustas e preparadas para ambientes reais de produção.
              </p>
            </div>
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                AWS Cloud Practitioner (2025)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                A certificação AWS Cloud Practitioner valida meu conhecimento
                fundamental sobre computação em nuvem e sobre os principais
                serviços, conceitos e práticas da AWS. Com ela, demonstro
                compreensão sólida dos pilares de arquitetura, segurança,
                billing, suporte e do modelo de responsabilidade compartilhada,
                além de entender como a AWS entrega soluções escaláveis e
                confiáveis para diferentes tipos de aplicações. Essa
                certificação reforça minha base como profissional de cloud e me
                prepara para níveis mais avançados dentro do ecossistema AWS.
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                English - ESL (2025)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Concluí recentemente um curso de ESL – Inglês como Segundo
                Idioma, focado no desenvolvimento das habilidades essenciais de
                leitura, escrita, fala e compreensão auditiva. O curso
                proporcionou uma base sólida para a comunicação em ambientes
                acadêmicos e profissionais, ampliando minha capacidade de
                entender e me expressar com clareza em inglês. Essa certificação
                é um diferencial importante, especialmente em áreas como
                tecnologia e negócios, onde o inglês é frequentemente o idioma
                principal de documentação, ferramentas e comunicação
                internacional.
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                DevOps - Rocketseat (2025)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Curso focado nos princípios do DevOps, com ênfase na integração
                contínua (CI), entrega contínua (CD), automação de processos e
                colaboração entre times de desenvolvimento e operações. Entendi
                como práticas DevOps otimizam o ciclo de desenvolvimento,
                melhorando a qualidade, a entrega e a confiabilidade de
                aplicações.
              </p>
            </div>
          </div>
        </div>

        <section className=" px-6 py-10 ">
          <div className="max-w-2xl mx-auto space-y-8">
            <blockquote className="border-l-4 border-neutral-950 dark:border-neutral-50 pl-4 italic text-gray-800 dark:text-gray-400">
              “Em cada estação da vida, Deus tem um plano; Confie que tudo
              acontece no tempo dele.”
              <footer className="mt-2 text-sm text-gray-500 dark:text-gray-700">
                — Eclesiastes 3:11
              </footer>
            </blockquote>

            <blockquote className="border-l-4 border-neutral-950 dark:border-neutral-50 pl-4 italic text-gray-800 dark:text-gray-400">
              “Todo erro é uma instrução disfarçada. Aprender a depurar é
              aprender a crescer.”
              <footer className="mt-2 text-sm text-gray-500 dark:text-gray-700">
                — Desconhecido
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
