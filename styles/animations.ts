import { css } from 'styled-components';

export const animations = css`
  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink {
    to {
      visibility: hidden;
    }
  }

  @keyframes turn1440 {
    0% {
      top: -20px;
      right: -220px;
    }
    20% {
      scale: 1.2;
      top: -264px;
      right: -252px;
      transform: rotate(-39.943deg);
      @media screen and (min-width: 1280px) {
        top: -200px;
        right: -302px;
      }
    }
    40% {
      scale: 1.6;
      top: -350px;
      right: -382px;
      transform: rotate(-68.272deg);
    }
    60% {
      scale: 1.7;
      top: -426px;
      right: -210px;
      transform: rotate(-97.931deg);
    }
    80% {
      top: -260px;
      right: -370px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -20px;
      right: -220px;
    }
  }
  @-webkit-keyframes turn1440 {
    0% {
      top: -20px;
      right: -220px;
    }
    20% {
      scale: 1.2;
      top: -264px;
      right: -252px;
      transform: rotate(-39.943deg);
    }
    40% {
      scale: 1.6;
      top: -350px;
      right: -382px;
      transform: rotate(-68.272deg);
    }
    60% {
      scale: 1.7;
      top: -426px;
      right: -210px;
      transform: rotate(-97.931deg);
    }
    80% {
      top: -260px;
      right: -370px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -20px;
      right: -220px;
    }
  }

  @keyframes turn1280 {
    0% {
      top: -152px;
      right: -300px;
    }
    20% {
      top: -300px;
      right: -310px;
      transform: rotate(-39.943deg);
    }
    40% {
      scale: 1.1;
      top: -380px;
      right: -490px;
      transform: rotate(-68.272deg);
    }
    60% {
      scale: 1.18;
      top: -410px;
      right: -330px;
      transform: rotate(-97.931deg);
    }
    80% {
      top: -280px;
      right: -500px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -152px;
      right: -300px;
    }
  }
  @-webkit-keyframes turn1280 {
    0% {
      top: -152px;
      right: -300px;
    }
    20% {
      top: -300px;
      right: -310px;
      transform: rotate(-39.943deg);
    }
    40% {
      scale: 1.1;
      top: -380px;
      right: -490px;
      transform: rotate(-68.272deg);
    }
    60% {
      scale: 1.18;
      top: -410px;
      right: -330px;
      transform: rotate(-97.931deg);
    }
    80% {
      top: -280px;
      right: -500px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -152px;
      right: -300px;
    }
  }

  @keyframes turn1040 {
    0% {
      top: -224px;
      right: -330px;
    }
    20% {
      scale: 0.9;
      top: -330px;
      right: -400px;
      transform: rotate(-39.943deg);
    }
    40% {
      top: -400px;
      right: -474px;
      transform: rotate(-68.272deg);
    }
    60% {
      scale: 1;
      top: -440px;
      right: -360px;
      transform: rotate(-97.931deg);
    }
    80% {
      scale: 0.9;
      top: -300px;
      right: -540px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -224px;
      right: -330px;
    }
  }
  @-webkit-keyframes turn1040 {
    0% {
      top: -224px;
      right: -330px;
    }
    20% {
      scale: 0.9;
      top: -330px;
      right: -400px;
      transform: rotate(-39.943deg);
    }
    40% {
      top: -400px;
      right: -474px;
      transform: rotate(-68.272deg);
    }
    60% {
      scale: 1;
      top: -440px;
      right: -360px;
      transform: rotate(-97.931deg);
    }
    80% {
      scale: 0.9;
      top: -300px;
      right: -540px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -224px;
      right: -330px;
    }
  }

  @keyframes turn768 {
    0% {
      top: -280px;
      right: -406px;
    }
    20% {
      scale: 0.74;
      top: -380px;
      right: -470px;
      transform: rotate(-39.943deg);
    }
    40% {
      top: -440px;
      right: -530px;
      transform: rotate(-68.272deg);
    }
    60% {
      scale: 0.8;
      top: -490px;
      right: -430px;
      transform: rotate(-97.931deg);
    }
    80% {
      top: -360px;
      right: -560px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -280px;
      right: -406px;
    }
  }
  @-webkit-keyframes turn768 {
    0% {
      top: -280px;
      right: -406px;
    }
    20% {
      scale: 0.74;
      top: -380px;
      right: -470px;
      transform: rotate(-39.943deg);
    }
    40% {
      top: -440px;
      right: -530px;
      transform: rotate(-68.272deg);
    }
    60% {
      scale: 0.8;
      top: -490px;
      right: -430px;
      transform: rotate(-97.931deg);
    }
    80% {
      top: -360px;
      right: -560px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -280px;
      right: -406px;
    }
  }

  @keyframes turnMob {
    0% {
      top: -310px;
      right: -390px;
    }
    20% {
      top: -380px;
      right: -410px;
      transform: rotate(-39.943deg);
    }
    40% {
      top: -440px;
      right: -465px;
      transform: rotate(-68.272deg);
    }
    60% {
      top: -490px;
      right: -430px;
      transform: rotate(-97.931deg);
    }
    80% {
      top: -390px;
      right: -520px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -310px;
      right: -390px;
    }
  }
  @-webkit-keyframes turnMob {
    0% {
      top: -310px;
      right: -390px;
    }
    20% {
      top: -380px;
      right: -410px;
      transform: rotate(-39.943deg);
    }
    40% {
      top: -440px;
      right: -465px;
      transform: rotate(-68.272deg);
    }
    60% {
      top: -490px;
      right: -430px;
      transform: rotate(-97.931deg);
    }
    80% {
      top: -390px;
      right: -520px;
      transform: rotate(-66.667deg);
    }
    100% {
      top: -310px;
      right: -390px;
    }
  }
`;
