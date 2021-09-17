import React from 'react'

function FileList() {
    const File = ['File 1', 'File 2', 'File 3'];
    return (
        <div>
            {
                File.map(file => <ul><li>{file}</li></ul>)
            }
        </div>
    )
}

export default FileList
