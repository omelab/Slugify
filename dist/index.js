"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
var _ = require('lodash');
function slugify(text) {
    return _.deburr(text) // Remove diacritics
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}
exports.slugify = slugify;
