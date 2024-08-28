import React from "react";
import {
  ButtonContainer,
  DemoButton,
  HeroHeader,
  HeroSectionContainer,
  HeroSectionWrapper,
  HeroSubheader,
  TrialButton,
} from "./index.styles";

export default function HeroSection() {
  return (
    <>
      <HeroSectionWrapper>
        <HeroSectionContainer>
          <HeroHeader>
            Gain insights at a glance with our dynamic dashboard
          </HeroHeader>
          <HeroSubheader>
            Turning developer activity into actionable intelligence.
          </HeroSubheader>
          <ButtonContainer>
            <TrialButton>Start a Free Trial</TrialButton>
            <DemoButton>Request Demo</DemoButton>
          </ButtonContainer>
        </HeroSectionContainer>
      </HeroSectionWrapper>
    </>
  );
}
