import React, {useCallback} from 'react';


export const CardTitle: React.FC<{title: string, likes: number, click: () => void}> = ({title, likes, click}) => {
    const cb = useCallback(() => likes >= 42 ? 0 : 6 - Math.floor(likes / 6), [likes]);

    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        click();
    }

    const CustomTag: any = `h${cb() > 0 ? cb() : 1}`;
    return <CustomTag onClick={onClick} style={{textTransform: cb() > 0 ? "capitalize" : "uppercase" }}>
        {title}
    </CustomTag>
}
