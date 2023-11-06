const Panel = ({
  questionNumber,
  choicesVector,
  setCurrentQuestionBlock,
  setCurrentQuestion,
  setCurrentQuestionNumber,
  setChoiceIndex,
  indexMap,
  otherClassNames,
  currentQuestionNumber
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
      <div className={`${otherClassNames} sm:pb-4`}>
        <h2 className="text-md my-1 text-slate-800 font-bold">Panel</h2>
        <div className="my-2">
          {panel.map((element, index) => (
            <span
              key={index}
              onClick={() => onClickPanel(index)}
              className={`${choicesVector[index] !== -1 ? "bg-green-400" : "bg-white"}
               ${element === currentQuestionNumber? "" : "hover:bg-gray-200"}
                cursor-pointer 
                rounded-md
                p-2
                text-sm
                mx-1
            `}
            >
              {" " + element}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Panel;
