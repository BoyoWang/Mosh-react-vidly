// import * as Sentry from "@sentry/react";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://c18d3cdb5dec4930afe5e3bf7e3075bf@o421221.ingest.sentry.io/5340665",
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.error(error);
}

export default {
  init,
  log,
};
