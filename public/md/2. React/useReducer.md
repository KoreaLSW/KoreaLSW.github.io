# React `useReducer` 핵심 정리 💼

## 1. 정의 (Definition)

> <b>"컴포넌트의 상태 업데이트 로직을 컴포넌트 밖으로 분리하여, 체계적으로 관리하게 해주는 훅"</b>

- `useState`의 <b>심화 버전(Upgraded Version)</b>입니다.
- 상태를 바꿀 때 "그냥 바꿔줘(setState)"가 아니라, <b>"이런 동작(Action)을 수행해줘!"</b>라고 구체적인 명령을 내리는 방식입니다.

---

## 2. 핵심 비유: "은행 창구 시스템" 🏦

`useReducer`의 동작 원리는 은행과 똑같습니다.

1.  <b>Customer (컴포넌트):</b> 창구 직원에게 <b>"입금해주세요"</b> 또는 <b>"출금해주세요"</b>라고 적힌 <b>전표(Action)</b>를 건넵니다. (<b>Dispatch</b>)
2.  <b>Bank Teller (Reducer):</b> 전표를 받고, 현재 잔고(<b>State</b>)를 확인한 뒤, 규칙에 따라 계산해서 새로운 잔고를 만듭니다.
3.  <b>Balance (State):</b> 최종적으로 업데이트된 통장 잔고입니다.

> <b>핵심:</b> 고객(컴포넌트)이 직접 금고를 열어서 돈을 수정하는 게 아닙니다(`setState`와의 차이). 반드시 <b>직원(Reducer)을 통해서만</b> 수정할 수 있습니다.

---

## 3. 구성 요소 4총사

이 4가지 용어만 알면 끝입니다.

| 용어         | 역할                      | 비유            | 코드 예시                                 |
| :----------- | :------------------------ | :-------------- | :---------------------------------------- |
| <b>State</b>    | 현재 상태 데이터          | <b>통장 잔고</b>   | `money`                                   |
| <b>Action</b>   | 무엇을 할지 적은 객체     | <b>입출금 전표</b> | `{ type: 'DEPOSIT', amount: 1000 }`       |
| <b>Dispatch</b> | Action을 발생시키는 함수  | <b>전표 제출</b>   | `dispatch({ type: '...' })`               |
| <b>Reducer</b>  | 상태를 실제로 바꾸는 함수 | <b>은행원</b>      | `function reducer(state, action) { ... }` |

---

## 4. 사용법 (Step-by-Step)

### ① 은행원(Reducer) 채용하기

가장 먼저 "어떤 요청이 들어오면 어떻게 처리할지" 규칙을 정하는 함수를 만듭니다. (컴포넌트 밖에 만듭니다.)

```javascript
// state: 현재 상태, action: 요구사항 객체
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": // "증가시켜줘"
      return state + 1;
    case "DECREMENT": // "감소시켜줘"
      return state - 1;
    case "RESET": // "초기화해줘"
      return 0;
    default:
      return state; // 모르는 요청이면 그대로 둠
  }
}
```

### ② 컴포넌트에서 사용하기

`useReducer` 훅을 연결합니다.

```javascript
import React, { useReducer } from "react";

function Counter() {
  // useReducer(은행원함수, 초기값)
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    // dispatch: "INCREMENT라는 작업을 해줘!"라고 명령
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>값: {number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
```

---

## 5\. 언제 `useState` 대신 써야 하나요?

무조건 `useReducer`가 좋은 건 아닙니다. 코드가 길어지니까요.

| 구분              | useState                           | useReducer                                    |
| :---------------- | :--------------------------------- | :-------------------------------------------- |
| <b>데이터 형태</b>   | 숫자, 문자열, boolean 등 단순한 값 | 객체(Object), 배열 등 구조가 복잡한 값        |
| <b>업데이트 로직</b> | 단순함 (`setCount(count + 1)`)     | 복잡함 (조건에 따라 다르게 바뀌어야 함)       |
| <b>유지 보수</b>     | 컴포넌트 안에 로직이 섞여 있음     | <b>로직을 컴포넌트 밖으로 분리 가능</b> (깔끔함) |

> <b>💡 요약</b>
>
> - 관리할 State가 많거나, 수정 로직이 복잡하다? 👉 <b>`useReducer`</b>
> - 그냥 카운터 정도다? 👉 <b>`useState`</b>

```

```
