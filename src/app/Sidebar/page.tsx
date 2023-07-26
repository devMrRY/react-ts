import { SyntheticEvent } from "react";

type Props = {
  handleClick: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: <T extends SyntheticEvent>(e: T) => void;
  inputRef: React.Ref<HTMLInputElement>;
};

type GetFunctProps<T> = (...args: T[]) => void;

type extract<T> = {
  [key in keyof T]: boolean;
};

type typeApiCall<T> = T extends (...args: infer Args) => void ? (...cb: Args) => void : never;

const Sidebar: React.FC<Props> = (props) => {
  function apiCall<T extends (...args: any) => any>(cb: T): ReturnType<T> {
    // return cb("test", 1); // no error but undesired result Nan
    return cb(0, 1);
  }

  let aa: number = apiCall(callback)

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
