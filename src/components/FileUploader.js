const FileUploader = (props) => {
  return (
    <div>
      <input
        type="file"
        name="filename"
        onChange={(event) => props.submitHandler(event.target.files[0])}
      ></input>
    </div>
  );
};

export default FileUploader;
