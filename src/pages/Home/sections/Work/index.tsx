/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { sub } from "date-fns";
import Line from "../../../../components/Line";

import * as S from "./styled";
import useWindowSize from "../../../../hooks/useWindowSize";
import Experience from "./Experience";
import { experience } from "./values";

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

  const [current, setCurrent] = useState<experienceProps>(experience[0]);
  const [animate, setAnimate] = useState(true);
  const [contributions, setContributions] = useState([]);

  const getCountClass = (count: number) => {
    switch (true) {
      case count > 0 && count < 4:
        return "color-scale-1";
      case count > 3 && count < 7:
        return "color-scale-2";
      case count > 6 && count < 11:
        return "color-scale-3";
      case count > 9 && count < 12:
        return "color-scale-4";
      case count > 12:
        return "color-scale-5";
      default:
        return "color-empty";
    }
  };

  const getContributions = async ({
    token,
    username,
  }: {
    token: string;
    username: string;
  }) => {
    const headers = {
      Authorization: `bearer ${token}`,
    };
    const body = {
      query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
    };
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });
    const data = await response.json();
    const { weeks } =
      data.data.user.contributionsCollection.contributionCalendar;

    setContributions(
      weeks
        .flatMap((entry: any) => entry.contributionDays)
        .map((item: any) => ({
          date: item.date,
          count: item.contributionCount,
        }))
    );
  };

  useEffect(() => {
    getContributions({
      token: process.env.REACT_APP_GITHUB_CLIENT_TOKEN || "",
      username: process.env.REACT_APP_GITHUB_CLIENT_USER || "",
    });
  }, []);

  return (
    <S.WorkWrapper className="section" id="experience">
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
                key={item.name}
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
        <S.Box>
          <h5 style={{ marginBottom: "20px" }}>Github collaborations</h5>
          <CalendarHeatmap
            startDate={sub(new Date(), {
              years: 1,
            })}
            gutterSize={2}
            endDate={new Date()}
            values={contributions}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }

              const weekDay = new Date(value.date).getDay();
              const isWeekend = weekDay === 5 || weekDay === 6;

              if (isWeekend) {
                return "color-weekend";
              }

              return getCountClass(value.count);
            }}
          />
        </S.Box>
      </S.Container>
    </S.WorkWrapper>
  );
}

export default Work;
