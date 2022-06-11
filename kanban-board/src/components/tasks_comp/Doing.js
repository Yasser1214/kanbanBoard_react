import "./Tasks.css"

export default function Doing(props) {

  return (
    <li className="border d-flex justify-content-between 
    align-items-center mb-2">
      <p className="tasks-content m-auto">{props.txt}</p>
      <button className="btn btn-danger p-1 
      h-5" onClick={() => props.delFunc(props.id)}>X</button>
      {/* We affect an anonymous func. to the event to prevent it 
      executing it self onload */}

      <button className="btn btn-info p-1 h-5"
      onClick={ () => {
        props.move(1, props.txt);
        props.delFunc(props.id);
      }}>
        ↑
      </button>
    </li>
  )
   
}