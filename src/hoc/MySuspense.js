import React, {Suspense} from "react";
import PageLoader from "../common/PageLoader/PageLoader";


const MySuspense = Component=> props=>{
    return <Suspense fallback={<PageLoader/>}>
        <Component {...props}/>
    </Suspense>
};
export  default MySuspense;