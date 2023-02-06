import React from "react"

const QuestionCard = ({
  question = "",
  answers = [],
  handleClick,
  indexNum,
}) => {
  return (
    <div>
      <section className="question-section" style={{ backgroundColor: "red" }}>
        <div className="question-container">{String(question)}</div>
      </section>

      <section className="answer-section">
        <div className="answers-container">
          {answers.map((item, index) => {
            const ansStyle = item.isSelected
              ? { backgroundColor: "CornFlowerBlue" }
              : { backgroundColor: "none" }

            return (
              <div className="answer-container">
                <button
                  style={ansStyle}
                  onClick={
                    e => handleClick(e, item.id, indexNum, item.isSelected)
                    // item.isSelected != item.isSelected
                    // console.log(item.isSelected)
                  }
                  key={index}
                >
                  {String(item.answer)}
                </button>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default QuestionCard
