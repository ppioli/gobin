
import './App.css';
import {ImageUploader} from "./features/imageUploader/ImageUploader";
import {BingoCard} from "./features/bingoCard/BingoCard";

function App() {
  return (
    <div>
      <header className="App-header">
        <p>
          Gobin
        </p>
      </header>
        <div class="container">
            <ImageUploader />
        </div>
    </div>
  );
}

export default App;
