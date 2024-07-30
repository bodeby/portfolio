import React from "react";

type Education = {
  title: string;
  school: string;
  description?: string;
  period: string;
};
const EducationCard: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <article className="flex flex-col">
      <div className="">
        <h4 className="text-sm font-ligh">{education.period}</h4>
      </div>
      <div className="md:mb-0">
        <h3 className="text-md font-semibold">{education.title}</h3>
        <p className="text-sm font-light leading-snug subpixel-antialiased">
          {education.description}
        </p>
        
        <p className="text-sm font-light leading-snug subpixel-antialiased">
          {education.school}
        </p>
      </div>
    </article>
  );
};

export default EducationCard;
