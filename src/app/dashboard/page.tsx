import type { AppProps } from "next/app";
import { NextPage } from "next";
import Lazy from "@/components/lazy";

const Dashboard: NextPage<AppProps> = (props: AppProps): JSX.Element => {
  console.log("--------->", props);
  return (
    <div>
      Dashboard
      <Lazy />
    </div>
  );
};

// Dashboard.getInitialProps = () => {

// }

export default Dashboard;
