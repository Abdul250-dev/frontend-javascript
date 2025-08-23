## API Overview

Collection of information for movies, tv-shows, actors. Includes youtube trailer url, awards, full biography, and many other usefull informations. This api provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members. Support developers: https://www.buymeacoffee.com/SAdrian13

MoviesDatabase provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members

## Available Endpoints

1. Titles

2. Search

3. Actors

4. Utils

5. Obsolete

## Request and Response Format

- Requests

GET https://moviesdatabase.p.rapidapi.com/titles/tt0086250 HTTP/1.1
access-control-allow-credentials: true
access-control-allow-origin: *
content-length: 725
content-security-policy: default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests

-Responses

{
  "results": {
    "_id": "61e5812578c012aa34415687",
    "id": "tt0086250",
    "primaryImage": {
      "id": "rm512766208",
      "width": 1000,
      "height": 1500,
      "url": "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      "caption": {
        "plainText": "Al Pacino in Scarface (1983)",
        "__typename": "Markdown"
      },
      "__typename": "Image"
    },
    "titleType": {
      "text": "Movie",
      "id": "movie",
      "isSeries": false,
      "isEpisode": false,
      "__typename": "TitleType"
    },
    "titleText": {
      "text": "Scarface",
      "__typename": "TitleText"
    },
    "originalTitleText": {
      "text": "Scarface",
      "__typename": "TitleText"
    },
    "releaseYear": {
      "year": 1983,
      "endYear": null,
      "__typename": "YearRange"
    },
    "releaseDate": {
      "day": 5,
      "month": 4,
      "year": 1984,
      "__typename": "ReleaseDate"
    }
  }
}


## Authentication 

API key, headers required

## Error Handling

When working with the Movies Database API, you may encounter error responses due to invalid requests, missing parameters, or issues with authentication. Below are some common errors and how to handle them:

| HTTP Status Code              | Meaning                                                         | Common Cause                                                              | How to Handle                                                                                         |
| ----------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **400 Bad Request**           | The request could not be understood by the server.              | Missing required parameters or invalid query format.                      | Check that all required parameters are provided and in the correct format before sending the request. |
| **401 Unauthorized**          | Authentication failed.                                          | Missing or invalid `x-rapidapi-key` in the request headers.               | Ensure that your API key is correctly included in the headers.                                        |
| **403 Forbidden**             | The server understood the request, but refuses to authorize it. | API key not authorized for this resource or you have exceeded your quota. | Check your RapidAPI subscription plan and permissions.                                                |
| **404 Not Found**             | The requested resource could not be found.                      | Invalid endpoint or resource ID.                                          | Double-check the endpoint path and any IDs you are passing.                                           |
| **429 Too Many Requests**     | You have exceeded your rate limit.                              | Sending requests too frequently.                                          | Implement request throttling or delay between calls.                                                  |
| **500 Internal Server Error** | An error occurred on the server side.                           | Temporary issue with the API.                                             | Retry the request after some delay; if persistent, contact API support.                               |


## Usage Limits and Best Practices 

x-ratelimit-rapid-free-plans-hard-limit-limit
500000