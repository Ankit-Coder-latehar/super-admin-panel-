import React from 'react';

const Card = ({ title, imageUrl, altText }) => {
  return (
    <div className="w-full md:w-80 m-4 bg-gray-100">
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
    <div className="w-full flex flex-wrap justify-center gap-4">
      <a href="/subscriptions" className="w-full md:w-auto">
        <Card
          title="Subscription History"
          imageUrl="/Rectangle 425.png"
          altText="Subscription History"
        />
      </a>
      <a href="/marketCredits" className="w-full md:w-auto">
        <Card
          title="Marketing Credit History"
          imageUrl="/Rectangle 426.png"
          altText="Marketing Credit History"
        />
      </a>
      <a href="/marketreport" className="w-full md:w-auto">
        <Card
          title="Marketer Reports"
          imageUrl="/Rectangle 427.png"
          altText="Marketer Reports"
        />
      </a>
    </div>
  );
};

export default ResultTable;
