import React, { Fragment } from "react";
import AwesomeChair from "./AwesomeChair/AwesomeChair";
import LetsBuild from "./Letsbuild/LetsBuild";
import RecentArticles from "./RecentArticles/RecentArticles";

export const Items = () => {
  return (
    <Fragment>
      <AwesomeChair />

      <LetsBuild />
      <RecentArticles />
    </Fragment>
  );
};

export default Items;
