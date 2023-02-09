import React from "react"

const QuestionCard = ({
  question = "",
  answers = [],
  handleClick,
  indexNum,
}) => {
  //   console.log(answers)
  return (
    <div>
      <section
        className="question-section"
        style={{ backgroundColor: "red", border: "solid 1px black" }}
      >
        <div className="question-container">{String(question)}</div>
      </section>

      <section className="answer-section">
        <div className="answers-container">
          {answers.map((item, index) => {
            // console.log(item.id)
            const ansStyle = item.isSelected
              ? { backgroundColor: "CornFlowerBlue" }
              : { backgroundColor: "white" }

            return (
              <div className="answer-container">
                <button
                  style={ansStyle}
                  onClick={
                    e => handleClick(e, item.id, indexNum)
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
