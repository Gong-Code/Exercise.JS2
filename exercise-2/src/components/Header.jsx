
export const Header = ({ title, clearList }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='clear-btn' onClick={clearList}>Clear List</button>
        </header>
    )
}
