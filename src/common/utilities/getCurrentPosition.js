/* eslint-disable no-undef */

export const getCurrentPosition = () => new Promise(((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
}));
