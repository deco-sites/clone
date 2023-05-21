import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PaymentMethodsProps {
  image: LiveImage;
  imageAlt: string;
  name: string;
}

export interface FlagsProps {
  label: string;
  style: "full-blue" | "simple";
}

export interface ButtonProps {
  label: string;
  link: string;
}

export interface PlansProps {
  flags: FlagsProps[];
  title: string;
  description: string[];
  buttons: ButtonProps[];
  perks: string[];
  perkListImage?: LiveImage;
  condition: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  paymentMethods: {
    items: PaymentMethodsProps[];
    show?: boolean;
  };
  plans: PlansProps[];
}

export default function SpotifyPlans(
  { title, paymentMethods, plans, subtitle }: Props,
) {
  if (!plans || plans.length === 0) return <></>;

  return (
    <section className="flex w-100 px-5 justify-center bg-gray-200 py-[75px]">
      <article className="flex flex-col items-center justify-center w-[1170px] max-w-[1170px]">
        {title && (
          <h2 className="text-2xl md:text-[40px] font-bold leading-none">
            {title}
          </h2>
        )}

        {subtitle && <h3 className="text-base my-[10px]">{subtitle}</h3>}

        {paymentMethods?.items && paymentMethods?.show && (
          <div className="mt-4 flex gap-x-1 items-center">
            <ul className="flex gap-x-[7px]">
              {paymentMethods.items.slice(0, 4).map((item) => (
                <li>
                  <Image src={item.image} alt={item.imageAlt} width={29} />
                </li>
              ))}
            </ul>

            {paymentMethods.items.length > 5 && (
              <div className="relative">
                <span className="underline">
                  + outros {paymentMethods.items.length - 5}
                </span>

                <ul className="absolute hidden grid-cols-4 flex-wrap">
                  {paymentMethods.items.map((el) => (
                    <li className="">
                      <Image src={el.image} alt={el.imageAlt} width={29} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 mt-[50px]">
          {plans.map((plan) => (
            <article className="grid grid-rows-[100px_120px_auto_auto_140px] md:grid-rows-[100px_120px_350px_auto_140px] bg-white shadow-md p-4 rounded-[10px]">
              <ul className="row-auto h-fit flex flex-col gap-y-[10px]">
                {plan.flags?.length > 0 && plan.flags.map((flag) => (
                  <li
                    className={`rounded w-fit px-2 py-1 text-sm font-bold
                    ${
                      flag.style === "full-blue"
                        ? "bg-blue-500 text-white"
                        : "bg-white border-blue-500 text-blue-500 border-[1px]"
                    }
                  `}
                  >
                    {flag.label}
                  </li>
                ))}
              </ul>

              <div className="row-start-2 row-end-2 border-b-[1px] border-[#cccccc] py-2 pb-5">
                <h3 className="font-bold text-2xl leading-6">{plan.title}</h3>

                {plan.description?.map((paragraph) => (
                  <p className="text-base leading-5 my-[5px] mb-[2px]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="row-start-3 row-end-3 row-span-3 py-4">
                {plan.perks.map((perk) => (
                  <li className="flex gap-x-[10px] items-center mb-[5px]">
                    <svg
                      className="w-6 min-w-[24px]"
                      role="img"
                      focusable="false"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      aria-label=""
                      class="Svg-ytk21e-0 fJEWJR"
                    >
                      <polyline
                        points="3.32 12.86 8.9 19.4 20.99 5.26"
                        fill="none"
                        stroke="#181818"
                      >
                      </polyline>
                    </svg>
                    <span className="w-auto flex text-sm text-black font-medium">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="row-start-4 row-end-4 w-100 flex flex-col">
                {plan.buttons.map((btn) => (
                  <a
                    className="bg-black text-white font-bold rounded-full w-100 py-4 h-fit text-center mb-4"
                    href={btn.link}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>

              <p
                className="row-start-5 row-end-5 text-xs"
                dangerouslySetInnerHTML={{ __html: plan.condition }}
              />
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}
