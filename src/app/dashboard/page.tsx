import type { AppProps } from 'next/app';
import { NextPage } from 'next';

const Dashboard: NextPage<AppProps> = (props: AppProps): JSX.Element => {
    console.log(props)
    return (
        <div>Dashboard</div>
    )
}

// Dashboard.getInitialProps = () => {

// }

export default Dashboard;