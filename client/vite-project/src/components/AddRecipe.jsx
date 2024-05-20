import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { addRecipe } = useContext(AppContext);

  const [formData, setFormData] = useState({
    title: "",
    ist: "",
    ing1: "",
    ing2: "",
    ing3: "",
    ing4: "",
    qty1: "",
    qty2: "",
    qty3: "",
    qty4: "",
    imgurl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl } = formData;

    const result = await addRecipe(
      title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgurl
    );

    
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Add Apartment</h2>
        <form
          onSubmit={onSubmitHandler}
          style={{
            width: "400px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              value={formData.title}
              onChange={onChangeHandler}
              name="title"
              type="text"
              className="form-control"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ist" className="form-label">
              Description
            </label>
            <input
              value={formData.ist}
              onChange={onChangeHandler}
              name="ist"
              type="text"
              className="form-control"
              id="ist"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ing1" className="form-label">
              Address
            </label>
            <input
              value={formData.ing1}
              onChange={onChangeHandler}
              name="ing1"
              type="text"
              className="form-control"
              id="ing1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ing2" className="form-label">
              Price
            </label>
            <input
              value={formData.ing2}
              onChange={onChangeHandler}
              name="ing2"
              type="text"
              className="form-control"
              id="ing2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ing3" className="form-label">
              Number of Rooms
            </label>
            <input
              value={formData.ing3}
              onChange={onChangeHandler}
              name="ing3"
              type="text"
              className="form-control"
              id="ing3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ing4" className="form-label">
              Number of Bathrooms
            </label>
            <input
              value={formData.ing4}
              onChange={onChangeHandler}
              name="ing4"
              type="text"
              className="form-control"
              id="ing4"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="qty1" className="form-label">
              Square Footage
            </label>
            <input
              value={formData.qty1}
              onChange={onChangeHandler}
              name="qty1"
              type="text"
              className="form-control"
              id="qty1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="qty2" className="form-label">
              Amenities
            </label>
            <select
              value={formData.qty2}
              onChange={onChangeHandler}
              name="qty2"
              className="form-select"
              id="qty2"
            >
              <option value="">Select Amenities</option>
              <option value="Pool">Pool</option>
              <option value="Gym">Gym</option>
              <option value="Parking">Parking</option>
              <option value="WiFi">WiFi</option>
              <option value="Laundry">Laundry</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="qty3" className="form-label">
              Lease Term
            </label>
            <input
              value={formData.qty3}
              onChange={onChangeHandler}
              name="qty3"
              type="text"
              className="form-control"
              id="qty3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="qty4" className="form-label">
              Contact Information
            </label>
            <input
              value={formData.qty4}
              onChange={onChangeHandler}
              name="qty4"
              type="text"
              className="form-control"
              id="qty4"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imgurl" className="form-label">
              Image URL
            </label>
            <input
              value={formData.imgurl}
              onChange={onChangeHandler}
              name="imgurl"
              type="text"
              className="form-control"
              id="imgurl"
            />
          </div>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">
              Add Apartment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;



