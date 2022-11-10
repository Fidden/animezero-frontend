import classNames from 'classnames';
import {PropsWithChildren, ReactNode} from 'react';

import styles from './BreadCrumb.module.scss';

interface IBreadCrumbProps {
    pageTitle: string;
    title: string | JSX.Element | ReactNode;
    subtitle: string;
    className?: string;
}

function BreadCrumb(props: PropsWithChildren<IBreadCrumbProps>) {
    return (
        <section className={classNames(styles.breadcrumb, props.className)}>
            <div className={styles.breadcrumb__page}>
                <p className={styles.breadcrumb__pageTitle}>
                    Anime Zero
                </p>
                <p className={styles.breadcrumb__pageCurrent}>
                    / {props.pageTitle}
                </p>
            </div>
            <p className={styles.breadcrumb__title}>
                {props.title}
            </p>

            <p className={styles.breadcrumb__subtitle}>
                {props.subtitle}
            </p>

            {props.children}
        </section>
    );
}

export default BreadCrumb;
