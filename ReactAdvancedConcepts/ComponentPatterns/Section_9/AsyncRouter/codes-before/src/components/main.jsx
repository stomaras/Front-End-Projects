import { useLoaderData, defer, Await } from "react-router";
import delay from "../util/delay";
import { MainContainer, MainHeading } from "./styled-elements";
import { Suspense } from "react";

const Main = () => {
  const {promise} = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>Main - 
        <Suspense fallback="fetching...">
          <Await resolve={promise}>
            {(data) => <span>{data}</span>}
          </Await>
        </Suspense>

      </MainHeading>
    </MainContainer>
  );
};

function loader() {
  return defer({data: delay("fetched data", 1000)});
}

export const mainRoute = { element: <Main />, loader };
