import { test, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import { Input } from "./Input"


test("renders input with placeholder", () => {
  render(<Input placeholder="Digite aqui" />)

  expect(screen.getByPlaceholderText("Digite aqui")).toBeInTheDocument()
})

test("calls onChange when typing", () => {
  const handleChange = vi.fn()

  render(<Input placeholder="Nome" onChange={handleChange} />)

  fireEvent.change(screen.getByPlaceholderText("Nome"), {
    target: { value: "Guilherme" }
  })

  expect(handleChange).toHaveBeenCalled()
})