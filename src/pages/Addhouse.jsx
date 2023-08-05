import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button, TextArea } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Addhouse = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the form data to the API endpoint here
      const response = await fetch("https://backend-green-eta.vercel.app/addHouse", {
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
    
    <div className="Addhouse" style={{margin: '30px' }}>
      <Navbar />
      <h2 style={{ color: 'whitesmoke', fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Add your Property details Here </h2>
      <Form inverted onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Images (Separate URLs with commas)</label>
          <input type="text" name="images" {...register("images")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Title</label>
          <input type="text" name="title" {...register("title")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Owner</label>
          <input type="text" name="owner" {...register("owner")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Price</label>
          <input type="number" name="price" {...register("price")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Location</label>
          <input type="text" name="location" {...register("location")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Bedrooms</label>
          <input type="number" name="bedrooms" {...register("bedrooms")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Bathrooms</label>
          <input type="number" name="bathrooms" {...register("bathrooms")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Description</label>
          <TextArea name="description" {...register("description")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Phone Number</label>
          <input type="tel" name="phoneNumber" {...register("phoneNumber")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>WhatsApp</label>
          <input type="tel" name="whatsApp" {...register("whatsApp")} />
        </Form.Field>
        <Form.Field>
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>Socials (Separate URLs with commas)</label>
          <input type="text" name="socials" {...register("socials")} />
        </Form.Field>
        <Button positive type="submit" style={{ width: '30%',  fontWeight: "bold", padding: "10px 20px", margin:'5px' }}>Add Listing </Button>
        <Button negative type='reset' style={{ width: '30%',  fontWeight: "bold", padding: "10px 20px" }}> Cancel </Button>
      </Form>
      <Footer />
    </div>
  );
};

export default Addhouse;
