import React, { useEffect, useState } from "react";
import {
  TeamDataContainerBox,
  DataContainerDetails,
  DataContainerHeader,
  DataHeader,
  DataIconContainer,
  DataValueContainer,
  DataValue,
  DataDescription,
} from "./index.styles";
import blackArrow from "../../../assets/svgs/black-arrow-right.svg";
import redArrow from "../../../assets/svgs/red-arrow.svg";
import greenArrow from "../../../assets/svgs/green-arrow.svg";
import { DashboardData } from "./index.types";

export default function TeamDataContainer() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("https://devdynamics-assignment.netlify.app/db.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <TeamDataContainerBox>
        {data.AuthorWorklog.activityMeta.map((row) => (
          <DataContainerDetails key={row.label}>
            <DataContainerHeader>
              <DataHeader>{row.label}</DataHeader>
              <DataIconContainer>
                <img src={blackArrow} alt="arrow" width={20} height={20} />
              </DataIconContainer>
            </DataContainerHeader>
            <DataValueContainer>
              <DataValue>{row.value}</DataValue>
              <DataIconContainer>
                {parseFloat(row.percent) > 50 ? (
                  <img
                    src={greenArrow}
                    alt="green-arrow"
                    width={20}
                    height={20}
                  />
                ) : (
                  <img src={redArrow} alt="red-arrow" width={20} height={20} />
                )}
              </DataIconContainer>
              <DataDescription>
                {row.percent}% vs previous period
              </DataDescription>
            </DataValueContainer>
          </DataContainerDetails>
        ))}
      </TeamDataContainerBox>
    </>
  );
}
