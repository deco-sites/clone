import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface LinkProps {
  text?: string;
  url?: string;
  openInNewPage?: boolean;
}

export interface Props {
  links: LinkProps[];
  logo: {
    url: LiveImage;
    alt: string;
  };
}

export default function SpotifyHeader(
  { links, logo }: Props,
) {
  return (
    <header className="px-5 block w-100 bg-black">
      <div className="relative flex h-[54px] md:h-[80px] justify-between items-center max-w-[1170px] mx-auto">
        <div>
          <Image
            className="md:min-w-[123px]"
            src={logo.url}
            alt={logo.alt}
            width={89}
          />
        </div>

        <nav className="hidden md:flex">
          <div>
            {links.map((link) => (
              <a
                className="font-bold text-base text-white hover:text-green-500 px-[17px]"
                href={link.url}
                target={link.openInNewPage ? "_blank" : ""}
                rel={link.openInNewPage ? "noreferrer" : ""}
              >
                {link.text}
              </a>
            ))}
          </div>

          <span className="mx-[17px] my-auto w-[1px] h-4 bg-white" />

          <div className="">
            <a
              className="font-bold text-base px-[17px] text-white hover:text-green-500"
              href="/"
            >
              Inscrever-se
            </a>
            <a
              className="font-bold text-base px-[17px] text-white hover:text-green-500"
              href="/"
            >
              Entrar
            </a>
          </div>
        </nav>

        <div>
          <input
            type="checkbox"
            id="menu-handle"
            className="hidden peer/menu-handle group/menu-handle"
          />
          <aside
            className={`md:hidden transition-all fixed top-0 -right-full peer-checked/menu-handle:right-0 h-full w-full bg-black p-[38px]`}
          >
            <div className="flex flex-col gap-y-[25px]">
              {links && links.map((link) => (
                <a
                  target={link.openInNewPage ? "_blank" : ""}
                  rel={link.openInNewPage ? "noreferrer" : ""}
                  className="font-bold text-[30px] md:px-[17px] text-white"
                  href={link.url}
                >
                  {link.text}
                </a>
              ))}
            </div>

            <span className="block my-[40px] w-4 h-[2px] bg-white" />

            <div className="flex flex-col gap-y-[25px]">
              <a
                href="/"
                className="font-bold text-[24px] text-[#d9dadc]"
              >
                Inscrever-se
              </a>
              <a
                href="/"
                className="font-bold text-[24px] text-[#d9dadc]"
              >
                Entrar
              </a>
            </div>
          </aside>

          <label
            for="menu-handle"
            className="md:hidden relative z-20 peer-checked/menu-handle:[&>.hide-when-active]:hidden peer-checked/menu-handle:[&>.rotate-left]:rotate-45 peer-checked/menu-handle:[&>.rotate-right]:-rotate-45"
          >
            <span className="rotate-right bg-white rounded-[1px] origin-[16px] block h-[3px] w-[22px] transition-transform duration-200" />
            <span className="hide-when-active bg-white rounded-[1px] origin-[16px] block h-[3px] w-[22px] transition-transform duration-200 mt-1" />
            <span className="rotate-left bg-white rounded-[1px] origin-[16px] block h-[3px] w-[22px] transition-transform duration-200 mt-1" />
          </label>
        </div>
      </div>
    </header>
  );
}

SpotifyHeader.defaultProps = {
  links: [
    {
      text: "Premium",
      url: "/",
    },
    {
      text: "Suporte",
      url: "/",
    },
    {
      text: "Baixar",
      url: "/",
    },
  ],
};
