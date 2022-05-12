'use strict';

/**
 * trivia-attempt service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trivia-attempt.trivia-attempt');
