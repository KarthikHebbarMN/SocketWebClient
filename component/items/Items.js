import React,{Fragment} from "react";
import AwesomeChair from "./AwesomeChair/AwesomeChair";
// import Personalised from "./Personalised/Personalised";
import LetsBuild from "./Letsbuild/LetsBuild";
import RecentArticles from "./RecentArticles/RecentArticles";

export const Items = () => {
  return (
    <Fragment>
      <AwesomeChair />
      {/* <Personalised /> */}
      <LetsBuild />
      <RecentArticles />
    </Fragment>
  );
};

export default Items;
