import React from "react"
import questions from "./questions.json"
import QuestionCard from "./QuestionCard"
import { nanoid } from "nanoid"

const DogForm = () => {
  const [data, setData] = React.useState("")

  const questionsToCook = []
  const answersToCook = []

  // * make an question form which have question and answer interact part. ------------------<
  Object.keys(questions).map((item, index) => {
    questionsToCook.push(questions[item].question)

    const answers4Question = []
    questions[item].answers.map(item => {
      item = { ...item, id: nanoid(), isSelected: false }
      answers4Question.push(item)
    })
    answersToCook.push(answers4Question)
  })

  // * make an question form which have question and answer interact part. ------------------>
  const renderQues = questionsToCook.map((item, index) => {
    const ansBlock = answersToCook[index]

    // function handleClick(e, id, indexNum, boolean) {
    //   answersToCook[indexNum] = answersToCook[indexNum].map(item => {
    //     return item.id === id
    //       ? { ...item, isSelected: true }
    //       : { ...item, isSelected: false }
    //   })
    //   console.log(e)
    // }

    return (
      <QuestionCard
        question={item}
        answers={ansBlock}
        handleClick={handleClick}
        indexNum={index}
      />
    )
  })

  function handleClick(e, id, indexNum, boolean) {
    answersToCook[indexNum] = answersToCook[indexNum].map(item => {
      return item.id === id
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false }
    })
    console.log(e)
  }

  console.log(answersToCook)

  function makingQuery() {
    let query = ""
    answersToCook.map(item => {
      item.map(answer => {
        if (answer.isSelected === true) {
          const splittedAns = answer.value.split(",")
          // split the value by : and make a form of "leftSide=rightSide"
          splittedAns.map(item => {
            // no preference for weight. avoid undefined
            if (item === "") return
            const keyValueString = item.split(":")
            const [keyPart, valuePart] = keyValueString
            const aQuery = `${keyPart}=${valuePart}&`
            query += aQuery
          })
        }
      })
    })
    console.log(query)
    return query
  }

  const callingAPI = async () => {
    const query = makingQuery()
    const url = `https://api.api-ninjas.com/v1/dogs?${query}`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": `${process.env.REACT_APP_API_NINJA_API_KEY}`,
      },
      contentType: "application/json",
    })

    const res = await response.json()

    setData(res)
  }

  return (
    <section>
      {renderQues}
      {JSON.stringify(data)}
      <br />
      <button onClick={callingAPI}>call api</button>
    </section>
  )
}

export default DogForm