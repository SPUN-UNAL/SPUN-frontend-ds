const Panel = ({
  questionNumber,
  choicesVector,
  setCurrentQuestionBlock,
  setCurrentQuestion,
  setCurrentQuestionNumber,
  setChoiceIndex,
  indexMap,
}) => {
  const onClickPanel = (index) => {
    // Go to question of the index
    setCurrentQuestionBlock(indexMap[index][0]);
    setCurrentQuestion(indexMap[index][1]);
    setCurrentQuestionNumber(index + 1);
    if (choicesVector[index] === -1) {
      setChoiceIndex(null);
    } else {
      setChoiceIndex(choicesVector[index]);
    }
  };
  const panel = Array.from({ length: questionNumber }, (_, i) => i + 1);
  return (
    <>
      {/* Panel */}
      <div className="">
        Panel:
        {panel.map((element, index) => (
          <span
            key={index}
            onClick={() => onClickPanel(index)}
            className={choicesVector[index] !== -1 ? "bg-green-600" : ""}
          >
            {" " + element}
          </span>
        ))}
      </div>
    </>
  );
};

export default Panel;
