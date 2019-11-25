import React, {Suspense} from "react";
import PageLoader from "../common/PageLoader/PageLoader";


const withSuspense = Component => {
    return (props) => {
        return <Suspense fallback={<PageLoader/>}>
        <Component {...props} />
    </Suspense>}
};


export default withSuspense;