import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("render Greeting", ()=> {
    //arrange, act, assert

    //arrange
    render(<Greeting/>)

    //act

    //assert, get -> err, query => none, find => promise
    const wordNeedFind = screen.getByText("henho", {exact: true})
    expect(wordNeedFind).toBeDefined()
})