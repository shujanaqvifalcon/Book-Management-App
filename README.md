# Book Management App

         Idea
The books are related to Authors in a way that a single Author could have many
books but a book can only belong to 1 Author. The books are related to a library in a way that a
single book may belong to multiple libraries and a library may have multiple books. A book is
always related to an author but it is possible it does not belong to any library.
       
       
         Tech-stack
     1. Node JS.
     2. Express Js FrameWork.
     3. MySql DB.
     4. Sequelize ORM.
         
         
         
         Features
     1. Crud For an Author.
     2. Crud For library.
     3. Crud For Book.
     4. Junction-table to connect a book with multiple Libraries.
     
     
Installation steps to run server locally
1. Open a terminal
2. Clone the project from the git clone link ( Command : git clone url)
3. Go into project directory.
4. Run npm install
5. Create a copy of .env.example and rename it to .env
6. Run nodemon to start the server



             CMDS
     1. npm install (To install the packages).
     2. npm run db:migrate (To Migrate All Tables).
     3. npm run db:seed (To run all seeders).
     4. npm run dev (To run server).
