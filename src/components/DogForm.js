import React from "react"
import questions from "./questions.json"
import QuestionCard from "./QuestionCard"
import { nanoid } from "nanoid"

const DogForm = () => {
  const [data, setData] = React.useState("")
  const [answersToCook, setAnswersToCook] = React.useState([])
  const [newAnswersToCook, setNewAnswersToCook] = React.useState(
    Object.keys(questions).map(item => {
      const groupArr = []
      questions[item].answers.map(item => {
        item = { ...item, id: nanoid(), isSelected: false }
        groupArr.push(item)
      })
      return groupArr
    })
  )
  const questionsToCook = []
  const [renderQues, setRenderQues] = React.useState()

  const coating = []
  console.log(newAnswersToCook)
  // * make an question form which have question and answer interact part. ------------------<
  // React.useEffect(() => {
  //   Object.keys(questions).map((item, index) => {
  //     questionsToCook.push(questions[item].question)

  //     const answers4Question = []
  //     questions[item].answers.map(item => {
  //       item = { ...item, id: nanoid(), isSelected: false }
  //       answers4Question.push(item)
  //     })
  //     coating.push(answers4Question)
  //   })
  //   setAnswersToCook(coating)
  //   console.log("hi")
  //   const renderQues = questionsToCook.map((item, index) => {
  //     const ansBlock = coating[index]

  //     return (
  //       <QuestionCard
  //         question={item}
  //         answers={ansBlock}
  //         handleClick={handleClick}
  //         indexNum={index}
  //       />
  //     )
  //   })
  //   setRenderQues(renderQues)
  // }, [])

  const answerToCook = []
  Object.keys(questions).map((item, index) => {
    questionsToCook.push(questions[item].question)

    const groupingArray = []
    questions[item].answers.map(item => {
      item = { ...item, id: nanoid(), isSelected: false }
      groupingArray.push(item)
    })
    answerToCook.push(groupingArray)
  })
  // React.useEffect(() => {
  //   setNewAnswersToCook(answerToCook)
  // }, [])

  const renderThis = questionsToCook.map((item, index) => {
    const question = item

    const currentAnsBlock = newAnswersToCook[index]
    return (
      <QuestionCard
        question={question}
        answers={currentAnsBlock}
        handleClick={handleClick}
        indexNum={index}
      />
    )
  })
  console.log(newAnswersToCook) //line 100 same id with  /  QuestionCard.js id is totally different
  // * make an question form which have question and answer interact part. ------------------>

  // function handleClick(e, id, indexNum, boolean) {
  //   const newBlock = newAnswersToCook[indexNum].map(item => {
  //     return item.id === id
  //       ? { ...item, isSelected: true }
  //       : { ...item, isSelected: false }
  //   })

  //   const copyBlocks = newAnswersToCook
  //   copyBlocks[indexNum] = newBlock
  //   setNewAnswersToCook(copyBlocks)
  //   // setNewAnswersToCook(prev => {
  //   // })
  // }
  function handleClick(e, id, indexNum) {
    // console.log(indexNum)
    const newBlock = newAnswersToCook.map((block, index) => {
      // if (index === indexNum) console.log(block)
      return index === indexNum
        ? block.map(item => {
            return item.id === id
              ? { ...item, isSelected: true }
              : { ...item, isSelected: false }
          })
        : block
    })
    // console.log(newBlock) //first render's id
    setNewAnswersToCook(newBlock)
  }
  // function handleClick(e, id, indexNum, boolean) {
  //   const test = []

  //   answerToCook.map(block => {
  //     console.log(block)
  //     block.map(item => {
  //       console.log(item)
  //       // test.push(
  //       //   item.id === id
  //       //     ? { ...item, isSelected: true }
  //       //     : { ...item, isSelected: false }
  //       // )
  //     })
  //   })
  //   // setAnswersToCook(newAns)
  // }

  function makingQuery() {
    let query = ""
    newAnswersToCook.map(item => {
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
      {renderThis}
      {JSON.stringify(data)}
      <br />
      <button onClick={callingAPI}>call api</button>
    </section>
  )
}

export default DogForm
