import {
  DashboardContainer,
  DashboardHeader,
  DashoboardWrapper,
  GraphWrapper,
  GraphHeader,
  IconContainer,
  Sidebar,
  StatsContainer,
} from "./index.styles";
import logo from "../../assets/images/logo.jpeg";
import graphIcon from "../../assets/svgs/graph-icon.svg";
import dollarIcon from "../../assets/svgs/dollar-icon.svg";
import certficateIcon from "../../assets/svgs/certficate-icon.svg";
import calendarIcon from "../../assets/svgs/calendar-icon.svg";
import notesIcon from "../../assets/svgs/notes-icon.svg";
import starIcon from "../../assets/svgs/star-icon.svg";
import TeamDataContainer from "../dashboardComponents/TeamDataContainer";
import DateDistributionContainer from "../dashboardComponents/DateDistributionContainer";
import GraphContainer from "../dashboardComponents/GraphContainer";

export default function Dashboard() {
  return (
    <>
      <DashoboardWrapper>
        <DashboardContainer>
          <DashboardHeader>
            <img src={logo} alt="logo" width={100} height={20} />
          </DashboardHeader>
          <StatsContainer>
            <Sidebar>
              <IconContainer>
                <img src={graphIcon} alt="graph" width={40} height={40} />
              </IconContainer>
              <IconContainer>
                <img src={dollarIcon} alt="dollar" width={40} height={40} />
              </IconContainer>
              <IconContainer>
                <img
                  src={certficateIcon}
                  alt="certificate"
                  width={40}
                  height={40}
                />
              </IconContainer>
              <IconContainer>
                <img src={calendarIcon} alt="calendar" width={40} height={40} />
              </IconContainer>
              <IconContainer>
                <img src={notesIcon} alt="notes" width={40} height={40} />
              </IconContainer>
              <IconContainer>
                <img src={starIcon} alt="star" width={40} height={40} />
              </IconContainer>
            </Sidebar>
            <GraphWrapper>
              <GraphHeader>Discover your team highlights</GraphHeader>
              <TeamDataContainer />

              <DateDistributionContainer />

              <GraphContainer />
            </GraphWrapper>
          </StatsContainer>
        </DashboardContainer>
      </DashoboardWrapper>
    </>
  );
}
