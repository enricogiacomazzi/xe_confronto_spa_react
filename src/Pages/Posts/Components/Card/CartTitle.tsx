import React, {useEffect, useState} from 'react';


export const CardTitle: React.FC<{title: string, likes: number}> = ({title, likes}) => {
    const [level, setLevel] = useState(0);
    useEffect(() => {
        setLevel(likes >= 42 ? 0 : 6 - Math.floor(likes / 6));
    }, [likes, level]);

    return React.createElement(
        `h${level > 0 ? level : 1}`,
        {style: {textTransform: level > 0 ? "capitalize" : "uppercase" }},
        title);
}
