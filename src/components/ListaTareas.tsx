import { Tarea } from "./Tarea"

type listaTareasProps = {
    listaTareas: string[]
    borrarTarea: (index:number) => void
}

 export const ListaTareas = ({listaTareas, borrarTarea}: listaTareasProps) => {
  return (
    <div className="tasklist">
        {listaTareas.map((tarea,index) => (
            <Tarea key={index} tarea = {tarea} borrarTarea={() => borrarTarea(index) }></Tarea>
        ))}
    </div>
  )
}