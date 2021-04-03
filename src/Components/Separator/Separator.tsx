import React from "react";
import "./Separator.scss";

interface ISeparatorProps {
    isLineHidden?: boolean;
}

const Separator: React.FC<any> = (props: ISeparatorProps) => {
    const isLineVisible: boolean = props.isLineHidden ? false : true;

    return (
        <div className="Separator">
            <br />
            {isLineVisible ? <div /> : <br />}
            <br />
        </div>
    );
};

export default Separator;
