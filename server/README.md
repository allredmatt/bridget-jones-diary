# API

## Render hosted

You can interact with a live server [here](https://bridget-jones-diary.onrender.com).

## End points

| Route | Method | Response |
| --- | --- | --- |
| `/entries` | `GET` | Returns a JSON object containing all the diary entries in date order. |
| `/entries` | `POST` | Accepts a JSON object and uses it to create a new diary entry. |
| `/entries/:id` | `GET` | Returns a JSON object representing a single diary entry, selected by `:id`. |
| `/entries/:id` | `PATCH` | Updates a specific diary entry. You only need to include in the body the parts you want updating.|
| `/entries/:id` | `DELETE` | Deletes a specific entry, selected by `:id`. |
| `/entries/dates/:start&:end` | `GET` | Returns any diary entries between `:start` and `:end`, accepts any parameters that can construct a JS date|