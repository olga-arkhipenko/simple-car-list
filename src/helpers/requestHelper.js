export default {
    sendRequest(url, method = 'get', data) {
        const options = {
            method
        };
        const optionsHeaders = {
            Accept: 'application/json'
        };
        if (data) {
            if (data instanceof Blob) {
                options.body = data;
                options.headers = {
                    ...optionsHeaders,
                    'Content-Type': data.type
                };
            } else {
                options.body = JSON.stringify(data);
                options.headers = {
                    ...optionsHeaders,
                    'Content-Type': 'application/json'
                };
            }
        }
        return fetch(url, options);
    }
};
