import '../../components/justificativaDePonto/styles.css'
import React, {useState} from 'react';
import axios from 'axios';

export default function Upload(){
    const [selectedFile, setSelectedFile] = useState();

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();

        formData.append("File", selectedFile);

        const url = "http://localhost:3001/api/upload"

        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };

        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
          });
      

        /*fetch("http://localhost:3001/api/upload", {
            method: "POST",
            body: formData,
            headers: {
                'content-type': 'multipart/form-data',
              },
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result.status)
        })*/
    };

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0].name)
	};

    return (
        <>
            <h1>Upload</h1>

            <form  >
                <div className="input-attachment-wrapper">Arquivo
                <input 
                    type="file"
                    name='file'
                    onChange={changeHandler}/>
                </div>

                <button onClick={onSubmit}> Enviar </button>
            </form>
        </>
    )
}