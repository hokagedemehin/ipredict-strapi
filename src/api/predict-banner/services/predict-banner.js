'use strict';

/**
 * predict-banner service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::predict-banner.predict-banner');
