import {HTMLAttributes, PropsWithChildren, useEffect, useRef} from 'react';

interface IClickAwayListenerProps extends HTMLAttributes<HTMLDivElement> {
    onClickAway: () => void;
}

function ClickAwayListener(props: PropsWithChildren<IClickAwayListenerProps>) {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickAway = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            props.onClickAway();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickAway);
        return () => {
            document.removeEventListener('mousedown', handleClickAway);
        };
    });

    return (
        <div
            ref={ref}
            {...props}
        >
            {props.children}
        </div>
    );

}

export default ClickAwayListener;
