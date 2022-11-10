import {IElement} from '@/interfaces/IElement';

import {Listbox} from '@headlessui/react';
import {memo, useState} from 'react';

import styles from './FilterItem.module.scss';

export interface IFilterUpdate {
    type: string;
    value: string | null;
}

interface IBaseProps {
    title: string;
    elements?: IElement[];
    type: string;
    onFilterUpdate: (data: IFilterUpdate) => void;
}

function FilterItem(props: IBaseProps) {
    if (!props.elements || !props.elements.length) {
        return <></>;
    }

    const [selected, setSelected] = useState(props.elements[0]);

    function onChange(item: IElement) {
        setSelected(item);

        props.onFilterUpdate({
            type: props.type,
            value: item.value
        });
    }

    return (
        <article className={styles.filter}>
            <Listbox
                value={selected}
                onChange={onChange}
            >
                <Listbox.Label className={styles.filter__label}>
                    {props.title}:
                </Listbox.Label>

                <Listbox.Button className={styles.filter__button}>
                    <span>{selected.name}</span>
                    <i className={'far fa-chevron-down'}/>
                </Listbox.Button>

                <Listbox.Options className={styles.filter__options}>
                    {props.elements.map(element => (
                        <Listbox.Option
                            className={styles.filter__optionsItem}
                            key={element.id}
                            value={element}
                        >
                            <span className={styles.element}>
                                {element.name}
                            </span>
                        </Listbox.Option>
                    ))}
                </Listbox.Options>

            </Listbox>
        </article>
    );
}

export default memo(FilterItem);
