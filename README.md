# React-Poem-Exam
This is my first full stack project using ReactJS with Firebase.

It's a website for an artist who is creating diffrent types of paintings on glass and plastic products, which is based on customer desire, idea, description etc.

##How to start the project

    Clone the repository: https://github.com/dimitarqnkulow/ReactJS-Glass-Painting--Website;

    Navigate to react-poem-app folder and use the following commands in the terminal:
        npm i;
        npm run dev

Application overview:

Every page has a footer and a dynamic navigation, which depends on logged/authenticated user.

Public pages, which can be used by all users:

    Home page Contains:
        About us;
        Story about the artist;
        Top 3 trending articles;

    Catalogue page Contains:
        Shows all articles available;

    Register page Contains:
        3 input fields with dynamic validations requiring email, repeatpassword and password must be matching.

    Login page Contains:
        2 input fiedls with dynamic validations requiring email and password.

Private pages, which can be used by authenticated users:

    Order page From this page, authentciated user can order their own idea for a paint on glass. Contains:
        3 required input fields and 1 not required.
    Liked by the user articles page Contains:

    List of the articles, which are liked by the current logged in user;

    Details page Page, which can be used by every user, but not authenticated users can't like or unliked the post.

    Contains:
        Detailed infromation about an article - optional price, crafting time, number of likes, like or unlike button.

