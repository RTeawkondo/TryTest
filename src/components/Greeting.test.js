import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe("Greeting component", ()=>{
    test("render Greeting", ()=> {
        //arrange, act, assert
    
        //arrange
        render(<Greeting/>)
    
        //act
    
        //assert, get -> err, query => none, find => promise
        const wordNeedFind = screen.getByText("henho", {exact: true})
        expect(wordNeedFind).toBeDefined()
    })


    test("Render change", () => {
        render(<Greeting/>)

        const buttonEle = screen.getByRole("button")
        userEvent.click(buttonEle)

        const wordNeedFind = screen.getByText("Ngu", {exact: true})
        expect(wordNeedFind).toBeDefined()
    })
})

