/**
 * Transform BEM css names to css modules
 **/
function useTransformCSS(styles: Record<string, string>, classNames?: string) {
    if (!classNames)
        return;

    const classNamesArray = classNames.split(' ');

    console.log(classNamesArray);
    console.log(styles['button']);

    return classNamesArray.map((className) => {
        return styles[className];
    }).join(' ');
}

export default useTransformCSS;
