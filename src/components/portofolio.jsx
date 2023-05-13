import React from 'react';

const Portofolio = () => {
  const handleSeeCodeClick = () => {
    window.open('/portofolio', '_blank');
  };

  return (
    <div className="portofolio-body">
      <h1>Portofolio</h1>
      <button onClick={handleSeeCodeClick}>
        <span>SEE CODE</span>
      </button>
    </div>
  );
};

export default Portofolio;
