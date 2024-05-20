import React, { useContext, useState } from 'react';
import { AppContext } from '../context/App_Context';

const Profile = () => {
  const { user, userRecipe } = useContext(AppContext);
  const [deletedRecipes, setDeletedRecipes] = useState([]);

  const handleDelete = (id) => {
    setDeletedRecipes([...deletedRecipes, id]);
  };

  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome, {user.name}</h1>
        <h2>{user.gmail}</h2>
      </div>

      <div className="container">
        <div className="text-center mx-auto" style={{ width: "1200px" }}>
          <div className="row d-flex justify-content-center align-items-center">
            {userRecipe
              ?.filter((data) => !deletedRecipes.includes(data._id))
              .map((data) => (
                <div key={data._id} className="col-md-3 my-3">
                  <div className="card bg-dark text-light">
                    <div className="d-flex justify-content-center align-items-center p-3">
                      <img
                        src={data.imgurl}
                        className="card-img-top"
                        alt={data.title}
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "10px",
                          border: "2px solid yellow",
                        }}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => handleDelete(data._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
