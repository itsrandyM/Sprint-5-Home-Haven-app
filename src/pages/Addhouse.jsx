import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Addhouse = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the form data to the API endpoint here
      const response = await fetch("http://localhost:4000/addHouse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (response.ok) {
        // If house is successfully added, navigate to the Home page
        navigate("/");
      } else {
        // Handle errors here (e.g., show an error message)
        console.error("Error adding house:", json.error);
      }
    } catch (error) {
      console.error("Error adding house:", error.message);
    }
  };

  return (
    <div className="Addhouse">
      <h2>Add House</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="images">Images (Separate URLs with commas) 
          <input
            type="text"
            name="images"
            id="images"
            {...register("images")}
          />
        </label>
        <label htmlFor="title">Title 
          <input
            type="text"
            name="title"
            id="title"
            {...register("title")}
          />
        </label>
        <label htmlFor="owner">Owner 
          <input
            type="text"
            name="owner"
            id="owner"
            {...register("owner")}
          />
        </label>
        <label htmlFor="price">Price 
          <input
            type="number"
            name="price"
            id="price"
            {...register("price")}
          />
        </label>
        <label htmlFor="location">Location 
          <input
            type="text"
            name="location"
            id="location"
            {...register("location")}
          />
        </label>
        <label htmlFor="bedrooms">Bedrooms 
          <input
            type="number"
            name="bedrooms"
            id="bedrooms"
            {...register("bedrooms")}
          />
        </label>
        <label htmlFor="bathrooms">Bathrooms 
          <input
            type="number"
            name="bathrooms"
            id="bathrooms"
            {...register("bathrooms")}
          />
        </label>
        <label htmlFor="description">Description 
          <textarea
            name="description"
            id="description"
            {...register("description")}
          />
        </label>
        <label htmlFor="phoneNumber">Phone Number 
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            {...register("phoneNumber")}
          />
        </label>
        <label htmlFor="whatsApp">WhatsApp 
          <input
            type="tel"
            name="whatsApp"
            id="whatsApp"
            {...register("whatsApp")}
          />
        </label>
        <label htmlFor="socials">Socials (Separate URLs with commas) 
          <input
            type="text"
            name="socials"
            id="socials"
            {...register("socials")}
          />
        </label>
        <button type="submit">Add House</button>
      </form>
    </div>
  );
};

export default Addhouse;
