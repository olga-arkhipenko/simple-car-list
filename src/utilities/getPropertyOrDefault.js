export const getPropertyOrDefault = (object, getter, defaultValue = '') => getter(object) ? getter(object) : defaultValue;
