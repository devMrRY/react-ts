import { AppProps } from "next/app"

interface Props extends AppProps {
    params: {
        path: string;
    }
}

export default function (props: Props){
    console.log("...path", props.params.path)
    return (
        <div>...dynamic catch all routes</div>
    )
}