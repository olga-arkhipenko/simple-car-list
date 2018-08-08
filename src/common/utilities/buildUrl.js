import UrlAssembler from 'url-assembler';

export const buildUrl = (baseUrl, prefix, segment, query) => new UrlAssembler(baseUrl)
    .prefix(prefix)
    .segment(segment)
    .query(query)
    .toString();
