import { useState } from "react";
import Progress from "./Progress";

const UploadingDestinations = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file(png or jpeg");
    }
  };

  return (
    <div className="p-sidebar-form">
      <form>
        <h5 className="package-d-head">Book This Package</h5>
        <div className="row">
          <div className="col-lg-8">
            <input type="text" placeholder="Destination Title" />
          </div>
          <div className="col-lg-8">
            <input type="file" onChange={onChangeHandler}></input>
            <div className="output">
              {error && <div className="error">{error}</div>}
              {file && <div>{file.name} </div>}
            </div>
          </div>
          <div className="col-lg-8">
            <textarea
              cols={30}
              rows={7}
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className="col-lg-8">
            <input type="submit" defaultValue="Book Now" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadingDestinations;
