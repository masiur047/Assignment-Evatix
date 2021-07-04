import { Fragment } from 'react'
import Navbar from './nabvar';

function Layout({children})
{
    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
}

export default Layout