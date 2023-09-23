export default function stringToDate(data) {
    const [date, time] = data.split(' ');
    const [day, month, year] = date.split('/').map(Number);
    const [hour, minute] = time.split(':').map(Number);
    return month > 0 ? new Date(year, month - 1, day, hour, minute) : new Date(year, month, day, hour, minute);
}
//# sourceMappingURL=stringToDate.js.map