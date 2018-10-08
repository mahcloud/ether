import { Breadcrumbs, Crumb } from "../../src";
import { fireEvent, render } from "react-testing-library";
import React from "react"; // eslint-disable-line no-unused-vars

test("3 links", () => {
  const{container} = render(
    <Breadcrumbs>
      <Crumb>
        <a href="/pages">One</a>
      </Crumb>
      <Crumb className="funky">
        <a href="/pages/two">Two</a>
      </Crumb>
      <Crumb>Three</Crumb>
    </Breadcrumbs>
  );

  expect(container.firstChild).toMatchSnapshot();
});
