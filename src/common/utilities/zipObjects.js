export const zipObjects = (zipInObject, zipFromObject) => {
    Object.keys(zipInObject).forEach(cur => {
        if (zipInObject[ cur ] !== zipFromObject[ cur ]) {
            zipInObject[ cur ] = zipFromObject[ cur ];
        }
    });
};
