import queryString from 'query-string';
import { NotificationManager } from 'react-notifications';

export const updateQueryParams = (value, location) => {
    const { search, pathname } = location;
    const query = queryString.parse(search);

    return `${pathname}?${queryString.stringify({ ...query, ...value }, { arrayFormat: 'comma' })}`;
};

// Date format for query params
export const dateFormat = (date) => {
    const year = date.$d.getFullYear();
    const month = String(date.$d.getMonth() + 1).padStart(2, '0');
    const day = String(date.$d.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const createNotification = (type, message) => {
    switch (type) {
        case 'info':
            NotificationManager.info(message, '', 5000);
            break;
        case 'success':
            NotificationManager.success(message, '', 5000);
            break;
        case 'warning':
            NotificationManager.warning(message, '', 5000);
            break;
        case 'error':
            NotificationManager.error(message, '', 5000);
            break;
        default:
            return
    };
}