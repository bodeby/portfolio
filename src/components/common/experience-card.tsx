import React from "react";

interface Experience {
  title: string;
  company: string;
  link?: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  // Get length of array
  let length = experience.technologies.length - 1;

  return (
    <article className="flex flex-col">
      <h4 className="text-sm font-light">{experience.period}</h4>
      <div className="md:mb-0">
        <h3 className="text-md font-semibold hover:underline underline-offset-2">
          {experience.title} -
          <a
            href={experience.link}
            target="_blank"
            referrerPolicy="no-referrer"
            className="ml-1"
          >
            {experience.company}
          </a>
        </h3>
        <p className="text-sm font-light leading-snug subpixel-antialiased">
          {experience.description}
        </p>
        <p className="text-xs font-normal mt-1">
          {experience.technologies.map((tech, i) => {
            if (tech == experience.technologies[length]) {
              return <span key={i}>{tech}</span>;
            } else {
              return (
                <span key={i} className="mx-1">
                  {tech} •
                </span>
              );
            }
          })}
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
