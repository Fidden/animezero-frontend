/**
 * Transform BEM css names to css modules
 **/
function useTransformCSS(styles: Record<string, string>, classNames?: string): string {
    if (!classNames) {
        return '';
    }

    const classNamesArray = classNames.split(' ');

    return classNamesArray.map((className) => {
        // find the css module or return the original class name
        return styles[className] ?? className;
    }).join(' ');
}

export default useTransformCSS;
