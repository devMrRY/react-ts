"use client";
import { SyntheticEvent } from "react";

type Props = {
  handleClick: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: <T extends SyntheticEvent>(e: T) => void;
  inputRef: React.Ref<HTMLInputElement>;
};

type SidebarProps = React.ComponentProps<typeof Sidebar>

type GetFunctProps<T> = (...args: T[]) => void;

type extract<T> = {
  [key in keyof T]: boolean;
};

type typeApiCall<T> = T extends (...args: infer Args) => void ? (...cb: Args) => void : never;

type MyFunc<T> =  T extends (...args: infer Arg) => any ? (...args: Arg) => Arg[0] : never;


const Sidebar: React.FC<Props> = (props) => {
  function apiCall<T extends (...args: any) => any>(cb: MyFunc<T>): ReturnType<T> {
    // return cb("test", 1); // no error but undesired result Nan
    return cb(0, 1);
  }

  type test = MyFunc<typeof callback>

  let aa: number = apiCall<typeof callback>(callback)

  function callback(x: number, y: number){
    return x + y;
  }

  return (
    <div>
      <button onClick={(e) => props.handleClick((prev) => ++prev)}>
        click button from Sidebar
      </button>
      <br />
      <input ref={props.inputRef} />
      <br />
      <button onClick={e => apiCall(callback)}>Submit</button>
    </div>
  );
};

export default Sidebar;
