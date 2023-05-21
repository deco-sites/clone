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

        <div className="grid grid-cols-4 gap-x-4 mt-[50px]">
          {plans.map((plan) => (
            <article className="grid grid-rows-[auto_auto_1fr_1fr_1fr] bg-white shadow-md p-4 rounded-[10px]">
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

              <div className="row-span-2 border-b-[1px] border-[#cccccc] py-2 pb-5">
                <h3 className="font-bold text-2xl leading-6">{plan.title}</h3>

                {plan.description?.map((paragraph) => (
                  <p className="text-base leading-5 my-[5px] mb-[2px]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="row-span-3 py-4 pl-5 list-disc list-outside">
                {plan.perks.map((perk) => (
                  <li className="">
                    {plan.perkListImage && (
                      <Image
                        src={plan.perkListImage}
                        alt="List image"
                        width={24}
                      />
                    )}
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="row-span-4 w-100 flex flex-col">
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
                className="row-span-5 text-xs"
                dangerouslySetInnerHTML={{ __html: plan.condition }}
              />
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}
