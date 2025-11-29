import React from "react";
import image from "/public/profile2.png";
import {
  Sun,
  Moon,
  MapPinned,
  Mail,
  MailPlus,
  Github,
  Linkedin,
} from "lucide-react";
import aws from "/public/awscp.png";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div
      className="min-h-screen flex-1 relative p-10 transition-all  duration-500 dark:bg-black dark:text-white
    sm:border-r dark:border-gray-700"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={image}
            alt="profile"
            className="w-36 h-36 rounded-full object-cover"
          />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Kayke <span>Peres</span>
            </h1>
            <h3 className="text-xl font-light">DevOps Engineer</h3>
          </div>
          <button
            className="absolute right-10 top-10 "
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <Sun className="text-2xl " />
            ) : (
              <Moon className="text-2xl" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3 ">
            <li className="flex items-center gap-2">
              <MapPinned className="text-xl" />
              <span>São Paulo, Suzano</span>
            </li>
            <li className="flex items-center gap-2 ">
              <Mail className="text-xl" />
              <span>
                kaykeperes2910@gmail.com{" "}
                <span className="text-gray-500">ou,</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MailPlus className="text-xl" />
              <span>kaykeperes2502@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-b-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">REDES SOCIAIS</h1>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Github className="text-xl" />
              <span>@Github/KaykePeresD</span>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="text-xl" />
              <span>@Linkedin/Kayke-Peres</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-b-gray-700 ">
          <h1 className="text-base font-semibold md:text-2xl">
            FORMAÇÃO ACADÊMICA
          </h1>
          <ul>
            <li
              className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px]
                    before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black
                    dark:before:bg-white before:transform"
            >
              <span className="font-semibold md:text-lg">
                Analíse Desenvolvimento de Sistemas
              </span>
              <span className="font-light">Universidade Anhanguera</span>
              <span className="text-sm text-gray-400">Em andamento</span>
              <span className="text-sm text-gray-400">2025 - 2027</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-b-gray-700 ">
          <h1 className="text-base font-semibold md:text-2xl">STACK ATUAL</h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span
                className="rounded-xl bg-black text-white p-3 text-center dark:text-black 
                    dark:bg-white"
              >
                HTML
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center dark:text-black 
                    dark:bg-white"
              >
                CSS
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center dark:text-black 
                    dark:bg-white"
              >
                JavaScript
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center dark:text-black 
                    dark:bg-white"
              >
                ReactJS
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center dark:text-black 
                    dark:bg-white"
              >
                TailwindCSS
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center dark:text-black 
                    dark:bg-white"
              >
                Terraform
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center dark:text-black 
                    dark:bg-white"
              >
                AWS
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-b-gray-700 ">
          <h1 className="text-base font-semibold md:text-2xl">
            CERTIFICAÇÕES AWS
          </h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className="w-36 h-36">
                <img src={aws} alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5  p-5 dark:border-b-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">IDIOMAS</h1>
          <ul className="flex list-disc flex-wrap gap-12 md:text-lg ">
            <li>
              Português - <span className="text-gray-500">Idioma Nativo</span>
            </li>
            <li>
              Inglês -{" "}
              <span className="text-gray-500">
                Compreendo textos inteiros. Mas com dificuldades em discussões.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
