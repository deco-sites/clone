export interface BtnProps {
  label: string;
  url: string;
  style: "dark-full" | "white-transparent";
}

export interface Props {
  title: string;
  subtitle: string;
  buttons: BtnProps[];
  conditions: {
    link: string;
    linkText: string;
    text: string;
    show?: boolean;
  };
}

export default function SpotifyHero(
  { buttons, subtitle, title, conditions }: Props,
) {
  return (
    <section className="bg-[#1D75DE] flex w-full px-5 pt-12 pb-6  md:pt-[72px] md:pb-10">
      <article className="max-w-full w-[1170px] mx-auto flex flex-col gap-y-[25px] justify-start">
        <div>
          <h1 className="text-2xl md:text-[40px] text-white font-[900] inline-block w-auto leading-normal">
            {title}
          </h1>
        </div>

        <div>
          <h2 className="text-lg md:text-2xl text-white font-normal inline-block w-auto leading-normal">
            {subtitle}
          </h2>
        </div>

        <div className="gap-y-[10px] flex flex-col md:flex-row gap-x-2 mt-[10px]">
          {buttons.map((button) => (
            <div className="flex w-full md:h-fit md:w-fit">
              <a
                className={`w-full md:w-fit px-8 py-[14px] text-sm text-white font-bold text-center rounded-full hover:scale-105 focus:scale-100 ${
                  button.style === "dark-full"
                    ? `hover:bg-[#0B0909] focus:bg-[#191414] bg-[#191414] border-2 border-[#191414]`
                    : `hover:bg-[#1A69C7] focus:bg-transparent bg-transparent border-2 border-white`
                }
              `}
                href={button.url}
              >
                {button.label}
              </a>
            </div>
          ))}
        </div>

        {conditions.show && (
          <div>
            <p className="max-w-[630px] text-[0.6875rem] leading-4 text-white">
              <a href={conditions.link} className="text-white underline">
                {conditions.linkText}.
              </a>{" "}
              {conditions.text}
            </p>
          </div>
        )}
      </article>
    </section>
  );
}

SpotifyHero.defaultProps = {
  title: "Aproveite 1 mês grátis de Premium",
  subtitle: "Depois, pague somente R$ 19,90/mês. Cancele quando quiser.",
  buttons: [
    {
      label: "COMECE AGORA",
      url: "/",
      style: "dark-full",
    },
    {
      label: "VER PLANOS",
      url: "/",
      style: "white-transparent",
    },
  ],
  conditions: {
    link: "/",
    linkText: "Sujeito a Termos e Condições",
    text:
      "O mês grátis não está disponível para usuários que já experimentaram o Premium.",
    show: true,
  },
};
