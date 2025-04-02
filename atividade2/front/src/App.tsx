import Display from "./components/Display";
import Input from "./components/Input";
import { LetterProvider } from "./contexts/LetterCtx";

function App(){
  return <LetterProvider>
    <h3>Atividade 2 - React Context</h3>
    <Input/>
    <Display/>
  </LetterProvider>
}

export default App;