import { useEffect } from 'react';

const accessToken = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
const apiUrl = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

const UseFetchJobs = (result) => {

    useEffect(() => {

        fetch(apiUrl, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken
            })
        })
        .then(data => data.json())
        .then((data) => {
            result(data);
        });
    }, [result]);
}

export default UseFetchJobs;
