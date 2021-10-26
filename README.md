# S Notes
<p> A full stack note taking app. </p>

<h1>How It's Made:</h1>
<p>Utilized: </p> 
    <ul> 
        <li>JavaScript</li>
        <li>Node</li>
        <li>Express</li>
        <li>EJS</li>
        <li>CSS</li>
        <li>MongoDB</li>
    </ul>

<p>Users are able to create a note and have a list of them display on side.<p/>


<h1>Lessons Learned:</h1>
<p>Through building this app, I was able to get comfortable with the basics of GET, PUT, POST and DELETE. As well as further familiarizing myself in using EJS. Additionally, it was a challenge to implement accordion for the pushed notes. </p>


<h1>Optimizations</h1>
<p>As someone with no background in art, styling could definitely use improvements.</p>
<p>Optimize CSS</p>
<p>Some of the code needs to refactored for better readabiility. Some deprecated code (bodyparser) needs to be updated </p>
<p>Upcoming features: </p>
    <ul> 
        <li>Creating a user account</li>
        <li>Accessibilty features like, high contrast and zoom in options</li>
        <li> Allowing users to edit previous notes</li>
    </ul>
    
    
    
---

# Running the app Locally

<h2> Install </h2>

`npm install`


<h2> Things to add </h2>

- Create a `.env` file and add the following as `key = value` 
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`

(don't forget to add your `.env` to `.gitIgnore` to keep your secrets a secret)

<h2> Run </h2>

check package.json script for nodemon 
# notes-ToDo
