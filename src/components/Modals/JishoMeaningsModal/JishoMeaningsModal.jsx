import React, { useEffect, useState } from 'react';
import './JishoMeaningsModal.scss';
import { parseHtml } from '../../../utils';

function JishoMeaningsModal({ filters }) {
  const [jishoData, setJishoData] = useState(null);

  useEffect(() => {
    async function fetchData(term) {
      await fetch(`/api/jisho/search/${term}`)
        .then((res) => res.text())
        .then((html) => {
          const parssedJishoData = parseHtml(html);
          setJishoData(parssedJishoData);
        })
        .catch((err) => console.log(err));
    }
    if (filters && filters.text)fetchData(filters.text);
  }, []);

  console.log({ jishoData });
  return (
    <div className="jisho-meanings-modal">
      <div className="jisho-meanings-modal__content">
        {!jishoData && <span>LOADING</span>}
        {!!jishoData && jishoData.map((data) => (
          <div key={data.id} className="jisho-meanings-modal__content__word">
            <span className="jisho-meanings-modal__content__word__jp">{data.jp}</span>
            <div className="jisho-meanings-modal__content__word__meanings">
              {data.meanings.map((mean) => (
                <span className="jisho-meanings-modal__content__word__meanings__meaning">
                  {mean[1]}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JishoMeaningsModal;
