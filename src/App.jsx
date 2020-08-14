import React, { useState } from "react";
import { Title, UploadForm, ImageGrid, Modal } from "./comps";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
