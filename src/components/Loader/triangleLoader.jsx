"use client"

import React from 'react';
import styled from 'styled-components';

const TriangleLoader = () => {
  return (
    <StyledWrapper>
<svg viewBox="0 0 1000 1000" className="loader">
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 0 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 1 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 2 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 3 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 4 }}
  className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 5 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 6 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 7 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 8 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 9 }}
   className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 10 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 11 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 12 }}
   className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 13 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 14 }}
   className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 15 }}
   className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 16 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 17 }}
   className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 18 }}
    className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 19 }}
   className="poly"
  ></polygon>
  <polygon
    points="500,200 759,650 241, 650"
    style={{ "--i": 20 }}
   className="poly"
  ></polygon>
</svg>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .poly {
      fill: none;
      stroke: purple;
      stroke-width: 16;
      transform-origin: center center;
      animation: move 10s linear infinite;
      animation-delay: calc(var(--i) * -0.5s);
    }
  }

  @keyframes move {
    0% {
      transform: scale(0) rotate(0);
      opacity: 1;
    }
    100% {
      transform: scale(3) rotate(45deg);
      opacity: 0;
    }
  }`;

export default TriangleLoader;
