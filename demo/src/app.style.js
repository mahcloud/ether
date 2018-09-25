import Style from "react-emotion";

export default Style.div`
  &.app {
    > h1 {
      text-align: center;
      border-bottom: 1px solid grey;
      margin: 0;
      line-height: 50px;
      height: 50px;
    }

    .main-container {
      display: flex;

      .sidenav {
        flex: 0 0 150px;
        vertical-align: top;
      }

      .main-body {
        flex: 1;
      }
    }
  }
`;
