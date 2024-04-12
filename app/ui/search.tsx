

interface Search{
    search: string,
    handleChange: Function,
    placeholder: string
}

export default function Search(props: Search): JSX.Element {

    return (

    <input
     value={props.search}
    onChange={(e) => props.handleChange(e.target.value) }
    type="search" 
    className="search"
    placeholder={props.placeholder}/>

    ) 
    }