import React from "react";

function Newsong() {
  return (
    <div className="register-container d-flex align-items-center justify-content-center" style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
      <form action="/addSongs" method="post" className="register-form bg-transparent border rounded p-4" style={{ width: '550px', textAlign: 'left' }}>
        <h1 className="text-center mb-4" style={{ fontSize: '2rem' }}>Add New Songs</h1>
        <div className="form-group">
          <label>Song Name:</label>
          <input type="text" name="name" className="form-control bg-transparent shadow" />
        </div>
        <div className="form-group">
          <label>Song Artist:</label>
          <input type="text" name="artist" className="form-control bg-transparent shadow" />
        </div>
        <div className="form-group">
          <label>Song Genre:</label>
          <input type="text" name="genre" className="form-control bg-transparent shadow" />
        </div>
        <div className="form-group">
          <label>Song Link:</label>
          <input type="text" name="link" className="form-control bg-transparent shadow" />
        </div>
        <input type="submit" value="ADD SONG" className="btn btn-success" style={{ width: '100%', fontSize: '1rem', backgroundColor: '#4caf50', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '3px' }} />
      </form>
    </div>
  );
}

export default Newsong;
