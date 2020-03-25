import React, {FC, Suspense} from "react";
import PageLoader from "../common/PageLoader/PageLoader";


const withSuspense = ({Component}:{Component:FC}) => {
    return (props:any) => {
        return <Suspense fallback={<PageLoader/>}>
            <Component {...props} />
        </Suspense>
    }
};


export default withSuspense;