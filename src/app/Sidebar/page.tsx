import { SyntheticEvent } from "react";

type Props = {
    handleClick: React.Dispatch<React.SetStateAction<number>>;
    handleSubmit: <T extends SyntheticEvent>(e: T) => void;
    inputRef: React.Ref<HTMLInputElement>;
};

const Sidebar: React.FC<Props> = (props) => {
    return (
        <div>
            <button onClick={e => props.handleClick(prev => ++prev)}>
                click button from Sidebar
            </button>
            <br />
            <input ref={props.inputRef} /><br />
            <button onClick={props.handleSubmit}>Submit</button>
        </div>
    )
}

export default Sidebar;