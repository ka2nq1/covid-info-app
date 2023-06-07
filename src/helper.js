import queryString from 'query-string';

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
