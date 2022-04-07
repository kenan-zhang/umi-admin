const routerDynamic = (initialState: any) => {
    const { userId, role } = initialState || {};
    return {
        userId: userId,
        role: role === 'ADMIN',
        auths: ['dashboard', 'account', 'crm'],
    }
};
export default routerDynamic;