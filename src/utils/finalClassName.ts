export const finalClassName = (baseClass: string, isSelfId: boolean) => {
    if (isSelfId) {
        return `${baseClass} ${baseClass}_right`
    } else {
        return `${baseClass}`
    }
}