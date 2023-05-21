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

        <button
          type="button"
          className="md:hidden"
        >
          <span className="bg-white rounded-[1px] origin-[21px] block h-[3px] w-[22px] transition-transform duration-200" />
          <span className="bg-white rounded-[1px] origin-[21px] block h-[3px] w-[22px] transition-transform duration-200 mt-1" />
          <span className="bg-white rounded-[1px] origin-[21px] block h-[3px] w-[22px] transition-transform duration-200 mt-1" />
        </button>

        {
          /* <aside
          className={`md:hidden fixed top-0 -right-full`}
        >
          <div>
            {links && links.map((link) => (
              <a
                target={link.openInNewPage ? "_blank" : ""}
                rel={link.openInNewPage ? "noreferrer" : ""}
                href={link.url}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div>
            <a href="/">Inscrever-se</a>
            <a href="/">Entrar</a>
          </div>
        </aside> */
        }
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
