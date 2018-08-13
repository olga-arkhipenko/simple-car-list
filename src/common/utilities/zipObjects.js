/* eslint-disable no-param-reassign */

export const zipObjects = (zipInObject, zipFromObject) => {
    Object.keys(zipInObject).forEach(property => zipInObject[ property ] = zipFromObject[ property ]);
};
