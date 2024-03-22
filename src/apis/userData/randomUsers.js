import axios from "axios";

const randomUsers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://randomuser.me/api/?results=5000")
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default randomUsers;
