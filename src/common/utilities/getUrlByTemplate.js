import UrlAssembler from 'url-assembler';

export const getUrlByTemplate = (template, params) => new UrlAssembler().template(template).param(params).toString();
