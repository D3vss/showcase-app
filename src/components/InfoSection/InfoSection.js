import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
} from "./InfoSection.elements";
function InfoSection({ lightBg, imgStart }) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>Hello there</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
