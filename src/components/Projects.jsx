import { Project } from "../constants";
import Heading from "./Heading";
import Section from "./section"; // Make sure this import matches your actual file name
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { github } from "../assets";

const Projects = () => {
  return (
    <Section id="Projects" crosses>
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Projects" />

        <div className="flex flex-wrap gap-10 mb-10">
          {Project.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto justify-center">
                  <a
                    href={item.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} width={70} height={70} alt={item.title} />
                  </a>

                  {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Link to demo
                  </p> */}
                  {/* <Arrow /> */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
