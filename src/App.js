import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //reactquill
  //const [value, setValue] = useState('');
  // <ReactQuill theme="snow" value={value} onChange={setValue} />
  const editDoc = (e) => {};

  //
  const [title, setTitle] = useState();
  const [documents, setDocuments] = useState([]);

  // console.log(title);
  // console.log(documents);

  const saveDocument = () => {
    if (title == "") {
      alert("Please Enter Document Title");
    } else {
      const docInstance = {
        title: title,
        description: "",
      };
      setDocuments((currentDocArray) => [...currentDocArray, docInstance]);
      handleClose();
      setTitle("");
    }
  };

  const deleteDocument = (index) => {
    // console.log(index);
    const removedArray = [...documents];
    removedArray.splice(index, 1);
    setDocuments(removedArray);
    //console.log(removedArray);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center ">
          <div
            style={{ width: "500px", height: "150px" }}
            className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5"
          >
            <h1 className="text-primary">Docx Keeper</h1>
            <small>A complete document keeper application</small>
            <br />
            <Button variant="outline-primary" onClick={handleShow}>
              Add A Document <i class="fa-solid fa-file-circle-plus mx-2 "></i>
            </Button>
          </div>

          {/*Modal */}

          <Modal show={show} backdrop="static" onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Document Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Document title"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={saveDocument}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>

          {/* document display section */}
          <div className="row">
            {documents.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 mt-3">
                <div className="card">
                  <div className="card-body d-flex justify-content-between">
                    <h5 className="text-start p-1">{item.title} </h5>

                    <div className="buttons d-flex justify-content-end">
                      <Link to={"docs"}>
                        
                        {" "}
                        <button className="btn ">
                          <i class="fa-solid mx-1 fa-pen-to-square"></i>
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteDocument(index)}
                        className="btn "
                      >
                        <i class="fa-solid mx-1 fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
