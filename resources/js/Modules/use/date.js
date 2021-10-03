export const userDate = () => {

    const format = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).format(new Date(date));
    };

    return { format };
}
