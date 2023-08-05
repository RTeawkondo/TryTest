import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Async component",()=>{
    test("hehe",  async ()=>{
        render(<Async/>)

        const listItem = await screen.findAllByRole("listitem")
        expect(listItem).not.toHaveLength(0)
    })
})