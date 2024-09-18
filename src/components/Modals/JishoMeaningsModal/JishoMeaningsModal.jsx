import React from 'react';
import './JishoMeaningsModal.scss';

function SortModal({ jishoData }) {
  console.log({ jishoData });

  return (
    <div className="jisho-meanings-modal">
      <div className="jisho-meanings-modal-content">

        {jishoData.map((data) => (
          <div key={data.jp}>
            <span>{data.jp}</span>
            <span>{data.meanings.map((mean) => mean[1])}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortModal;
