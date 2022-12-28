import Link from "next/link";
import Splitter from "./Splitter";

export type HeroContentstackProps = {
  contentstackEntry: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string
  }
};

 export function HeroContentstack(props: HeroContentstackProps) {
  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <h1
              className="my-4 text-5xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: props?.contentstackEntry?.title }}
            />
            <p
              className="leading-normal text-2xl mb-8"
              dangerouslySetInnerHTML={{ __html: props?.contentstackEntry?.description }}
            />
            {props?.contentstackEntry?.buttonText ? (
              <Link prefetch={false} href={props?.contentstackEntry ? props?.contentstackEntry?.buttonLink : "#"}>
                <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  {props?.contentstackEntry?.buttonText}
                </button>
              </Link>
            ) : null}
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            {props?.contentstackEntry?.image && (
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={props?.contentstackEntry?.image}
                alt={props?.contentstackEntry?.buttonText}
              />
            )}
          </div>
        </div>
      </div>
      <Splitter />
    </>
  );
}
