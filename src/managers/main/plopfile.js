// Inspiration and help https://blog.logrocket.com/automatically-generate-your-own-reacts-with-plop-js-2da3b39914f3/
export default (plop) => {
  plop.setActionType('runRoute', function ({ route }) {
    require('./run-route').executeRoute(route)

    // if something went wrong
    throw 'error message'
    // otherwise
    return 'success status message'
  })

  plop.setGenerator('main', {
    description: 'Main route for plop-scaffold',
    prompts: [
      {
        type: 'list',
        name: 'route',
        message: 'Select plop-scaffold utility',
        choices: [
          {
            name: 'React component or hook',
            value: 'react',
          },
          {
            name: 'Node client project',
            value: 'project-cli',
          },
          {
            name: 'React Component Project',
            value: 'project-react-component',
          },
          {
            name: 'NextJS React Page',
            value: 'react-next-page',
          },
        ],
      },
    ],
    actions: [
      {
        type: 'runRoute',
        configProp: 'available from the config param',
      },
    ],
  })
}
