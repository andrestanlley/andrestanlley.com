import { FaReact, FaNodeJs, FaDocker, FaCloud } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Box from "./Box";

export default function Stacks() {
  return (
    <div className="my-16">
      <div className="flex flex-col justify-center items-center text-3xl font-opensans text-slate-800 font-bold">
        minhas stacks
        <span className="font-thin text-sm mb-4">bó fazer um projetin, pae?</span>
      </div>
      <div className="flex justify-center flex-wrap-reverse sm:flex-wrap gap-4">
        <Box
          text="Desenvolvimento de API's e serviços de ponta a ponta, foco em performance e clean code para facilitar a manutenção."
          icon={<FaNodeJs size={48} color="#68a063" />}
        />
        <Box
          text="Construção de aplicações frontend utilizando React, conexão a API's para busca e inserção de dados, boas práticas."
          icon={<FaReact size={48} color="#0077B5" />}
        />
        <Box
          text="Utilização de Typescript nos projetos para facilitar o desenvolvimento e tipagem dos dados, muito além do any."
          icon={<SiTypescript size={44} color="#3178c6" />}
        />
        <Box
          text="Dockenizão das aplicações para facilitar o deploy e isolar o ambiente, conexão entre os serviços em diferentes containers."
          icon={<FaDocker size={48} color="#139fdc" />}
        />
        <Box
          text="Deploy e manutenção das aplicações, escabalabilidade, mensageria e monitoramento de processos."
          icon={<FaCloud size={48} color="#0077B5" />}
        />
      </div>
    </div>
  );
}
