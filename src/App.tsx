import { useDispatch, useStore } from "react-redux";
import {
  addCash,
  changeNickname,
  getCash,
  addUser,
  removeUser,
} from "./app/reducer/bankSlice";
import { useAppSelector } from "./app/hooks/hooks";

function App() {
  const dispatch = useDispatch();
  const cash = useAppSelector((state) => state.cash.cash);
  const nick = useAppSelector((state) => state.cash.username);
  const users = useAppSelector((state) => state.cash.users);
  const store = useStore();

  console.log(store.getState());

  return (
    <div className="App">
      <div>{cash}</div>
      <div>{nick}</div>
      <div>
        <button
          onClick={() =>
            dispatch(changeNickname(prompt("Введите ник") || "Any"))
          }
        >
          Сменить ник
        </button>
        <button
          onClick={() => dispatch(addCash(Number(prompt("Введите сумму"))))}
        >
          Положить деньги
        </button>
        <button
          onClick={() => dispatch(getCash(Number(prompt("Введите сумму"))))}
        >
          Снять деньги
        </button>
        <button
          onClick={() =>
            dispatch(addUser(prompt("Введите сумму") || "Any user"))
          }
        >
          Добавить юзера
        </button>
      </div>
      {users.map((user: string) => {
        return (
          <div
            key={user}
            style={{ padding: "10px" }}
            onClick={() => {
              dispatch(removeUser(user));
            }}
          >
            {user}
          </div>
        );
      })}
    </div>
  );
}

export default App;
