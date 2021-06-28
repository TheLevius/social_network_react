export const updateObjectInArray = (items: any, itemId: any, ObjPropName: any, newObjProps: any) => {
    return items.map((u: any) => {
        if (u[ObjPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}

