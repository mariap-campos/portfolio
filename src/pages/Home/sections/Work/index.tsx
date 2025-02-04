/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  SiAzuredevops,
  SiAzurepipelines,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiReact,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import Line from "../../../../components/Line";

import * as S from "./styled";
import useWindowSize from "../../../../hooks/useWindowSize";
import Experience from "./Experience";

export interface experienceProps {
  name: string;
  position: string;
  site: string;
  timeframe: string;
  topics: string[];
  icons: any;
}

function Work() {
  const { width } = useWindowSize();

  const renderAmbevIcons = () => {
    return (
      <div className="icons">
        <SiJavascript title="Javascript" />
        <SiTypescript title="Typescript" />
        <SiReact title="React" />
        <SiAzurepipelines title="Azure Pipelines" />
        <SiAzuredevops title="Azure Devops" />
        <SiHtml5 title="Html" />
        <SiCss3 title="Css" />
      </div>
    );
  };
  const renderSambaIcons = () => {
    return (
      <div className="icons">
        <SiJavascript title="Javascript" />
        <SiReact title="React" />
        <SiHtml5 title="Html" />
        <SiCss3 title="Css" />
      </div>
    );
  };
  const renderEnextIcons = () => {
    return (
      <div className="icons">
        <SiJavascript title="Javascript" />
        <svg
          className="vtex"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.3 437.73"
        >
          <title>Vtex</title>
          <path
            d="M204.76,389.48c-10.51,19.87-20.5,38.78-30.52,57.67-7.56,14.27-18,20.22-30.59,17.32-8.25-1.9-14-6.92-18-14.44q-46.2-87.64-92.58-175.18c-9.55-18.06-19-36.18-28.56-54.22-10.35-19.48,1.26-39.29,23.4-39.5,19.92-.18,39.85-.21,59.77.06,6.23.09,6.69-1.55,3.94-6.65Q74.86,143.37,58.53,112C42.67,81.31,60.85,51.3,95.18,51.29q187.7,0,375.38,0c33.7,0,51.42,29.76,35.57,59.61q-93.48,176.1-187,352.18c-12,22.59-31.57,31.08-52.59,22.83-9.65-3.78-16.19-10.74-20.93-19.75q-19.08-36.27-38.32-72.45C206.74,392.63,206.05,391.61,204.76,389.48Zm.72-208.08c-26,0-52.06.67-78-.26-14.67-.53-26.37,11.46-17.34,28.17,26.6,49.2,52.51,98.78,78.53,148.29,3.65,6.94,8.57,11.72,16.58,11.54,7.59-.17,12.25-4.73,15.79-11.46q39.34-74.56,79.14-148.91c8.37-15.7,1.38-27.33-16.6-27.36Q244.5,181.35,205.48,181.4Z"
            transform="translate(-0.7 -51.27)"
          />
        </svg>
        <SiJquery title="Jquery" />
        <SiHtml5 title="Html" />
        <SiCss3 title="Css" />
        <SiSass title="Sass" />
      </div>
    );
  };

  const experience = [
    {
      name: "ab-inbev",
      position: "Senior Software Engineer",
      site: "https://www.ab-inbev.com/",
      timeframe: "March 2022 - current",

      topics: [
        "Led the development for Zé Delivery's rewards program, ensuring a responsive and high-performance application that enhanced user engagement and satisfaction.",
        "Working on the continuous enhancement of the rewards program, leading feature concept development",
        "Engaged in expanding the program to other countries",
      ],
      icons: renderAmbevIcons,
    },
    {
      name: "sambatech",
      position: "Junior Front End Developer",
      site: "https://sambatech.com",
      timeframe: "April 2021 - March 2022",
      topics: [
        "Worked in a livestream entertainment project called Lounge for Ambev.",
        "Was in charge of the front-end of the React project, creating new features, implementing bug fixes and unit testing the application.",
        "Actively participated and worked with the development, design and bussines team in the creative and refinement process for new ideas and possibly new features for the project.",
      ],
      icons: renderSambaIcons,
    },
    {
      name: "enext",
      position: "Front End Intern",
      site: "https://enext.com.br",
      timeframe: "August 2020 - April 2021",
      topics: [
        "Acted in the on-going team, implementing bugs fixes and maintaining different projects in the VTEX eccommerce platform .",
        "Delivered major features and landing pages based on the design's team visions",
        "Worked with JS ES6+, Jquery and ocassionally a few React projects",
      ],
      icons: renderEnextIcons,
    },
  ];
  const [current, setCurrent] = useState<experienceProps>(experience[0]);
  const [animate, setAnimate] = useState(true);

  return (
    <S.WorkWrapper className="section" id="experience">
      {/* <div className="floatingSquare" /> */}
      <S.Container className="container">
        <S.Title>
          <p>
            <strong>02. </strong>experience
          </p>
          <Line start width={width! > 768 ? "85%" : "60%"} />
        </S.Title>
        <S.Work>
          <Line start height="200px" />
          <div className="buttons">
            {experience.map((item) => (
              <button
                type="button"
                className={`menuItem ${
                  item.name === current.name && "selected"
                }`}
                onClick={() => {
                  setCurrent(item);
                  setAnimate(true);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <Experience
            current={current}
            animate={animate}
            setAnimate={setAnimate}
            icons={current.icons}
          />
        </S.Work>
      </S.Container>
    </S.WorkWrapper>
  );
}

export default Work;
