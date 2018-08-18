const url = 'api/example'

module.exports = [
  {
    method: `GET`,
    path: `/${url}`,

    handler: () => {
      return {
        getUsers: "all" 
      }
    }

  },

  {
    method: `GET`,
    path: `/${url}/{id}`,

    handler: req => {

      return { 
        getUserWithId: req.params.id 
      }
    }

  },

  {
    method: `POST`,
    path: `/${url}`,

    handler: req => {
      return { 
        createUser: req.payload.name 
      }
    }

  },

  {
    method: `PUT`,
    path: `/${url}/{id}`,

    handler: req => {
      return { 
        userId: req.params.id,
        newName: req.payload.name
      }
    }

  },

  {
    method: `PATCH`,
    path: `/${url}/{id}`,

    handler: req => {
      return { 
        userId: req.params.id,
        newName: req.payload.name
      }
    }

  },

  {
    method: `DELETE`,
    path: `/${url}/{id}`,

    handler: req => {
      return { 
        deleteUserWithId: req.params.id 
      }
    }

  },
]