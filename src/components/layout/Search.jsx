import React,{useState} from 'react';

const Search = (props) => {
    const [text, setText] = useState("");
    const {getSearch} = props;
    const inputChangeHandler=(e)=>{
        setText(e)
        getSearch(e)
    }

    console.log(text)

    return (
        <div className='mt-3 mb-4'>
            <input 
            type="text" 
            className='input-group' 
            placeholder='search'
            value={text}
            name='search'
            onChange={(e)=>inputChangeHandler(e.target.value)} />
        </div>
    )
}

export default Search
