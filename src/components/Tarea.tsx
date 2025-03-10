
type tareaProps = {
    tarea: string
    borrarTarea: () => void
}

export const Tarea = ({tarea,borrarTarea}: tareaProps) => {
  return (
    <div className="task">
        <span>{tarea}</span>
        <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}