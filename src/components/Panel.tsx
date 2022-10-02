import Button from "./form/Button";
import presentationImage from "../assets/telework.webp";
import openLinkInNewTab from "../utils/openLinkInNewTab";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import links from "../utils/links";

export default function Panel() {
  return (
    <div className="mt-2 lg:mt-20 flex items-center justify-between px-8 lg:flex-col bg-transparent">
      <div className="flex flex-col w-[50%] lg:w-[100%]">
        <p className="text-6xl lg:text-4xl font-medium mb-4 text-slate-800">
          FULLSTACK
          <br />
          <span className="font-bold text-7xl lg:text-5xl">DEVELOPER</span>
        </p>
        <span className="text-gray-600 mb-4">
          Desenvolver vai muito além do meu trabalho, é algo que faço com amor.
          Sempre fui apaixonado por tecnologia e por criar soluções que
          facilitam a vida e resolvem problemas. Como profissional procuro estar
          em aprendizado constante e atento as boas práticas de desenvolvimento.
          Aspirante a Full Stack com React e NodeJs e cursando Análise e
          Desenvolvimento de Sistemas na Univerdade Anhembi Morumbi.
        </span>
        <div className="flex gap-3">
          <Button
            text="Github"
            submit={() => openLinkInNewTab(links.github)}
            icon={<FaGithub />}
          />
          <Button
            text="Linkedin"
            color="bg-[#0077B5]"
            submit={() => openLinkInNewTab(links.linkedin)}
            icon={<FaLinkedin />}
          />
        </div>
      </div>
      <div className="w-[50%] h-[100%] flex justify-end lg:w-[100%]">
        <img
          className="w-[100%]"
          src={presentationImage}
          alt="Imagem de apresentação"
        />
      </div>
    </div>
  );
}
