// in next 13 by default all components are server side component so in order to use
// any window side work need to add "use client";
"use client";
import { AppProps } from "next/app";
import { ElementRef, useRef, useState } from "react";
import Sidebar from "./Sidebar/page";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Home Page',
}

type t1 =  {
  fun: (name: string) => string;
} & { fun: (name: string) => number; }

let t: t1['fun'] = (a: string) => a;


type t2 =  {
  name: string;
} & { name: number; }

// Type 'number' | 'string' is not assignable to type 'never'.
let t22: t2['name'] = 22;

type Geo = {
  geo: {
    lat: string;
    lng: string;
  };
};

type Address = Geo & {
  [k: string]: string;
};

type User = {
  name: string;
  email: string;
  website: string;
  username: string;
  phone: string;
  id: number;
  company: {
    [k: string]: string;
  };
  address: Address;
};

type Error = {
  message: string;
  status: number;
};

type Props = {};

type data = {
  name: string
} | {[k: string]: number};

type ApiResponse =
  | { status: 200; data: data }
  | { status: number } & Error;

let resp: ApiResponse = {
  status: 500,
  message: "Error message"
}

let resp2: ApiResponse = {
  status: 200,
  data: {
    name: "rahul",
    id: 3,
  }
}

const timer = (num: number): Promise<number> => {
  return new Promise<number>((res, rej) => {
    setTimeout(() => {
      res(0);
    }, num * 1000);
  });
};

function callTimer(): Promise<number> {
  return timer(5);
}

const Home: React.FC<Props> = (props) => {
  const [click, setClicks] = useState<number>(0);
  const [data, setData] = useState<Array<User>>([]);
  const inputRef = useRef<ElementRef<"input">>(null);

  const getData = async (): Promise<void> => {
    try {
      const users: Array<User> = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      ).then((res: Response) => res.json());
      if (users.length) {
        setData(users);
      }
      callTimer();
    } catch (error: unknown) {
      // unknown just like any can store anything but unknown can't be assign to anything unlike any
      // any disables type checking at compile time
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    setClicks((prev) => ++prev);
    if (inputRef.current?.value) inputRef.current.value = "";
  };

  const fetchData = (e: React.SyntheticEvent): void => {
    getData();
  };

  return (
    <div>
      <h1>Home page</h1>
      <p>click: {click}</p>
      <button onClick={fetchData}>fetch Data</button>
      <Sidebar
        handleClick={setClicks}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />

      {data.map((item) => (
        <div>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Website: {item.address.geo.lat}</p>
          <p>Website: {item.address.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
