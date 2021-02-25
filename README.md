# node_express_backend
Backend of a crud project build in node express
We will build full stack Tutorial application with:
    1. Tutorial has id, title, description, published status.
    2. User can create, retrieve, update and delete tutorials.
    3. THere is a search box for finding the Tutorials by title
Apis:
Methods        URLs                         Actions
GET            api/tutorials                get all tutorials
GET            api/tutorials/:id            get Tutorial by id
POST           api/tutorials                add new Tutorial
PUT            api/tutorials/:id            update Tutorial by id
DELETE         api/tutorials/:id            remove Tutorial by id
DELETE         api/tutorial                 remove all Tutorials
GET            api/tutorials?title=[kw]     find all tutorials which title contains "kw"
     