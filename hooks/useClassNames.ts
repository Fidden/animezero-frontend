import {useMemo} from 'react';

export default function useClassNames(...args: any) {
    return useMemo(() => {
        let resultClassnames = '';
        for (const arg of args) {
            if (typeof arg === 'string') {
                resultClassnames += ` ${arg}`;
                continue;
            }

            for (const [key, value] of Object.entries(arg)) {
                if (value) {
                    resultClassnames += ` ${key}`;
                }
            }
        }

        return resultClassnames;
    }, [args]);
}
