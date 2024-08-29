import React, { useEffect, useState } from "react";
import {
  ActivityContainer,
  ActivityName,
  Count,
  DateDistributionContainerWrapper,
  DateDistributionHeader,
  DateText,
  DaywiseActivityDetails,
  DistributorDetails,
  DistributorDetailsBox,
  DistributorName,
  LabelName,
} from "./index.styles";
import { DashboardData } from "./index.types";

export default function DateDistributionContainer() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("https://devdynamics-assignment.netlify.app/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <DateDistributionContainerWrapper>
        <DateDistributionHeader>Date Wise Activity</DateDistributionHeader>
        <DistributorDetailsBox>
          {data.AuthorWorklog.rows.map((row) => (
            <DistributorDetails key={row.name}>
              <DistributorName>Developer ID- {row.name}</DistributorName>
              <div>
                {row.dayWiseActivity.slice(0, 1).map((activity) => (
                  <DaywiseActivityDetails key={activity.date}>
                    <DateText>For Date - {activity.date}</DateText>
                    <ActivityContainer>
                      {activity.items.children.map((item) => (
                        <ActivityName key={item.label}>
                          <LabelName>{item.label}</LabelName>
                          <Count>{item.count}</Count>

                          {item.count >= "1" ? (
                            <progress
                              className="progress progress1"
                              max="100"
                              value="36"
                            ></progress>
                          ) : (
                            <progress
                              className="progress progress3"
                              max="100"
                              value="10"
                            ></progress>
                          )}
                        </ActivityName>
                      ))}
                    </ActivityContainer>
                  </DaywiseActivityDetails>
                ))}
              </div>
            </DistributorDetails>
          ))}
        </DistributorDetailsBox>
      </DateDistributionContainerWrapper>
    </>
  );
}
