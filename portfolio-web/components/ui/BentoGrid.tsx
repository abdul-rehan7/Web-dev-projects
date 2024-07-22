import { cn } from "@/utils/cn";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import {BackgroundGradientAnimation} from '@/components/ui/GradientBg'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-5 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  id,
  icon,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  id: number;
  description?: string | React.ReactNode;
  img?: string;
  icon?: React.ReactNode;
  imgClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative  overflow-hidden md:w-[100%] w-[90vw] md:h-auto h-[100%]  rounded-2xl group/bento hover:shadow-md transition duration-300 shadow-input dark:shadow-[#3b3b3b]  dark:bg-black-200 dark:border-white/[0.3]  border flex first-letter:flex flex-col ",
        className
      )}
    >
      <div className="w-full h-full absolute">
        {img && (
          <img
            className={cn(
              imgClassName,
              "w-full h-full  object-cover object-center"
            )}
            src={img}
          />
        )}
      </div>
      <div className=" flex flex-col relative rounded-md  ">
        {icon}
        <div className="p-4 md:text-3xl w-[80%] text-xl font-sans transition duration-200 translate-x-0 group-hover/bento:translate-x-2 font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className=" px-4 font-sans transition duration-200 translate-x-0 group-hover/bento:translate-x-2 font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        {id === 2 && <GlobeDemo />}
        {id === 4 && (
          <div
            className="w-[80vw] transition duration-200 translate-x-0 group-hover/bento:translate-x-2 md:w-[70vw] md:h-[70vh] h-[80%] object-cover md:mt-0 md:ml-36 mt-10  ml-16
            "
          >
            {<img src="/b4.svg" />}
          </div>
        )}
        {id === 5 && (
          <div
            className="w-[80vw] transition duration-200 translate-x-0 group-hover/bento:translate-x-2 md:w-[100vw] md:h-[100vh] h-[80%] object-cover md:mt-32 md:ml-64 mt-0  ml-10
            "
          >
            {<img src="/b5.svg" />}
          </div>
        )}
        {id === 3 && (
          <div className="flex transition duration-200 translate-x-0 group-hover/bento:translate-x-2 gap-1 mt-7 lg:mt-24 lg:gap-2 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-2  ">
              {["TypeScript", "Next.Js", "React.Js"].map((item) => (
                <span
                  key={item}
                  className="py-4 md:py-2 lg:px-4 px-4 text-sm lg:text-base text-[#a6aadcdf] opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="py-6 md:py-4 px-3 rounded-lg text-center bg-[#141838]" />
            </div>
            <div className="flex flex-col gap-2  ">
              <span className="py-6 md:py-4 px-3 rounded-lg text-center bg-[#141838]" />
              {["Tailwind CSS", "Aceternity UI", "ShadCN UI"].map((item2) => (
                <span
                  key={item2}
                  className="py-4 md:py-2 lg:px-4 px-4 text-sm lg:text-base text-[#a6aadcdf] opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item2}
                </span>
              ))}
            </div>
          </div>
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 object-cover object-center flex items-center  justify-center text-white ">
              <button>CLICK ME</button>
            </div>
          </BackgroundGradientAnimation>
        )}
      </div>
    </div>
  );
};
