export const updateObjectInArray = (item, itemID, objPropName, updateObj) => {
    return item.map(u => {
        if (u[objPropName] === itemID) return {...u, ...updateObj};
        return u;
    })
}