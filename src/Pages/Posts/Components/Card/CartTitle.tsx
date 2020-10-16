import React, {useCallback, useMemo} from 'react';


export const CardTitle: React.FC<{title: string, likes: number, click: () => void}> = ({title, likes, click}) => {
    const level = useMemo(() => likes >= 42 ? 0 : 6 - Math.floor(likes / 6), [likes]);

    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        click();
    }

    const CustomTag: any = `h${level > 0 ? level : 1}`;
    return <CustomTag onClick={onClick} style={{textTransform: level > 0 ? "capitalize" : "uppercase" }}>
        {title}
    </CustomTag>
}
