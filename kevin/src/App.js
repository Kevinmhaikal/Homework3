import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
          <img class="img_1" src="img/tulus.jpg" />
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

  </body>
</html>
  );
}

export default App;
