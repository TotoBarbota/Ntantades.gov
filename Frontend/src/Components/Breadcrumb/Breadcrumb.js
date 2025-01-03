import { IoHome } from "react-icons/io5";

import './Breadcrumb.css'
import { useEffect, useState } from "react";

function Breadcrumb() {

    const [breadcrumbTitle, setBreadcrumbTitle] = useState('Ntantades.gov');

    useEffect(() => {
        setBreadcrumbTitle(breadcrumbTitle + window.location.pathname);
    }, []);

    return (
        <div className='breadcrumb'>
            <p> <IoHome/> / {breadcrumbTitle}</p>
        </div>
    );
}

export default Breadcrumb;