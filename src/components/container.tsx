import React from "react";
export type Tchildern = {
    children : React.ReactNode
};
export default function Container({children}: Tchildern){
    return(
        <div className="my-0 mx-[15%]">
            {children}
        </div>
    )
}