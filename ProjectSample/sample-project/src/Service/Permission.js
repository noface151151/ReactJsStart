export const isAllowed = (user, rights) =>
rights.some(right => user.rights.includes(right));