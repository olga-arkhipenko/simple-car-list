/* eslint-disable func-names */

const responseHelper = {
    getResponse(promise) {
        return promise
            .then(response => (response.ok
                ? response.json()
                : (function () { throw new Error(response.statusText); }())));
    }
};

export default responseHelper;
