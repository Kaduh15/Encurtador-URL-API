
<div align="center" id="top">
  <img src="./.github/logo-sem-bg.png" alt="Encurtador Url" />

  &#xa0;

  <!-- <a href="https://encurtadorurl.netlify.app">Demo</a> -->
</div>

# Encurtador de URL - API 🔗

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/kaduh15/encurtador-url?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/kaduh15/encurtador-url?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/kaduh15/encurtador-url?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/kaduh15/encurtador-url?color=56BEB8">

  <img alt="Github stars" src="https://img.shields.io/github/stars/kaduh15/encurtador-url?color=56BEB8" />
</p>

<p align="center">
  <a href="##Tech-Stack">Technologies</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/kaduh15" target="_blank">Author</a>
</p>

## :checkered_flag: Starting

Install Encurtador-URL with npm

```bash
# Clone this project
$ git clone https://github.com/kaduh15/encurtador-url-api

# Access
$ cd encurtador-url-api

# Install dependencies
$ npm install

# Run the project
$ npm start

# The server will initialize in the <http://localhost:3001>
```

## API Reference

### add URL

#### **POST** _`/add-url`_

- Objective: Adiciona URL.
- Code HTTP: `201 - Created`;
- Body (exemplo):

```json
{
  "url": "http://www.exemplo.com", // Any valid URL;
}
```

RESPONSE Body:

```json
{
  "id":1,
  "shortURL": "ty2ZF", // Short URl;
  "originalURL": "http://www.exemplo.com", // Original URL
}
```

### add URL

#### **GET** _`/:shortURL`_

- Objective: Redirect to Original URL.
- Code HTTP: `200 - Success`;

```
  RESPONSE Redirected to the desired URL
```

## Tech Stack

**Server:**
![Node JS](https://img.shields.io/badge/Node_JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-white?style=for-the-badge&logo=express&logoColor=111)

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by [Kaduh15]("https://github.com/kaduh15)

&#xa0;

<a href="#top">Back to top</a>
