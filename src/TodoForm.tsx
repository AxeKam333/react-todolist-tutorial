import { useState } from "react"

interface TodoFormProps {
    onSubmit: any,
}

export function TodoForm({ onSubmit }: TodoFormProps) {

    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e: any) {
        e.preventDefault()
        if (newItem === "") return
    
        onSubmit(newItem)

        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
            <label htmlFor="item">New item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            <button className="btn">Add</button>
            </div>
        </form>
    )
}