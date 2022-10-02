import NavButton from "./form/NavButton";
import openLinkInNewTab from "../utils/openLinkInNewTab";
import links from "../utils/links";

export default function Topbar() {
  return (
    <>
      <div className="h-20 flex justify-between items-center px-8">
        <div>
          <p className="font-medium text-cyan-600 text-2xl">
            andre<span className="font-opensans font-bold">stanlley</span>
          </p>
        </div>
        <nav>
          <NavButton
            text="Instagram"
            submit={() => openLinkInNewTab(links.instagram)}
          />
        </nav>
      </div>
      <hr className="opacity-50" />
    </>
  );
}
