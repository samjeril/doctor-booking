import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Samiul Chowdhury",
    image: assets.profile_pic,
    email: "example@gmail.com",
    phone: "+1  1999627119",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle , church road, London",
    },
    gender: "Male",
    dob: "2000/01/18",
  });

  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm  ">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-100 text-3xl font-medium max-w-72 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className=" font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="border-r-gray-300" />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id: </p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input type="text" />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>BIRTHDAY:</p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div>
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Save Information</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
