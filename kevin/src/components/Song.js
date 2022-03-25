import React, {Component} from 'react';


export class Song extends Component {

  render(){
    return(
      <div className="mt-5 d-flex justify-content-left">
        <html>
  <head>
    <title>Home Work_1_Kevin Muhammad Haikal</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div class="main">
      <div class="copy-container">
        <h1>Create Playlist</h1>
      </div>

      <div class="contact-form">
        <p>Title</p>
        <input />

        <p>Description</p>
        <textarea></textarea>

        <p></p>
        <span class="btn message" onclick="alert('Thanks for submit')">
          submit
        </span>
      </div>

      <div class="contents">
        <h3 class="section-title">Music</h3>
        <div class="contents-item">
          <img class="img_1" src="https://cdn1-production-images-kly.akamaized.net/o_uGbSb01UIxiKwJtLMhU_JUTjg=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3952960/original/084023700_1646451999-Tulus_10.jpg" />
          <p class="p">TULUS</p>
          <b>ALBUM : </b> <br />
          <b>Manusia</b>
          <br />
          <button
            class="button"
            type="button"
            onclick="alert('Thanks for add Playlist')"
          >
            Add This Playlist
          </button>
        </div>
        <br />
      </div>
    </div>

    <script src="src/index.js"></script>
  </body>
</html>
      </div>
    )
  }
}