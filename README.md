# Grandeur-Backend
An Unified Backend for all my APIs

## APIs

|  REST  |                         Endpoints                          |
| ------ | ---------------------------------------------------------- |
| POST   | /crypto_api/get_price_for_cryptos                          |
| GET    | /crypto_api/get_price_for_cryptos/:cryptoNames/:currencies |
|        |                                                            |
| POST   | /ig_scrapper/get_user_info/                                |
| GET    | /ig_scrapper/get_user_info/:username                       |
|        |                                                            |
| POST   | /gh_api/get_repo_info                                      |
| GET    | /gh_api/get_repo_info/:username/:reponame                  |
| POST   | /gh_api/get_release_info                                   |
| GET    | /gh_api/get_release_info/:username/:reponame               |
|        |                                                            |
| MIDDLE | /req_res/users/                                            |
| POST   | /req_res/users/                                            |
| GET    | /req_res/users/:id                                         |
| PUT    | /req_res/users/:id                                         |
| DELETE | /req_res/users/:id                                         |


## Development Guide

#### NOTE : Please make sure you have yarn :: [Installing yarn](https://yarnpkg.com/en/docs/install)

* Initial setup

```bash
$ yarn install
```

* To watch for changes

```bash
$ nodemon
```
