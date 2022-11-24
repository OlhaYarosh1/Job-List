const oneDay = 24 * 60 * 60 * 1000;

export const DateUtils = {
    'calcDaysAgo': (createdAt) => {
        const postedDate = new Date(createdAt);
        let today = new Date()
        const diffDays = Math.round(Math.abs((today - postedDate) / oneDay));
        return diffDays;
    }
}
