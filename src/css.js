const string = `.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
.skin *::before,
.skin *::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: #ffe600;
    height: 100vh;
  }
  .sector {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-top-left-radius: 30px 12px;
    border-top-right-radius: 30px 12px;
    background: black;
  }
  .nose {
    position: relative;
    border: 10px solid black;
    border-color: black transparent blue transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    99% {
      transform: rotate(0deg);
    }
  }
  
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }
  .eye {
    border: 3px solid #000;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
  }
  .eye::before {
    content: "";
    display: block;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    border: 3px solid black;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -30px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    position: relative;
    position: absolute;
    margin-left: -50px;
    left: 50%;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0px 50px;
    transform: rotate(-20deg) translateX(-53px);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0px;
    transform: rotate(20deg) translateX(53px);
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  
  .mouth .down {
    height: 170px;
    position: absolute;
    top: 0px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .bigTriangle {
    border: 3px solid black;
    width: 150px;
    height: 900px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #96000a;
    overflow: hidden;
  }
  .mouth .down .bigTriangle .smallCircle {
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    border: 3px solid black;
    position: absolute;
    left: 50%;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
  }
  
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
  .face.left {
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.right {
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
  }
`;

export default string;
