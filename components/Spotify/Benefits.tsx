import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface BenefitsProps {
  image: {
    url: LiveImage;
    alt: string;
  };
  title: string;
  description: string;
}

export interface Props {
  title?: string;
  benefits: BenefitsProps[];
}

export default function SpotifyBenefits(
  { benefits, title = "Por que ser Premium?" }: Props,
) {
  if (!benefits) return <></>;

  return (
    <section className="px-5 py-7 lg:py-10 lg:pb-24">
      <div className="flex flex-col max-w-[1170px] mx-auto">
        <h2 className="max-w-[670px] font-[900] mx-auto text-[28px] text-black mb-[30px] lg:mb-[72px]">
          {title}
        </h2>

        <div className="flex flex-col gap-y-16 md:flex-row md:flex-wrap">
          {benefits.map((benefit) => (
            <div className="flex gap-x-5 items-center md:w-1/2 lg:w-1/4 lg:flex-col">
              <Image
                src={benefit.image.url}
                width={96}
                alt={benefit.image.alt}
                className="lg:mb-10 lg:w-[142px]"
              />

              <div>
                <p className="mb-[10px] text-[21px] leading-snug font-bold lg:text-center">
                  {benefit.title}
                </p>
                <p className="font-normal text-base lg:text-center">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
