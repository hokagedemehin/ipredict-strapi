module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '689646056969320cf0ee9bd0a6ca88fa'),
  },
});
