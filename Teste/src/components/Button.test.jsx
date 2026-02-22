import {test, expect} from "vitest"
import {screen, render} from "@testing-library/react"
import { Button } from "./Button"
import "@testing-library/jest-dom/vitest"

test("Button renders", () => {
    
    render(<Button label={"Click me"}/>)

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('Click me')
});

test("Button is disabled", () => {
    
    render(<Button disabled/>)

    const button = screen.getByRole('button')

    expect(button).toBeDisabled('Click me')
});