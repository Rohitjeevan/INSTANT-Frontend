import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "INSTANT");
  data.append("cloud_name", "rohitprajapati123");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/rohitprajapati123/image/upload",
      data, // Pass the 'data' directly as the second argument
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set the appropriate content type for form data
        },
      }
    );

    const url = res.data.url;

    return url;
  } catch (err) {
    
  }
};

export default upload;
















// import axios from "axios";

// const upload = async (file) => {
//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", "INSTANT");
//   data.append("cloud_name","rohitprajapati123");

  
//   try {
//     const res = await axios.post("https://api.cloudinary.com/v1_1/rohitprajapati123/image/upload", 
//     {
//       body:data,
//       mode: "no-cors",
//   }
// );

//   const  url  = res.data.url;
//     return url;
//   } catch (err) {
//     console.log(err);
//   }
// }
// export default upload;