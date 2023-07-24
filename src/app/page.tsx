// in next 13 by default all components are server side component so in order to use
// any window side work need to add "use client";
"use client";
import { AppProps } from 'next/app';
import { useRef, useState } from 'react';
import Sidebar from './Sidebar/page';

type Geo = {
  geo: {
    lat: string;
    lng: string;
  };
}

type Address = Geo & {
  [k: string]: string;
}

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
}

type Error = {
  message: string;
  status: number;
}

type Props = {
}

const Home: React.FC<Props> = (props) => {
  const [click, setClicks] = useState<number>(0);
  const [data, setData] = useState<Array<User>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const getData = async (): Promise<void> => {
    try {
      const users: Array<User> = await fetch(`https://jsonplaceholder.typicode.com/users`).then((res: Response) => res.json());
      if (users.length) {
        setData(users);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    setClicks(prev => ++prev);
    if (inputRef.current?.value)
      inputRef.current.value = "";
  }

  const fetchData = (e: React.SyntheticEvent): void => {
    getData();
  }

  return (
    <div>
      <h1>
        Home page
      </h1>
      <p>click: {click}</p>
      <button onClick={fetchData}>fetch Data</button>
      <Sidebar handleClick={setClicks} handleSubmit={handleSubmit} inputRef={inputRef} />

      {data.map(item => (
        <div>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Website: {item.address.geo.lat}</p>
          <p>Website: {item.address.city}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Home;