export const finalClassName = (styleObj: any, baseClass: string, isSelfId: boolean) => {
    if (isSelfId) {
        return `${styleObj[baseClass]} ${styleObj[`${baseClass}_right`]}`
    } else {
        return `${styleObj[baseClass]}`
    }
}