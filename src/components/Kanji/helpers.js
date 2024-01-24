import HanziWriter from "hanzi-writer";

const loadKanjiWriter = async (kanji, kanjiId, setHasError) => {
return HanziWriter.create(kanjiId, kanji, {
    width: 100,
    height: 100,
    padding: 5,
    strokeColor: "#ffffff",
    showOutline: false,
    radicalColor: "#337ab7",
    delayBetweenStrokes: 10, // milliseconds
    // strokeAnimationSpeed: 5, // 5x normal speed
    // delayBetweenLoops: 100,
    // onLoadCharDataSuccess: function (data) {
    //     setLoadedKanji(true);
    // },
    onLoadCharDataError: function (reason) {
      console.log(`Filed  to kanji load => ${kanji} `, reason);
      setHasError(true);
    },
  });
};

export { loadKanjiWriter };
