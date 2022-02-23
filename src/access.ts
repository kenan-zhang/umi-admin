const routerDynamic = (initialState: any) => {
    const { userId, role } = initialState || {};
    return {
        userId: userId,
        role: role === 'ADMIN'
    }
};
export default routerDynamic;