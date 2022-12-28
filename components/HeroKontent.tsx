import Link from "next/link";
import Splitter from "./Splitter";

export type HeroKontentProps = {
  kontentItem: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string
  }
};

 export function HeroKontent(props: HeroKontentProps) {
  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <h1
              className="my-4 text-5xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: props?.kontentItem?.title }}
            />
            <p
              className="leading-normal text-2xl mb-8"
              dangerouslySetInnerHTML={{ __html: props?.kontentItem?.description }}
            />
            {props?.kontentItem?.buttonText ? (
              <Link prefetch={false} href={props?.kontentItem ? props?.kontentItem?.buttonLink : "#"}>
                <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  {props?.kontentItem?.buttonText}
                </button>
              </Link>
            ) : null}
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            {props?.kontentItem?.image && (
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={props?.kontentItem?.image}
                alt={props?.kontentItem?.buttonText}
              />
            )}
          </div>
        </div>
      </div>
      <Splitter />
    </>
  );
}
