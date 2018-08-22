export const getPropertyOrDefault = (object, getter, defaultValue = '') => getter(object) || defaultValue;
