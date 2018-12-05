const pullAll = <T>(array: T[], values: T[]): T[] => array.filter(item => values.indexOf(item) === -1)

export default pullAll