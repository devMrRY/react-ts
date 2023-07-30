// optional catch all route will handle /first and /first/anything unlike catch all
import { AppProps } from "next/app";
import Link from "next/link";

interface Props extends AppProps {
  params: {
    path?: string;
  };
}

export default function (props: Props) {
  console.log("...[[path]]", props.params.path);
  return (
    <div>
      <h2>...dynamic optional catch all routes</h2>
      <Link href={`/Sidebar`}>Sidebar</Link>
      <br />
      <Link href={`/test/${encodeURIComponent(23)}`}>Test23</Link>
    </div>
  );
}
