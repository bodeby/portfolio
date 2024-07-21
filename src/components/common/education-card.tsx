import React from "react";

type Education = {
  title: string;
  school: string;
  period: string;
};

export const EducationCard: React.FC<{ education: Education }> = ({
  education,
}) => {
  return (
    <article className="flex flex-col">
      <div className="">
        <h4 className="text-sm font-semibold">{education.period}</h4>
      </div>
      <div className="md:mb-0">
        <h3 className="text-md">
          {education.title}
        </h3>
        <p className="text-sm font-normal leading-snug subpixel-antialiased">
          {education.school}
        </p>
      </div>
    </article>
  );
};
