import React from "react";
import { resourcesData } from "../utils/resourceData";



const Resources = () => {
  return (
    <div className="min-h-screen bg-base-100  pt-24 pb-10">
      <div className=" ">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Study Resources
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Curated resources to help you study smarter and grow together.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resourcesData.map((section, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-4">
                {section.title}
              </h2>

              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="border-b pb-2 last:border-none">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary text-sm font-medium"
                      >
                        Visit →
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
