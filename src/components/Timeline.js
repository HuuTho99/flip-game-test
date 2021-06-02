import React from "react";
import styled from "styled-components";

const TimelineStyled = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 2rem;
    font-weight: 500;
  }
`;

function Timeline() {
  return (
    <TimelineStyled>
      <p>Time: 17:03</p>
      <p>Flips: 12</p>
    </TimelineStyled>
  );
}

export default Timeline;
