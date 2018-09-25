import Style from "react-emotion";

export default Style.div`
  &.sidenav {
    border-right: 1px solid grey;
    min-height: calc(100% - 50px);

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style-type: none;

        a {
          display: block;
          width: 100%;
          padding: 12px;

          &:hover {
            background: #BDC3C7;
          }

          &.active {
            background: #BDC3C7;
          }
        }
      }
    }
  }
`;
