import Button from './form/Button';
import openLinkInNewTab from '../utils/openLinkInNewTab';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import links from '../utils/links';

export default function Panel() {
  return (
    <div className="mt-2 flex items-center justify-between px-8 lg:flex-col-reverse bg-transparent">
      <div className="flex flex-col w-[50%] lg:w-[100%]">
        <p className="text-6xl lg:text-4xl font-medium mb-4 text-slate-800">
          FULLSTACK
          <br />
          <span className="font-bold text-7xl lg:text-5xl">DEVELOPER</span>
        </p>
        <span className="text-gray-600 mb-4">
          Possuo experiência no desenvolvimento de aplicações completas de ponta
          a ponta. Atualmente, utilizando Node.js no back-end, React e React
          Native para o front-end, integração via API’s REST e no deploy dessas
          aplicações. Tenho atuado em projetos na fábrica de software e como
          profissional de outsourcing, desenvolvendo e dando manutenção em
          API’s, criando novas telas para os portais/aplicativos e trabalhando
          na correção de bugs dessas soluções. Estou sempre focado em escrever
          um código limpo e com boa performance. Além do código, também gosto de
          executar trabalhos em equipe, passar e adquirir o máximo de
          conhecimento possível. Sempre fui apaixonado por tecnologia e gosto de
          criar projetos pessoais e participar de hackathons com amigos no tempo
          livre. Também tenho como hobby prototipar mini projetos com arduino.
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
      <div className="mt-28 lg:my-6 flex justify-center lg:w-[100%]">
        <img
          className="w-[60%] rounded-full border-solid border-4 border-slate-500"
          src="https://avatars.githubusercontent.com/andrestanlley"
          alt="Imagem de apresentação"
        />
      </div>
    </div>
  );
}
