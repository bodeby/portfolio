import React from "react";

type Education = {
  title: string;
  school: string;
  description?: string;
  period: string;
};
const EducationCard: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <article className="flex flex-col subpixel-antialiased">
      <h4 className="text-xs font-light leading-snug">{education.period}</h4>
      <div className="md:mb-0">
        <h3 className="text-md font-semibold">{education.title}</h3>
        <p className="text-xs font-light leading-snug">{education.school}</p>

        <p className="text-sm font-light leading-snug mt-1">
          {education.description}
        </p>
      </div>
    </article>
  );
};

export default EducationCard;
