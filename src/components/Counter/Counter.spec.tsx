import { cleanup } from "@testing-library/react";
import { renderHook, act } from '@testing-library/react'
import { useCounter } from "./useCounter";


/*
・カスタムフックに渡した初期値が反映されているか？
・カスタムフックから受け取る関数が期待通りの処理を行っているか？
*/


afterEach(() => cleanup());

describe("useCounter", () => {
  const initialValue = 1;
  it("初期値確認", () => {
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.count).toBe(initialValue);
  })
  it("increment結果確認", () => {
    const { result } = renderHook(() => useCounter(initialValue));
    act(() => { result.current.increment() });
    expect(result.current.count).toBe(initialValue + 1);
  })

  it("decrement結果確認", () => {
    const { result } = renderHook(() => useCounter(initialValue));
    act(() => { result.current.decrement() });
    expect(result.current.count).toBe(initialValue - 1);
  })

  it("double結果確認", () => {
    const { result } = renderHook(() => useCounter(initialValue));
    act(() => { result.current.double() });
    expect(result.current.count).toBe(initialValue * 2);
  })

  it("reset結果確認", () => {
    const { result } = renderHook(() => useCounter(initialValue));
    act(() => { result.current.reset() });
    expect(result.current.count).toBe(0);
  })
})