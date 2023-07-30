"use client";
import { AppProps } from "next/app";
import { useRouter, usePathname, useSearchParams  } from "next/navigation";    // for outside next.js app use nex/router;

interface Props extends AppProps {
  params: {
    path: string;
  };
}

export default function (props: Props) {
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  return (
    <div>
      <button onClick={() => router.push("/dashboard")}>
        Navigate to Dashboard
      </button>
    </div>
  );
}
