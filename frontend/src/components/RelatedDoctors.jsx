import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const DoctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(DoctorsData);
    }
  }, [doctors, speciality, docId]);
  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h1 className="text-3xl font-medium">Related Doctors</h1>
        <p className="sm:w-1/3 text-center text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
          {relDoc.slice(0, 5).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              key={index}
              className="border border-cyan-600 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-500 items-center hover:shadow-2xl"
            >
              <img
                className="bg-cyan-50"
                src={item.image}
                alt="doctor_images"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500 text-center">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 font-medium">{item.name}</p>
                <p className="text-gray-400 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedDoctors;
