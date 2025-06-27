interface Props {
  positionName: string;
  company: string;
  startDate: Date;
  endDate: Date;
  hours: number;
  descriptions: string[];
}

const WorkExperienceCard = ({
  positionName,
  company,
  startDate,
  endDate,
  hours,
  descriptions,
}: Props) => {
  return (
    <div className="mb-2">
      <h3 className="font-bold text-lg">
        <span className="text-2xl">{positionName}</span> at
        <span className="text-xl">
          <a href="https://wayfinderdata.com/">{company}</a>
        </span>
      </h3>
      <p className="text-sm text-slate-800">
        {startDate.getDate()} - {endDate.getDate()}, {hours} hours per week
      </p>
      <ul className="list-disc list-inside">
        {descriptions.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceCard;
