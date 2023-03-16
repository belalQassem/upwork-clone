import { Skilll, Styledskill } from "./style";

const Technology = ({ technologiesOfItem }) => {
  return (
    <Skilll>
      {technologiesOfItem?.map((techItem, index) => (
        <Styledskill key={index}>{techItem}</Styledskill>
      ))}
    </Skilll>
  );
};

export default Technology;
