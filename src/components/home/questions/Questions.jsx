import "./questions.scss";
import React, {useState} from "react";
import data from "../../data/quiz2.json";
import { useHistory } from 'react-router-dom';


export default function Questions() {
  const questions = data.data ?? [];
  const [updateCheckedState, setUpdateCheckedState] = useState([]);
  const history = useHistory();
  

  const changeHandler = () => {
    const result = {}
    result.a = updateCheckedState.filter(x => x === 0).length 
    result.b = updateCheckedState.filter(x => x === 1).length 
    result.c = updateCheckedState.filter(x => x === 2).length 

    function findMax(obj) {
      var keys = Object.keys(obj);
      var max = keys[0];
      for (var i = 1, n = keys.length; i < n; ++i) {
         var k = keys[i];
         if (obj[k] > obj[max]) {
            max = k;
         }
      }
      return max;
  }
    var page = findMax(result)

    if(page === 'a'){
      history.push('/fragil');
      console.log('fragil')
    }
    else if(page === 'b'){
      history.push('/resistente');
      console.log('resistente')
    }
    else if(page === 'c'){
      history.push('/antifragil');
      console.log('antifragil')
    }
  }

  return (
    <div className="container">
          {questions.map((q, i) => (
        <div key={i} className="resposta" >
              <span>Situação hipotética:</span>
              <div className="infoPerguntas">
                <div className="pergunta">{q.question}Você:</div>
                <div className="grupoResposta">
                  {q.options.map( (r, j) => (
                    <div>
                      <label >
                        <input className="radio" type="radio" name={i} value={r.answer} onChange={() => setUpdateCheckedState(arr => [...arr, j]) }/>
                        {r.answer}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
        </div>
          ))}
          <button className="link" onClick={changeHandler} >Resultado</button>
    </div>
  );
}
