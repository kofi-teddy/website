// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });


module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
      },
      options: {
        ssl: true,
      },
    },
  },
});

// mongodb+srv://admin:<password>@cluster0.bktws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


