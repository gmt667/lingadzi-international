import React from "react";
import { universityStudents } from "../Data/universityStudents";

const AlumniSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-800">Our 2023 Alumni</h2>
        <p className="text-gray-600">Celebrating Excellence & Achievements</p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {universityStudents.map((student, index) => (
          <div
            key={index}
            className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <img
              src={student.image}
              alt={student.name}
              className="object-cover w-full h-60"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
              <p className="text-sm text-blue-700">{student.program}</p>
              <p className="text-sm text-gray-500">{student.university}</p>
              <p className="text-sm italic text-gray-400">{student.year}</p>
              {student.contact.phone && (
                <p className="mt-2 text-sm text-gray-600">
                  📞 <span className="font-medium">{student.contact.phone}</span>
                </p>
              )}
              {student.contact.email && (
                <p className="text-sm text-gray-600">
                  📧 <span className="font-medium">{student.contact.email}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlumniSection;
