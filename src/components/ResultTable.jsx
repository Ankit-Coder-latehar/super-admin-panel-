import React from 'react';

const Card = ({ title, imageUrl, altText }) => {
  return (
    <div className="w-80 h-34 mx-2 bg-gray-100 mt-10">
      <div className="bg-white rounded-lg shadow-lg items-center justify-left">
        <img className="w-full h-40 object-cover p-4 rounded-md" src={imageUrl} alt={altText} />
        <div className="p-2 text-center">
          <h2 className="text-sm font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

const ResultTable = () => {
  return (
    <div className="flex justify-start space-x-4"> {/* Changed justify-center to justify-start */}
      <Card
        title="Subscription History"
        imageUrl="/Rectangle 425.png" // Replace with actual image URL
        altText="Subscription History"
      />
      <Card
        title="Marketing Credit History"
        imageUrl="/Rectangle 426.png" // Replace with actual image URL
        altText="Marketing Credit History"
      />
      <Card
        title="Marketer Reports"
        imageUrl="/Rectangle 427.png" // Replace with actual image URL
        altText="Marketer Reports"
      />
    </div>
  );
};

export default ResultTable;
