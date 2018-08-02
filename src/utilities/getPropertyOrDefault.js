const getPropertyOrDefault = (object, getter, defaultValue = '') => getter(object) ? getter(object) : defaultValue;

export default getPropertyOrDefault;
