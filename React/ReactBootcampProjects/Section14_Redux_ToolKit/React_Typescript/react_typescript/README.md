### URL 
registry.npmjs.org/-/v1/search?text=react

Redux Store

repositories --------> loading -------> True/False whether we are fetching data
             --------> data ----------> List of repositories
             --------> error ---------> String, error message if one occurred during fetch

Action Creators -------> searchRepositories(name)
Actions ---------------> SearchRepositoriesSuccess
        ---------------> SearchRepositoriesError
        ---------------> SearchRepositories

Actions Types =============> 'search_repositories'
              =============> 'search_repositories_success'
              =============> 'search_repositories_error'

index.ts