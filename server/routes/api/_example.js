const url = 'api/example'

module.exports = [
  {

    method: `GET`,
    path: `/${url}`,

    handler: () => {
      return {
        message: "hello"
      }
    }

  },
]